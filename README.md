# site-epsilon

Site professionnel d'Epsilon by Sabine (préparation mentale et coaching, Avignon), en **Wix Headless** :
le site est un projet [Astro](https://astro.build) autonome, et Wix reste le back-office pour le blog,
les prestations et la réservation (Wix Bookings) et, en option, le formulaire de contact (Wix Forms).

## Démarrer

```bash
npm install
cp .env.example .env   # puis renseigner PUBLIC_WIX_CLIENT_ID
npm run dev            # http://localhost:4321
npm run build          # site statique dans dist/
```

Sans `PUBLIC_WIX_CLIENT_ID`, le site se construit quand même : il utilise la copie locale des contenus
(`src/data/posts-snapshot.json`, `src/data/services-snapshot.json`) reprise de www.epsilonbysabine.com.

## Relier le site à Wix

1. Dans le tableau de bord Wix du site : **Paramètres > Paramètres Headless > Créer une application OAuth**.
2. Copier l'**identifiant client** dans `PUBLIC_WIX_CLIENT_ID` (fichier `.env` en local, variable d'environnement chez l'hébergeur).
3. Dans l'application OAuth, ajouter le domaine du site aux **domaines de redirection autorisés** (nécessaire pour le retour après réservation).
4. Facultatif, formulaire de contact : créer un formulaire dans Wix Forms, mettre son identifiant dans `PUBLIC_WIX_FORM_ID`
   et faire correspondre les clés des champs dans `src/config/site.ts` (`contactForm.fields`).

| Fonction | Source Wix | Où dans le code |
| --- | --- | --- |
| Articles du blog | Wix Blog (lus au build) | `src/lib/wix.ts`, `src/pages/blog`, `src/pages/post/[slug].astro` |
| Liste des prestations | Wix Bookings (lue au build) | `src/lib/wix.ts`, `src/pages/book-online.astro` |
| Réservation | Redirection vers les pages Wix Bookings | script de `src/pages/book-online.astro` |
| Formulaire de contact | Wix Forms (navigateur) | `src/components/ContactBand.astro` |

Le site est statique : après la publication d'un article ou la modification d'une prestation dans Wix,
relancer un build chez l'hébergeur pour mettre le site à jour.

## Contenu

- Textes des pages : `src/pages/*.astro`
- Coordonnées, menu : `src/config/site.ts`
- Témoignages et logos clients : `src/data/testimonials.ts`
- Style (couleurs, typographies) : `src/styles/global.css`
- Logo : fichiers d'origine dans `logo/`, versions utilisées par le site dans `public/logo/`

Les anciennes adresses `/general-8`, `/team-4` et `/ateliers-préparation-mentale` redirigent vers les nouvelles pages.

## Aperçu en une page

```bash
npm run build && npm run preview:single   # génère dist-preview/index.html
```
