import { defineConfig } from 'astro/config';

// Site statique : les contenus Wix (blog, prestations) sont lus au moment du build,
// la réservation et le formulaire de contact appellent Wix depuis le navigateur.
export default defineConfig({
  site: 'https://www.epsilonbysabine.com',
  trailingSlash: 'ignore',
  redirects: {
    // Anciennes adresses du site Wix
    '/general-8': '/creativite-innovation',
    '/team-4': '/ateliers-developpement-personnel',
    '/ateliers-préparation-mentale': '/ateliers-preparation-mentale',
    // Pages de réservation générées par Wix sur l'ancien site
    '/booking-calendar/coaching-entreprise': '/book-online',
    '/service-page/coaching-entreprise': '/book-online',
    '/service-page/preparation-mentale-collective-etudiants': '/book-online',
    '/service-page/preparation-mentale-collective-sportifs': '/book-online',
  },
});
