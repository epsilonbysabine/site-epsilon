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

## Vérifier l'intégration Wix

```bash
npm run check      # vérification des types (SDK Wix compris)
npm run test:wix   # construit le site contre un faux serveur Wix et vérifie blog, prestations et formulaire
```

`test:wix` ne demande aucun compte Wix : il simule les réponses de l'API. Le test réel se fait en
renseignant `PUBLIC_WIX_CLIENT_ID` puis en lançant `npm run build` : le terminal affiche
`[wix] … utilisation de la copie locale` si Wix ne répond pas ou refuse l'accès.

## Contenu

- Textes des pages : `src/pages/*.astro`
- Coordonnées, menu : `src/config/site.ts`
- Pages masquées : `visiblePages` dans `src/config/site.ts` (la page Partenaires est masquée ; passer `partenaires` à `true` pour la réafficher)
- Témoignages et logos clients : `src/data/testimonials.ts`
- Style (couleurs, typographies) : `src/styles/global.css`
- Logo : fichiers d'origine dans `logo/`, versions utilisées par le site dans `public/logo/`

Les anciennes adresses `/general-8`, `/team-4` et `/ateliers-préparation-mentale` redirigent vers les nouvelles pages.

## Deux habillages

Le même contenu peut être construit avec deux habillages :

```bash
npm run build          # version d'origine (verre dépoli, sections sombres)
npm run build:humain   # version chaleureuse (papier chaud, titres serif, presque sans cadres) dans dist-humain/
```

La version chaleureuse est entièrement décrite dans `src/styles/humain.css` et s'active avec
la variable `PUBLIC_VARIANT=humain` (à définir aussi chez l'hébergeur pour la mettre en ligne).

## Aperçu en une page

```bash
npm run build && npm run preview:single          # génère dist-preview/index.html
npm run build:humain && npm run preview:humain   # génère dist-preview-humain/index.html
```
