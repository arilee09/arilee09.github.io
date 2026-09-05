export const sheets = [
  { title: 'Cover', slug: '', nav: 'Cover', theme: 'clay' },
  { title: 'Art & Architecture', slug: 'design-work', nav: 'Art & Architecture', theme: 'clay' },
  { title: 'Service', slug: 'service', nav: 'Service', theme: 'ochre' },
  { title: 'Music', slug: 'music', nav: 'Music', theme: 'berry' },
  { title: 'Research', slug: 'research', nav: 'Research', theme: 'moss' },
  { title: 'Film & Photography', slug: 'film-media', nav: 'Film & Photography', theme: 'slate' },
  { title: 'Sports', slug: 'sports', nav: 'Sports', theme: 'cornflower' },
  { title: 'Contact', slug: 'contact', nav: 'Contact', theme: 'clay' },
];

export function sheetBySlug(slug) {
  return sheets.find((s) => s.slug === slug);
}

export function neighbors(slug) {
  const i = sheets.findIndex((s) => s.slug === slug);
  return { prev: i > 0 ? sheets[i - 1] : null, next: i >= 0 && i < sheets.length - 1 ? sheets[i + 1] : null };
}
