// Test d'orientation : par quel audio commencer ?
// Pour modifier les questions, changer les textes ci-dessous (2 affirmations par thème).
(function () {
  var THEMES = [
    { nom: "Objectifs", q: ["Je sais précisément ce que je veux atteindre cette saison ou cette année.", "Je découpe mes objectifs en étapes que je peux mesurer."] },
    { nom: "Respiration et cohérence cardiaque", q: ["Je sais utiliser ma respiration pour me calmer avant une épreuve.", "Quand la pression monte, ma respiration reste ample et régulière."] },
    { nom: "Dialogue interne", q: ["Ce que je me dis dans ma tête m'aide plutôt qu'il ne me freine.", "Après une erreur, je retrouve vite des pensées constructives."] },
    { nom: "Imagerie mentale", q: ["J'arrive à me représenter mentalement une épreuve réussie.", "Je prépare mes épreuves en les visualisant à l'avance."] },
    { nom: "Posture", q: ["Mon attitude physique montre que je suis prêt et confiant.", "Je sais adopter une posture qui m'aide à me sentir plus fort."] },
    { nom: "Routine de performance", q: ["J'ai une routine précise avant chaque épreuve.", "Ma préparation du jour J reste la même, que l'enjeu soit petit ou grand."] },
    { nom: "Confiance et estime de soi", q: ["J'ai confiance en mes capacités, même face à un adversaire ou un jury exigeant.", "Je me sens à ma place quand je suis évalué."] },
    { nom: "Motivation", q: ["Je garde l'envie de m'entraîner, même quand les résultats tardent.", "Je sais pourquoi je fais ce que je fais."] },
    { nom: "Gestion des émotions", q: ["Le stress avant une épreuve ne me fait pas perdre mes moyens.", "Je retrouve vite mon calme après une contrariété."] },
    { nom: "Concentration et attention", q: ["Je reste concentré sur ma tâche malgré le bruit ou l'enjeu.", "Quand mon attention s'égare, je la ramène facilement."] },
    { nom: "Relaxation", q: ["Je sais détendre mon corps quand j'en ai besoin.", "Je récupère bien entre deux efforts ou deux épreuves."] },
    { nom: "Méditation", q: ["Je prends des moments pour être pleinement présent, sans penser à la suite.", "J'arrive à observer mes pensées sans m'y accrocher."] }
  ];
  var NIVEAUX = ["Débutant", "Intermédiaire", "Confirmé"];
  var ECHELLE = ["Pas du tout", "Plutôt non", "Moyennement", "Plutôt oui", "Tout à fait"];

  var questions = [];
  THEMES.forEach(function (t, i) { t.q.forEach(function (texte) { questions.push({ theme: i, texte: texte }); }); });

  var racine = document.getElementById("test");
  if (!racine) return;
  var reponses = [];
  var niveau = null;
  var etape = -1; // -1 = question sur l'expérience
  var demarre = false;

  function el(html) { var d = document.createElement("div"); d.innerHTML = html; return d; }

  function afficher() {
    racine.innerHTML = "";
    var total = questions.length + 1;
    var fait = etape + 1;
    var barre = '<div class="progression" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + fait + '"><span style="width:' + Math.round(fait / total * 100) + '%"></span></div>';
    var bloc;
    if (etape === -1) {
      bloc = el(barre +
        '<p class="note">Question 1 sur ' + total + '</p>' +
        '<h2 id="titre-q" tabindex="-1">Avez-vous déjà pratiqué la préparation mentale ?</h2>' +
        '<div class="choix" role="group" aria-labelledby="titre-q">' +
        ['Jamais', 'Un peu (quelques séances, des lectures, des vidéos)', 'Régulièrement'].map(function (t, i) {
          return '<button type="button" class="choix-btn" data-v="' + i + '"' + (niveau === i ? ' aria-pressed="true"' : '') + '>' + t + '</button>';
        }).join("") + '</div>');
      bloc.querySelectorAll(".choix-btn").forEach(function (b) {
        b.addEventListener("click", function () { niveau = +b.dataset.v; etape = 0; afficher(); });
      });
    } else if (etape < questions.length) {
      var q = questions[etape];
      bloc = el(barre +
        '<p class="note">Question ' + (etape + 2) + ' sur ' + total + '</p>' +
        '<h2 id="titre-q" tabindex="-1">' + q.texte + '</h2>' +
        '<div class="choix choix-echelle" role="group" aria-labelledby="titre-q">' +
        ECHELLE.map(function (t, i) {
          return '<button type="button" class="choix-btn" data-v="' + (i + 1) + '"' + (reponses[etape] === i + 1 ? ' aria-pressed="true"' : '') + '><strong>' + (i + 1) + '</strong> ' + t + '</button>';
        }).join("") + '</div>' +
        '<div class="boutons"><button type="button" class="btn btn-secondaire" data-retour>Question précédente</button></div>');
      bloc.querySelectorAll(".choix-btn").forEach(function (b) {
        b.addEventListener("click", function () { reponses[etape] = +b.dataset.v; etape++; afficher(); });
      });
      bloc.querySelector("[data-retour]").addEventListener("click", function () { etape--; afficher(); });
    } else {
      bloc = resultat();
    }
    racine.appendChild(bloc);
    if (demarre) {
      var titre = racine.querySelector("h2");
      if (titre) titre.focus({ preventScroll: true });
      racine.scrollIntoView({ block: "start" });
    }
    demarre = true;
  }

  function resultat() {
    var scores = THEMES.map(function (t, i) {
      var vals = questions.map(function (q, k) { return q.theme === i ? reponses[k] : null; }).filter(function (v) { return v; });
      return { i: i, nom: t.nom, moy: vals.reduce(function (a, b) { return a + b; }, 0) / vals.length };
    });
    var tries = scores.slice().sort(function (a, b) { return a.moy - b.moy || a.i - b.i; });
    var priorites = tries.slice(0, 3);
    var faibles = scores.filter(function (s) { return s.moy <= 2.5; }).length;
    var niv = NIVEAUX[niveau];

    var conseil;
    if (faibles >= 5) {
      conseil = "<p>Plusieurs thèmes ressortent en même temps. Le <strong>parcours " + niv.toLowerCase() + "</strong> (les 13 thèmes dans l'ordre conseillé) ou la formule <strong>Audios + suivi</strong>, où je vous accompagne pendant 4 mois, vous conviendront mieux qu'un audio isolé.</p>";
    } else {
      conseil = "<p>Commencez par l'audio <strong>« " + priorites[0].nom + " », niveau " + niv.toLowerCase() + "</strong>. Pour travailler ce thème en profondeur, le <strong>pack thème</strong> réunit ses 3 niveaux.</p>";
    }

    var liste = priorites.map(function (p) {
      return "<li><strong>" + p.nom + "</strong></li>";
    }).join("");

    var b = el(
      '<h2 tabindex="-1">Votre résultat</h2>' +
      '<p>Vos 3 thèmes à travailler en priorité :</p>' +
      '<ol class="etapes">' + liste + '</ol>' +
      '<p>Niveau conseillé pour commencer : <strong>' + niv + '</strong>.</p>' +
      conseil +
      '<p>Ces audios peuvent aussi déboucher sur un accompagnement individuel, pour aller plus en profondeur selon vos besoins.</p>' +
      '<div class="boutons">' +
      '<a class="btn" href="audios.html#tarifs">Voir les audios et les packs</a>' +
      '<a class="btn btn-secondaire" href="audios.html#suivi">Découvrir Audios + suivi</a>' +
      '<button type="button" class="btn btn-secondaire" data-recommencer>Refaire le test</button>' +
      '</div>' +
      '<p class="note">Ce test vous oriente dans le choix de vos audios. Ce n\'est pas un bilan psychologique : le bilan complet se fait avec moi, dans le pack découverte ou la formule Audios + suivi.</p>'
    );
    b.querySelector("[data-recommencer]").addEventListener("click", function () {
      reponses = []; niveau = null; etape = -1; afficher();
    });
    return b;
  }

  afficher();
})();
