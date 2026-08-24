export const sheets = [
  { num: 'A0.00', title: 'Cover', slug: '', nav: 'Cover' },
  { num: 'A1.00', title: 'Thesis', slug: 'about', nav: 'Thesis' },
  { num: 'A2.00', title: 'Design Work', slug: 'design-work', nav: 'Design Work' },
  { num: 'A3.00', title: 'Process & Research', slug: 'process', nav: 'Process' },
  { num: 'A4.00', title: 'Film & Media', slug: 'film-media', nav: 'Film & Media' },
  { num: 'A5.00', title: 'Music', slug: 'music', nav: 'Music' },
  { num: 'A6.00', title: 'Debate & Leadership', slug: 'debate', nav: 'Debate' },
  { num: 'A7.00', title: 'Service & Awards', slug: 'service-awards', nav: 'Service & Awards' },
  { num: 'A8.00', title: 'Contact', slug: 'contact', nav: 'Contact' },
];

export function sheetBySlug(slug) {
  return sheets.find((s) => s.slug === slug);
}

export function neighbors(slug) {
  const i = sheets.findIndex((s) => s.slug === slug);
  return { prev: i > 0 ? sheets[i - 1] : null, next: i < sheets.length - 1 ? sheets[i + 1] : null };
}
