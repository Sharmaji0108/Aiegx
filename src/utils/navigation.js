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
  const nextPath = pathPart || currentPath || '/';

  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: nextPath }));

  if (hashPart) {
    setTimeout(() => {
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

