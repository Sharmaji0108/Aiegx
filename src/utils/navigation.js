/**
 * Shared SPA navigation helper compatible with Aiegx App routing.
 */
export function navigateTo(targetPath, e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  if (!targetPath || typeof window === 'undefined') return;

  const [pathPart, hashPart] = targetPath.split('#');
  const nextPath = pathPart || '/';

  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: nextPath }));

  if (hashPart) {
    setTimeout(() => {
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  }
}

