 let ouvert = true;
document.getElementById("MENU").addEventListener("click", function () {
  if (ouvert === true) {
    document.getElementById("menu-lateral").classList.remove("hidden");
    document.getElementById("MENU").addEventListener("click", function () {
    ouvert = false;
    });
  }
  if (ouvert === false) {
    document.getElementById("menu-lateral").classList.add("hidden");
  }
});

document.getElementById("bouton-01").addEventListener("click", function () {
  document.getElementById("accueil").classList.add("opacite");
  document.getElementById("opacite-boutons").classList.remove("hidden");
});
