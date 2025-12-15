import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Resolve API base URL for both local dev and production (GitHub Pages).
 * Priority:
 * 1) localStorage.API_BASE_URL (runtime override for quick testing)
 * 2) window.__API_BASE_URL__ (injected at runtime if desired)
 * 3) docusaurus.config customFields.apiBaseUrl (build-time)
 * 4) localhost default when on localhost
 * 5) localhost default fallback
 */
export function useApiBaseUrl(): string {
  const { siteConfig } = useDocusaurusContext();

  const fromLocalStorage = typeof window !== 'undefined'
    ? window.localStorage.getItem('API_BASE_URL')
    : null;

  const fromWindow = typeof window !== 'undefined'
    ? (window as any).__API_BASE_URL__
    : undefined;

  const fromConfig = (siteConfig?.customFields as any)?.apiBaseUrl as string | undefined;

  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const defaultLocal = 'http://localhost:8000';
  const inferred = (hostname === 'localhost' || hostname === '127.0.0.1') ? defaultLocal : undefined;

  return (fromLocalStorage || fromWindow || fromConfig || inferred || defaultLocal) as string;
}

export default useApiBaseUrl;
