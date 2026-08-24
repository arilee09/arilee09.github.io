export function withBase(path) {
  const base = import.meta.env.BASE_URL;
  return base.replace(/\/$/, '') + '/' + String(path).replace(/^\//, '');
}
