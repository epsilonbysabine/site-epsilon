export const site = {
  name: 'Epsilon',
  legalName: 'EPSILON by Sabine',
  coach: 'Sabine Djaouane',
  tagline: 'Libérez et développez votre performance',
  phone: '06.70.79.24.63',
  phoneHref: 'tel:0670792463',
  email: 'epsilonbysabine@gmail.com',
  address: ['MEDIKINOS', '260 rue du Mourelet', '84000 AVIGNON'],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabine-djaouane-80287650/' },
    { label: 'Facebook', href: 'http://www.facebook.com/epsilon84' },
    { label: 'X (Twitter)', href: 'https://twitter.com/SabineEpsilon' },
  ],
};

// Pages que l'on peut masquer sans les supprimer : false = page invisible
// (plus de liens vers elle, et son adresse renvoie vers la page Préparation mentale).
export const visiblePages = {
  partenaires: false,
};

// Menu principal : liens directs, sans sous-menus.
export const nav = [
  { label: 'Préparation mentale', href: '/preparation-mentale' },
  { label: 'Entreprises', href: '/coach-entreprise' },
  { label: 'Ateliers', href: '/ateliers' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
];

// Plan du site affiché dans le pied de page et le menu mobile.
export const sitemap = [
  {
    label: 'Particuliers',
    children: [
      { label: 'Préparation mentale', href: '/preparation-mentale' },
      { label: 'Ateliers chez vous', href: '/ateliers-chez-vous' },
      { label: 'Ateliers pour sportifs', href: '/ateliers-preparation-mentale' },
      { label: 'Ateliers développement personnel', href: '/ateliers-developpement-personnel' },
      ...(visiblePages.partenaires ? [{ label: 'Nos partenaires', href: '/mespartenaires' }] : []),
    ],
  },
  {
    label: 'Entreprises',
    children: [
      { label: 'Coaching en entreprise', href: '/coach-entreprise' },
      { label: 'Entretien professionnel', href: '/entretien-professionnel' },
      { label: 'Formations', href: '/formations' },
      { label: 'Créativité & innovation', href: '/creativite-innovation' },
    ],
  },
  {
    label: 'Epsilon',
    children: [
      { label: 'Sabine Djaouane', href: '/a-propos' },
      { label: 'Nos prestations', href: '/services' },
      { label: 'Témoignages', href: '/clients' },
      { label: 'Album photos', href: '/album-photo' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

// Formulaire de contact Wix Forms : associez chaque champ du site à la clé du champ
// dans votre formulaire Wix (visible dans l'éditeur du formulaire, « Clé du champ »).
export const contactForm = {
  fields: {
    name: 'first_name',
    email: 'email',
    phone: 'phone',
    message: 'message',
  },
};
