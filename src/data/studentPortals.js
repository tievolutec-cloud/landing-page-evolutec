export const studentPortals = [
  { name: 'Castanhal', slug: 'castanhal', url: null },
  { name: 'Curuçá', slug: 'curuca', url: null },
  { name: 'Igarapé-Açu', slug: 'igarape-acu', url: null },
  { name: 'Irituia', slug: 'irituia', url: null },
  {
    name: 'Maracanã',
    slug: 'maracana',
    url: 'https://dkportal.com.br/portal_aluno?i=zFUZx9eA2vGaQkq-q93df0lYOGJCQnFNZ0p4Qk9MenFGc1J1cWc9PQ',
  },
  { name: 'Marapanim', slug: 'marapanim', url: null },
  { name: 'São Domingos do Capim', slug: 'sao-domingos-do-capim', url: null },
  { name: 'São Miguel do Guamá', slug: 'sao-miguel-do-guama', url: null },
];

export const getStudentPortal = (slug) => (
  studentPortals.find((portal) => portal.slug === slug)
);
