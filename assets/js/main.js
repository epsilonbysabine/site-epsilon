// Comportements communs à toutes les pages
(function () {
  var config = window.EPSILON_CONFIG || {};

  // Menu mobile
  var bouton = document.querySelector(".bouton-menu");
  var menu = document.getElementById("menu");
  if (bouton && menu) {
    bouton.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("ouvert");
      bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("ouvert")) {
        menu.classList.remove("ouvert");
        bouton.setAttribute("aria-expanded", "false");
        bouton.focus();
      }
    });
  }

  // Boutons « Réserver » : vers Wix Bookings si le lien est renseigné
  document.querySelectorAll("[data-reserver]").forEach(function (lien) {
    var url = lien.getAttribute("data-reserver") === "entretien" ? config.entretienUrl : config.reservationUrl;
    if (url) lien.href = url;
  });

  // Année du pied de page
  document.querySelectorAll("[data-annee]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Formulaire de contact : branché sur Wix Headless à la mise en ligne
  var formulaire = document.querySelector("[data-formulaire-contact]");
  if (formulaire) {
    formulaire.addEventListener("submit", function (e) {
      e.preventDefault();
      var message = formulaire.querySelector(".message-formulaire");
      message.hidden = false;
      // À remplacer par l'envoi via Wix Forms (Headless) quand wixClientId sera renseigné
      message.textContent = "Le formulaire sera actif très bientôt. En attendant, appelez-moi au " + config.telephone + ".";
    });
  }
})();
