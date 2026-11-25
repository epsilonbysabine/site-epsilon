# Suivi du projet : nouveau site Epsilon

Résumé des échanges avec Claude (novembre 2026) pour reprendre le travail plus tard.

## Où trouver le site

- Code : dépôt `epsilonbysabine/site-epsilon`, branche `claude/epsilon-wix-headless-bsnt7h`
- Aperçus (liens privés, à partager depuis le bouton de partage de chaque page) :
  - version d'origine : https://claude.ai/artifact/PDvNt3GVuGUTCtwSwhLdBh
  - version chaleureuse : https://claude.ai/artifact/HB7ooTsZn21sbkzmAVd6mo
  - version épurée : https://claude.ai/artifact/T8V6xeMBokCnF7Bu2sKNmm
- Les trois versions partagent le même contenu ; le choix se fait avec `PUBLIC_VARIANT` (voir le README).

## Décisions prises

- Ton : le site parle à la première personne (« je ») et vouvoie le visiteur.
- Baseline : « Libérez et développez votre performance. »
- Accroche de l'accueil : « Plus qu'une préparation ponctuelle, un apprentissage de tous les jours : mieux vous analyser, maîtriser vos outils, gagner en efficacité et performer, dans votre métier comme dans votre discipline. »
- Premier entretien de 30 minutes : **offert**.
- « Pack découverte » renommé « État des lieux mental », puis **« Bilan de vos ressources »** (analyse avant les séances).
- Encart « Séances de préparation mentale » : « Un accompagnement sur mesure pour développer vos ressources mentales et performer au quotidien. »
- E-mail : epsilonbysabine@gmail.com
- Zone : Avignon, partout en France métropolitaine et dans les DROM-COM.
- Accueil allégé : accroche, liste de toutes les offres, logos clients, trois témoignages, contact. Sous le titre de chaque page, des liens directs vers ce qu'elle propose.
- Menu : Préparation mentale, Entreprises, Ateliers, Formations, Tarifs, À propos, Blog.
- Entreprises : coaching individuel et d'équipe, entretien de parcours professionnel, retour au travail après un burn-out, réunions efficaces, créativité et innovation, formations.
- Préparation mentale (thèmes) : Performance, Confiance en soi, Estime de soi, Motivation, Adaptabilité, Combativité, Réactivité, Activation, Concentration, Fixation d'objectif, Cohésion d'équipe.
- Ateliers chez vous : 6 à 10 personnes, 1 h 30 (horaire libre, à convenir avec l'hôte), 25 € par personne, repas partagé, atelier offert à l'hôte + 30 min de coaching personnalisé ; Vaucluse, Gard, Bouches-du-Rhône, Drôme, Ardèche ; dix ateliers titrés (dont « La charge mentale, comment s'en alléger » et « Prévoir, apprendre, réussir : l'art de la visualisation »).
- Créativité & innovation et Formations : recommandations des étudiants de l'IMT Lille Douai.
- Page Partenaires : masquée (`visiblePages.partenaires` dans `src/config/site.ts`), à réafficher ou supprimer plus tard.
- Bouton « remonter en haut » sur toutes les pages.
- Nouveaux tarifs appliqués dès maintenant (plus de mention du 1er janvier 2027) :
  - séances : 40 € les 30 min / 75 € l'heure (étudiant, sportif d'un club partenaire) ; 50 € / 95 € (salarié) ;
  - Bilan de vos ressources : 250 € / 300 €, restitution comprise ;
  - entreprises : coaching individuel dès 200 € l'heure, équipe dès 1 100 € la demi-journée / 2 000 € la journée, le reste sur devis.
