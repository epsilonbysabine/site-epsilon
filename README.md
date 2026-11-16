# site-epsilon

Site professionnel d'EPSILON by Sabine (préparation mentale et coaching, Avignon), en front-end statique relié à Wix en mode headless.

## Structure

| Fichier | Page | Menu |
| --- | --- | --- |
| `index.html` | Accueil | — |
| `sportifs.html` | Préparation mentale (sportifs, étudiants, artistes), tarifs, pack découverte | Sportifs |
| `ateliers.html` | Les 7 ateliers de préparation mentale | sous Sportifs |
| `audios.html` | Audios de préparation mentale (13 thèmes, 3 niveaux) | sous Sportifs |
| `entreprises.html` | Coaching, formations, entretien de parcours professionnel, tarifs | Entreprises |
| `formations.html` | Thèmes de formation | Formations |
| `a-propos.html` | Parcours, outils, témoignages | À propos |
| `contact.html` | Téléphone, réservation, formulaire, adresse | Contact |

- `assets/css/style.css` : styles communs (mobile d'abord).
- `assets/js/config.js` : réglages à compléter (lien de réservation Wix Bookings, identifiant client Wix Headless).
- `assets/js/main.js` : menu mobile, boutons de réservation, formulaire.
- `logo/` : propositions de logo (à choisir ; le site affiche pour l'instant le nom en texte).

Les textes viennent du document « Nouveaux textes du site Epsilon ».

## Branchement Wix Headless

1. Dans Wix : Paramètres > Headless > créer une app OAuth, copier son identifiant client dans `wixClientId`.
2. Copier le lien de la page de réservation Wix Bookings dans `reservationUrl` : tous les boutons « Réserver » y mènent.
3. Ensuite : formulaire de contact (Wix Forms), vente sécurisée des audios (boutique ou programme en ligne Wix).

## Reste à faire avant publication

- Choisir le logo et ajouter la photo de Sabine (À propos).
- Ateliers : dates, lieu, durée, prix et bouton « S'inscrire » ; valider les descriptions.
- Audios : valider les prix, choisir la livraison Wix, conditions générales de vente, TVA à confirmer.
- Ajouter les autres témoignages et les logos partenaires/clients.
- Mentions légales et politique de confidentialité (obligatoires).
- Textes alternatifs des images une fois les photos ajoutées.
