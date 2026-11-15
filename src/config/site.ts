export const site = {
  name: 'Epsilon',
  legalName: 'EPSILON by Sabine',
  coach: 'Sabine Djaouane',
  tagline: 'Donner le meilleur de soi pour réussir',
  phone: '06.70.79.24.63',
  phoneHref: 'tel:0670792463',
  email: 'sabine@coaching-epsilon.net',
  address: ['MEDIKINOS', '260 rue du Mourelet', '84000 AVIGNON'],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabine-djaouane-80287650/' },
    { label: 'Facebook', href: 'http://www.facebook.com/epsilon84' },
    { label: 'X (Twitter)', href: 'https://twitter.com/SabineEpsilon' },
  ],
};

export const nav = [
  {
    label: 'Préparation mentale',
    href: '/preparation-mentale',
    children: [
      { label: 'Préparation mentale', href: '/preparation-mentale' },
      { label: 'Ateliers pour sportifs', href: '/ateliers-preparation-mentale' },
      { label: 'Ateliers développement personnel', href: '/ateliers-developpement-personnel' },
      { label: 'Mes partenaires', href: '/mespartenaires' },
    ],
  },
  {
    label: 'Entreprises',
    href: '/coach-entreprise',
    children: [
      { label: 'Coach entreprise', href: '/coach-entreprise' },
      { label: 'Entretien professionnel', href: '/entretien-professionnel' },
      { label: 'Formations', href: '/formations' },
      { label: 'Créativité & innovation', href: '/creativite-innovation' },
    ],
  },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Mes références', href: '/a-propos' },
      { label: 'Mes prestations', href: '/services' },
      { label: 'Mes clients', href: '/clients' },
      { label: 'Album photos', href: '/album-photo' },
    ],
  },
  { label: 'Blog', href: '/blog' },
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
