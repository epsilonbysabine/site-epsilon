// Catalogue des offres : une seule source pour l'accueil, la page Prestations et les sommaires de page.
export interface Offer {
  title: string;
  text: string;
  href: string;
}
export interface OfferGroup {
  id: string;
  label: string;
  intro: string;
  href: string;
  image: string;
  imageAlt: string;
  items: Offer[];
}

export const offerGroups: OfferGroup[] = [
  {
    id: 'particuliers',
    label: 'Sportifs, étudiants, artistes',
    intro: 'Préparation mentale individuelle et ateliers',
    href: '/preparation-mentale',
    image: '/images/album-7.jpg',
    imageAlt: 'Atelier de préparation mentale avec des sportifs',
    items: [
      { title: 'Séances de préparation mentale', text: 'Un accompagnement sur mesure pour développer vos ressources mentales et performer au quotidien.', href: '/preparation-mentale#seances' },
      { title: 'Bilan de vos ressources', text: 'La première étape de tout accompagnement : entretien, tests et analyse pour construire vos séances sur mesure.', href: '/preparation-mentale#bilan' },
      { title: 'Ateliers pour sportifs', text: 'Sept thèmes à suivre au fil de la saison.', href: '/ateliers-preparation-mentale' },
      { title: 'Atelier pour les parents', text: 'Accompagner un jeune compétiteur sans ajouter de pression.', href: '/atelier-parents' },
      { title: 'Ateliers chez vous', text: '6 à 10 personnes à la maison, 25 € par personne.', href: '/ateliers-chez-vous' },
    ],
  },
  {
    id: 'entreprises',
    label: 'Entreprises',
    intro: 'Dirigeants, managers et équipes',
    href: '/coach-entreprise',
    image: '/images/album-5.jpg',
    imageAlt: "Sabine Djaouane avec l'équipe d'une entreprise cliente",
    items: [
      { title: 'Coaching individuel et d’équipe', text: 'Stress, cohésion, communication, accompagnement du changement.', href: '/coach-entreprise#coaching' },
      { title: 'Entretien de parcours professionnel', text: 'Externalisez vos entretiens obligatoires.', href: '/entretien-professionnel' },
      { title: 'Retour au travail après un burn-out', text: 'Accompagner la reprise, en lien avec le manager.', href: '/coach-entreprise#burn-out' },
      { title: 'Réunions efficaces', text: 'En finir avec la réunionite qui désengage.', href: '/coach-entreprise#reunions' },
      { title: 'Créativité et innovation', text: 'Ateliers, brainstorming et formations pour vos équipes.', href: '/creativite-innovation' },
      { title: 'Formations', text: 'Communication, créativité, management, PNL, gestion du stress.', href: '/formations' },
    ],
  },
];
