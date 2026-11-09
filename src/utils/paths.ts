const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the GitHub Pages base path (`/ismail-portfolio`). */
export function withBase(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
