/**
 * Shared SPA navigation helper compatible with Aiegx App routing.
 */
export function navigateTo(targetPath, e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  if (!targetPath || typeof window === 'undefined') return;

  const [pathPart, hashPart] = targetPath.split('#');
  const currentPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const targetCleanPath = (pathPart || currentPath).toLowerCase().replace(/\/+$/, '') || '/';
  const fullTarget = hashPart ? `${targetCleanPath}#${hashPart}` : targetCleanPath;

  const isSamePage = targetCleanPath === currentPath;

  if (isSamePage) {
    if (hashPart) {
      window.history.pushState({}, '', fullTarget);
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.history.pushState({}, '', fullTarget);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    // Navigating from another page to targetCleanPath#hashPart
    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: fullTarget }));
    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }
}
