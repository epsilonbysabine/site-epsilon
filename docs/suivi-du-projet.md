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
- Menu : Préparation mentale, Entreprises, Ateliers, Formations, À propos, Blog.
- Entreprises : coaching individuel et d'équipe, entretien de parcours professionnel, retour au travail après un burn-out, réunions efficaces, créativité et innovation, formations.
- Préparation mentale (thèmes) : Performance, Confiance en soi, Estime de soi, Motivation, Adaptabilité, Combativité, Réactivité, Activation, Concentration, Fixation d'objectif, Cohésion d'équipe.
- Ateliers chez vous : 6 à 10 personnes, 1 h 30 (19 h – 20 h 30), 25 € par personne, repas partagé, atelier offert à l'hôte + 30 min de préparation mentale personnalisée ; Vaucluse, Gard, Bouches-du-Rhône, Drôme, Ardèche ; dix ateliers titrés (dont « La charge mentale, comment s'en alléger » et « Prévoir, apprendre, réussir : l'art de la visualisation »).
- Créativité & innovation et Formations : recommandations des étudiants de l'IMT Lille Douai.
- Page Partenaires : masquée (`visiblePages.partenaires` dans `src/config/site.ts`), à réafficher ou supprimer plus tard.
- Ateliers développement personnel : dates de 2023 retirées.
- Bouton « remonter en haut » sur toutes les pages.

## Reste à faire

- Choisir l'habillage (origine, chaleureux ou épuré), ou un mélange des deux.
- Créer l'application OAuth dans Wix (Paramètres > Paramètres Headless) et fournir l'**identifiant client** ; autoriser le domaine du site dans cette application.
- Facultatif : formulaire Wix Forms pour le contact (identifiant du formulaire).
- Dans Wix Bookings : mettre l'entretien de 30 min à 0 €, renommer « Pack découverte » en « Bilan de vos ressources ».
- Dans le blog Wix : corriger les liens vers coaching-epsilon.net et « événement » → « évènement ».
- À confirmer : liste des thèmes des ateliers chez vous ; « 6 à 10 personnes » hôte compris ou non ; ajouter « DROM-COM » aux autres mentions de zone ; nombre exact de salariés accompagnés après un burn-out (le site dit « des salariés »).
- Mettre le site en ligne (hébergeur) et fusionner la branche dans la branche principale.
