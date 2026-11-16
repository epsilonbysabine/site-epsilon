// Réglages du site, à compléter au moment de la mise en ligne.
// Tant qu'une valeur est vide, le site fonctionne sans elle :
// les boutons « Réserver » mènent à la page Contact.
window.EPSILON_CONFIG = {
  // Lien de la page de réservation Wix Bookings (ex. https://www.epsilonbysabine.com/reservation-en-ligne)
  reservationUrl: "https://www.epsilonbysabine.com/book-online",

  // Service Wix Bookings « Entretien découverte gratuit (30 min) »
  entretienUrl: "https://www.epsilonbysabine.com/booking-calendar/entretien-d%C3%A9couverte-gratuit-30-min",

  // Identifiant client Wix Headless (Wix > Paramètres > Headless > OAuth apps).
  // Sert plus tard au formulaire de contact, à la réservation intégrée et à la vente des audios.
  wixClientId: "",

  telephone: "06 70 79 24 63",
};
