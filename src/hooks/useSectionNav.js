import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Scrolls to a homepage section from anywhere in the site.
 * On the homepage it scrolls directly; from another route it
 * navigates home and lets the homepage restore the scroll position.
 */
export default function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (id) => {
      if (pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.replaceState(null, '', `#${id}`);
          return;
        }
      }
      navigate(`/#${id}`);
    },
    [pathname, navigate],
  );
}