- Page **Tarifs** (`/tarifs`) qui récapitule toutes les offres. Un prix modifié doit l'être sur cette page ET sur la page de l'offre.
- Pages entreprises : pas d'entretien offert, bouton « Demander un devis » (e-mail).
- Ateliers pour sportifs : 2 h, 6 à 10 personnes, 30 € par personne, 7 thèmes.
- Atelier pour les parents de jeunes compétiteurs : page à part (`/atelier-parents`), 1 h 30, 6 à 10 personnes, 25 € par personne, en groupe ou en club. Quatre thèmes : avant la compétition, durant la compétition, après la compétition, « Parent, coach, supporter : trouver sa juste place ». Formulations valables pour tous les sports (pas de terrain, tribunes ni match).
- Ateliers de développement personnel (pack de 3 ateliers, 135 €) : **en sommeil**, page masquée (`visiblePages.ateliersDevPerso`). Rien n'est supprimé.
- Séances de préparation mentale : essentiellement en extérieur (« aérer ses neurones ») ; selon ce que nous travaillons, au bureau ou au club.
- À propos : « Epsilon est né de ces deux passions. »
- Entretien professionnel : dessin des entretiens annuels retiré.

## Reste à faire

- Choisir l'habillage (origine, chaleureux ou épuré), ou un mélange des deux.
- Créer l'application OAuth dans Wix (Paramètres > Paramètres Headless) et fournir l'**identifiant client** ; autoriser le domaine du site dans cette application.
- Facultatif : formulaire Wix Forms pour le contact (identifiant du formulaire).
- Dans Wix Bookings : mettre l'entretien de 30 min à 0 €, renommer « Pack découverte » en « Bilan de vos ressources ».
- Dans Wix Bookings : mettre les nouveaux prix ; créer l'atelier parents (4 thèmes) et les ateliers sportifs (30 €) ; corriger ou supprimer la prestation « coaching-entreprise » qui annonce un entretien de 30 min offert.
- Accroche de la page Préparation mentale : à choisir. Proposition recommandée : « À compétence égale, la différence se fait par le mental. La préparation mentale développe vos ressources pour performer avec régularité : dans votre métier, votre sport ou vos études, au quotidien comme lors des échéances importantes. »
- Atelier parents : valider les points rédigés par Claude pour chaque thème.
- Page Atelier parents : le bouton du haut est « Réserver mon entretien offert » ; le remplacer par « Réserver un atelier » ?
- Bouton « Prendre rendez-vous » du menu : identique sur les pages entreprises, à changer ?

## Prochain chantier : les audios (en pause)

Sabine enregistre elle-même des audios de préparation mentale (Claude ne rédige pas les scripts). Ils seront vendus sur le site, à l'unité et en packs.

- Six thèmes, environ 1 heure chacun, comme une séance : Objectifs, Respiration, Dialogue interne, Imagerie mentale, Posture, Routine de performance.
- Organisation proposée (à valider) : audio à l'unité ; **Pack Fondations** (Objectifs, Respiration, Dialogue interne) ; **Pack Performance** (Imagerie mentale, Posture, Routine de performance) ; **Pack complet** (les six, prix avantageux).
- Sur le site : une page « Audios » dans Particuliers (principe, six thèmes, packs, prix), une carte sur l'accueil, une partie « Audios » dans la page Tarifs. En attendant : « Bientôt disponible » + bouton de contact.
- Questions en attente :
  1. L'organisation en packs convient-elle ?
  2. Prix : à l'unité, pack de 3, pack complet ?
  3. Vente : achat en ligne avec téléchargement (Wix), remise avec les séances, ou les deux ?
  4. Public : uniquement les sportifs, ou aussi étudiants et artistes ?
- Dans le blog Wix : corriger les liens vers coaching-epsilon.net et « événement » → « évènement ».
- À confirmer : liste des thèmes des ateliers chez vous ; « 6 à 10 personnes » hôte compris ou non ; ajouter « DROM-COM » aux autres mentions de zone ; nombre exact de salariés accompagnés après un burn-out (le site dit « des salariés »).
- Mettre le site en ligne (hébergeur) et fusionner la branche dans la branche principale.
