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
- Encart « Séances de préparation mentale » : « Un accompagnement sur mesure, qui commence par le Bilan de vos ressources, pour développer votre mental et performer au quotidien. » (plus de carte « Bilan » à part sur l'accueil).
- E-mail : epsilonbysabine@gmail.com
- Zone : Avignon, partout en France métropolitaine et dans les DROM-COM.
- Accueil allégé : accroche, liste de toutes les offres, logos clients, trois témoignages, contact. Sous le titre de chaque page, des liens directs vers ce qu'elle propose.
- Menu : Préparation mentale, Audios, Entreprises, Ateliers, Formations, Tarifs, À propos, Blog (menu complet à partir de 1 152 px de large, menu « burger » en dessous).
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
- Entreprises : les **entretiens de parcours professionnel** ouvrent la page (grand bloc : accroche, « Ce que vous y gagnez », « Ce que dit la loi depuis le 26 octobre 2025 », boutons devis et page détaillée). Créativité et innovation : encadré au même niveau que « Réunions efficaces » et « Retour au travail après un burn-out ».
- Bilan de vos ressources (page Préparation mentale) : restitution sans mention « comprise dans le tarif » ; prix sur deux lignes (250 € / 300 €).
- Bilan de vos ressources : **partie intégrante des séances**, première étape de tout accompagnement. Déroulé : entretien offert de 30 min, puis le bilan, puis le nombre de séances fixé par contrat.
- Préparation mentale, « Pour qui ? » : sportifs (individuel ou équipe), étudiants et candidats aux concours, artistes, salariés et dirigeants d'entreprises, toute personne qui prépare un examen.
- À propos : chargée de projets RH (déploiement d'un SIRH dans un groupe de plus de 1 000 salariés) ; ceinture noire de judo, ancienne gardienne de hockey sur glace ; diplôme universitaire de préparation mentale et psychologie du sportif (Université de Lille) mis en avant ; partie « Diplôme et certifications » : PNL (maître praticienne), hypnose ériksonnienne (praticienne), thérapies brèves (niveau maître praticien), formation de formateur.
- Formations : partie « Écoles post-bac » (10 ans à l'IMT Lille Douai, aujourd'hui IMT Nord Europe ; plus de 90 % de satisfaction ; ateliers de créativité, communication, projets pratiques) et deux nouvelles recommandations d'étudiants (promotions 2021 et 2022). Les anciennes coordonnées (coaching-epsilon.net, ancien SIRET) ne sont pas utilisées.
- Contrat d'accompagnement en préparation mentale : document en ligne (https://claude.ai/artifact/MJYY3GU7J6t8gxMWH2pH7D), et en Word + PDF dans Google Drive, dossier « Epsilon by Sabine ». SIRET 521 832 972 00033 ; annulation 48 h ; paiement à la fin de chaque séance (espèces, carte, virement, pas de chèque) ; données conservées 3 ans ; bilan obligatoire ; pas de tableau. À déposer aussi dans OneDrive › Documents › Epsilon › Préparation mentale › Contrat (pas d'accès OneDrive depuis Claude).
- Blog : aucune date de publication n'est affichée (ni sur les cartes, ni dans les articles), pour rester cohérent. Article « Partiels de janvier » : l'entretien offert est cité avant le bilan ; les audios sont annoncés pour les prochains examens, pas pour ceux de janvier.

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
- Blog : nouvel article « Partiels de janvier : 5 outils de préparation mentale pour arriver serein le jour J » (27/11/2026), ajouté à la copie locale du blog. Une fois le site relié à Wix, le publier aussi dans Wix Blog (sinon il n'apparaîtra pas), avec une image de couverture. Corriger aussi dans Wix les anciens liens vers coaching-epsilon.net, et retirer « 2022 » du titre « C'est bientôt l'heure du bilan… ».
- Entretien de parcours professionnel : ajouter le texte de loi exact avec son lien officiel (Légifrance, article L6315-1 du Code du travail, ou Service-Public). Légifrance bloque les accès automatiques : Sabine doit fournir le lien (et l'extrait à citer).
- Article « Partiels de janvier » : choisir une photo libre de droits (Unsplash ou Pexels) et l'envoyer ; la recherche automatique sur Unsplash a été refusée.
- **Dépôt GitHub public** : le passer en privé (Settings › General › Danger Zone › Change visibility). L'historique contient l'ancienne version de l'autotest.
- Page Tarifs : la ligne du Bilan indique encore « séance de restitution compris » ; à retirer et mettre le prix sur deux lignes ?
- Environnement Claude : Unsplash, Légifrance et Service-Public ont été ajoutés aux adresses autorisées ; à retirer si inutiles.

## Audios de préparation mentale (page `/audios`, en ligne sur le site)

Disponibles **courant janvier 2027**. Sabine enregistre elle-même les audios.

- 12 thèmes, environ 1 heure chacun, chacun en 3 niveaux (débutant, intermédiaire, confirmé) : Objectifs, Respiration et cohérence cardiaque, Dialogue interne, Imagerie mentale, Posture, Routine de performance, Confiance en soi et estime de soi, Motivation, Gestion des émotions, Concentration et attention, Relaxation, Méditation.
- Formule **Audios** : test fait seul, pas de séance incluse (sauf besoin) ; peut déboucher sur un accompagnement.
- Formule **Audios + suivi** (4 mois) : séance d'1 h 30 par téléphone (tests), audios choisis selon les résultats, point de 30 min à 2 mois, séance de clôture de 30 min. Prix = audios + 225 € (étudiant, sportif club partenaire : 3 h à 75 €) ou + 285 € (salarié : 3 h à 95 €), 30 min d'analyse comprises.
- Bonus audio avec petits outils (ex. routine respiratoire du soir, ~10 min, carré magique + cohérence cardiaque).
- Extrait gratuit : e-mail demandé (pour l'instant via un e-mail pré-rempli).
- Autotest : **plus publié sur le site** (risque de copie). Il est envoyé par e-mail à qui le demande (bouton « Recevoir l'autotest par e-mail »). Le texte complet est dans un document privé Google Drive « Autotest – Audios de préparation mentale (réservé) », dossier « Epsilon by Sabine ». À terme : formulaire Wix + e-mail automatique.
- Thèmes présentés par des questions, en 3 familles (Se préparer, Se maîtriser, Performer), sans détail de méthode. Mention « protégés par le droit d'auteur » en bas de la page.
- Audios personnels, non transmissibles.
- **À fournir** : prix des audios (à l'unité, par pack ?) ; outil de vente sécurisé (Wix : programme en ligne réservé aux membres, ou abonnement) ; formulaire d'inscription pour l'extrait gratuit.
