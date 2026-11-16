# site-epsilon

Site professionnel d'EPSILON by Sabine (préparation mentale et coaching, Avignon), en front-end statique relié à Wix en mode headless.

## Structure

| Fichier | Page | Menu |
| --- | --- | --- |
| `index.html` | Accueil | — |
| `sportifs.html` | Préparation mentale (sportifs, étudiants, artistes), tarifs, pack découverte | Sportifs |
| `ateliers.html` | Les 7 ateliers de préparation mentale | sous Sportifs |
| `audios.html` | Audios de préparation mentale (12 thèmes, 3 niveaux), packs, lien avec le pack découverte | Audios (+ bloc sur l'accueil) |
| `entreprises.html` | Coaching, formations, entretien de parcours professionnel, tarifs | Entreprises |
| `formations.html` | Thèmes de formation | Formations |
| `a-propos.html` | Parcours, outils, témoignages | À propos |
| `contact.html` | Téléphone, réservation, formulaire, adresse | Contact |
| `test.html` | Test d'orientation : par quel audio commencer ? (questions dans `assets/js/test.js`) | depuis Audios et l'accueil |

- `assets/css/style.css` : styles communs (mobile d'abord).
- `assets/js/config.js` : réglages à compléter (lien de réservation Wix Bookings, identifiant client Wix Headless).
- `assets/js/main.js` : menu mobile, boutons de réservation, formulaire.
- `logo/` : les déclinaisons du logo (fichiers d'origine).
- `assets/img/logo-epsilon.png` : logo couleur horizontal (n° 13), utilisé dans l'en-tête ; `logo-epsilon-blanc.png` (n° 16) sur le pied de page violet.
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` : icône du site, tirée de l'icône n° 9.

Les textes viennent du document « Nouveaux textes du site Epsilon ».

## Branchement Wix Headless

1. Dans Wix : Paramètres > Headless > créer une app OAuth, copier son identifiant client dans `wixClientId`.
2. Copier le lien de la page de réservation Wix Bookings dans `reservationUrl` : tous les boutons « Réserver » y mènent.
3. Ensuite : formulaire de contact (Wix Forms), vente sécurisée des audios (boutique ou programme en ligne Wix).

## Reste à faire avant publication

- Photo de Sabine : reprise du site Wix actuel (image servie par Wix).
- Ateliers : dates, lieu, durée, prix et bouton « S'inscrire » ; valider les descriptions.
- Audios : valider les prix, choisir la livraison Wix, conditions générales de vente, TVA à confirmer.
- Ajouter les autres témoignages et les logos partenaires/clients.
- Mentions légales, confidentialité et CGV : rédigées, à compléter (SIRET, adresse déclarée, hébergeur, médiateur) et à faire relire.
- Textes alternatifs des images une fois les photos ajoutées.
