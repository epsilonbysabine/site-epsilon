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
  items: Offer[];
}

export const offerGroups: OfferGroup[] = [
  {
    id: 'particuliers',
    label: 'Sportifs, étudiants, artistes',
    intro: 'Préparation mentale individuelle et ateliers',
    href: '/preparation-mentale',
    items: [
      { title: 'Séances de préparation mentale', text: 'Stress, confiance, concentration : de 30 minutes à 2 heures.', href: '/preparation-mentale#seances' },
      { title: 'Pack découverte', text: 'Entretien, tests et bilan mental écrit pour bien démarrer.', href: '/preparation-mentale#pack' },
      { title: 'Ateliers pour sportifs', text: 'Sept thèmes à suivre au fil de la saison.', href: '/ateliers-preparation-mentale' },
      { title: 'Ateliers chez vous', text: '6 à 10 personnes à la maison, 25 € par personne.', href: '/ateliers-chez-vous' },
    ],
  },
  {
    id: 'entreprises',
    label: 'Entreprises',
    intro: 'Dirigeants, managers et équipes',
    href: '/coach-entreprise',
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
