//Initialisation des données de la bible

let AncienTestament;

fetch("AncienTestament.json")
  .then(function (reponse) {
    return reponse.json();
  })
  .then(function (data) {
    AncienTestament = data;
  });

let NouveauTestament;

fetch("NouveauTestament.json")
  .then(function(reponse){
    return reponse.json()
  })
  .then(function(donnees){
    NouveauTestament=donnees;
  })



//Apparition et gestion du menu latéral :

document.getElementById("MENU").addEventListener("click", function () {
  document.getElementById("menu-lateral").classList.toggle("hidden");
});

document.getElementById("i-assistant").addEventListener("click", function () {
  document.getElementById("accueil").classList.add("hidden");
  document.getElementById("assistant").classList.remove("hidden");
});

document.getElementById("i-parametres").addEventListener("click", function () {
  document.getElementById("accueil").classList.add("hidden");
  document.getElementById("parametres").classList.remove("hidden");
});

document.getElementById("i-contacts").addEventListener("click", function () {
  document.getElementById("accueil").classList.add("hidden");
  document.getElementById("contacts").classList.remove("hidden");
});

//gestions des boutons du menu +

document.getElementById("bouton-01").addEventListener("click", function () {
  document.getElementById("accueil").classList.add("opacite");
  document.getElementById("opacite-boutons").classList.remove("hidden");
});

document
  .getElementById("opacite-bouton-retour")
  .addEventListener("click", function () {
    document.getElementById("accueil").classList.remove("opacite");
    document.getElementById("opacite-boutons").classList.add("hidden");
  });

//Clic sur le bouton "nouvelle note" :

document.getElementById("new-note").addEventListener("click", function () {
  document.getElementById("accueil").classList.remove("opacite");
  document.getElementById("accueil").classList.add("hidden");
  document.getElementById("nouvelle-note").classList.remove("hidden");
  document.getElementById("accueil").classList.remove("opacite");
});

// Comportement du menu clavier POUR NOUVELLE NOTE

//fonction d'apparition des différents menus :

function lesOptions(id, idMenu, autre1, idMenuAutre1) {
  document.getElementById(id).addEventListener("click", function () {
    document.getElementById(idMenu).classList.toggle("hidden");

    document.getElementById(autre1).addEventListener("click", function () {
      document.getElementById(idMenu).classList.add("hidden");
      document.getElementById(idMenuAutre1).classList.remove("hidden");
    });
  });
}

//appel pour le bouton du menu Aa:

lesOptions("Aa", "espace-clavier");

//Faire descendre les menus de chaque bouton en cliquant sur la zone de texte

document.getElementById("ecrire").addEventListener("click", function () {
  if (!document.getElementById("espace-clavier").classList.contains("hidden")) {
    document.getElementById("espace-clavier").classList.add("hidden");
  }
});

//menU Aa : espace-clavier :

document.getElementById("h1").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tailleH1");
  document.getElementById("ecrire").classList.remove("tailleH2");
  document.getElementById("ecrire").classList.remove("tailleH3");
  document.getElementById("ecrire").classList.remove("tailleH4");
  document.getElementById("ecrire").classList.remove("taillecorpss");
});

document.getElementById("h2").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tailleH2");
  document.getElementById("ecrire").classList.remove("tailleH1");
  document.getElementById("ecrire").classList.remove("tailleH3");
  document.getElementById("ecrire").classList.remove("tailleH4");
  document.getElementById("ecrire").classList.remove("taillecorpss");
});

document.getElementById("h3").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tailleH3");
  document.getElementById("ecrire").classList.remove("tailleH1");
  document.getElementById("ecrire").classList.remove("tailleH2");
  document.getElementById("ecrire").classList.remove("tailleH4");
  document.getElementById("ecrire").classList.remove("taillecorpss");
});

document.getElementById("h4").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tailleH4");
  document.getElementById("ecrire").classList.remove("tailleH1");
  document.getElementById("ecrire").classList.remove("tailleH2");
  document.getElementById("ecrire").classList.remove("tailleH3");
  document.getElementById("ecrire").classList.remove("taillecorpss");
});

document.getElementById("corpss").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("taillecorpss");
  document.getElementById("ecrire").classList.remove("tailleH1");
  document.getElementById("ecrire").classList.remove("tailleH2");
  document.getElementById("ecrire").classList.remove("tailleH3");
  document.getElementById("ecrire").classList.remove("tailleH4");
});

document.getElementById("B").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("styleB");
  if (document.getElementById("B").classList.contains("styleB")) {
    actifB = true;
  } else {
    document.getElementById("ecrire").classList.toggle("style-normal");
  }
});

document.getElementById("I").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("styleI");
  if (document.getElementById("I").classList.contains("styleI")) {
    actifI = true;
  }
});

document.getElementById("U").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("styleU");
  if (document.getElementById("U").classList.contains("styleU")) {
    actifU = true;
  }
});

document.getElementById("S").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("styleS");
  if (document.getElementById("S").classList.contains("styleS")) {
    actifS = true;
    document.querySelector(".btn-g").style.backgroundColor = "#656565";
  }
});

//boutons tabulations et xtremes gauche et droite :

document.getElementById("tab-d").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tab-d");
  document.getElementById("ecrire").classList.remove("tab-g");
});

document.getElementById("tab-g").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("tab-g");
  document.getElementById("ecrire").classList.remove("tab-d");
});

document.getElementById("xtreme-g").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("xtreme-g");
  document.getElementById("ecrire").classList.remove("xtreme-d");
  document.getElementById("ecrire").classList.remove("centre");
});

document.getElementById("xtreme-d").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("xtreme-d");
  document.getElementById("ecrire").classList.remove("xtreme-g");
  document.getElementById("ecrire").classList.remove("centre");
});

document.getElementById("centre").addEventListener("click", function () {
  document.getElementById("ecrire").classList.toggle("centre");
  document.getElementById("ecrire").classList.remove("xtreme-g");
  document.getElementById("ecrire").classList.remove("xtreme-d");
});

//configuration de LocalStorage :

if (localStorage.getItem("notes-recentes") === null) {
  localStorage.setItem("notes-recentes", "[]");
}

//configuration du bouton d'enregistrement :

const ContenuNote = document.getElementById("ecrire");
const TitreNote = document.getElementById("titre");

document.getElementById("enregistrer").addEventListener("click", function () {
  const titreHTML = TitreNote.innerHTML;
  const titreCSS = TitreNote.className;
  const codeHTML = ContenuNote.innerHTML;
  const codeCSS = ContenuNote.className;

  const MaNote = {
    TitreHtml: titreHTML,
    TitreCss: titreCSS,
    html: codeHTML,
    styles: codeCSS,
  };

  let ListeNotes = localStorage.getItem("notes-recentes");
  ListeNotes = JSON.parse(ListeNotes);
  ListeNotes.push(MaNote);
  localStorage.setItem("notes-recentes", JSON.stringify(ListeNotes));

  //après enregistrement nettoyage de la page/ecran NOUVELLE NOTE
  ContenuNote.innerHTML = "";
  ContenuNote.className = "ecrire";
  TitreNote.innerHTML = "";
  document.getElementById("nouvelle-note").classList.add("hidden");
  document.getElementById("accueil").classList.remove("hidden");

  alert("Note sauvegardée");
});

// bouton nouvelle fiche :

document.getElementById("new-fiche").addEventListener("click", function () {
  document.getElementById("accueil").classList.remove("opacite");
  document.getElementById("accueil").classList.add("hidden");
  document.getElementById("nouvelle-fiche").classList.remove("hidden");
});

//Enregistrement pour NOUVELLE FICHE
//configuration de LocalStorage :

if (localStorage.getItem("fiches-recentes") === null) {
  localStorage.setItem("fiches-recentes", "[]");
}

//configuration du bouton d'enregistrement :

const ContenuFiche = document.getElementById("ecrire-note");
const FicheVierge = ContenuFiche.innerHTML;
const TitreFiche = document.getElementById("titre1");

document.getElementById("enregistrer1").addEventListener("click", function () {
  const titreFicheHTML = TitreFiche.innerHTML;
  const titreFicheCSS = TitreFiche.className;
  const codeFicheHTML = ContenuFiche.innerHTML;
  const codeFicheCSS = ContenuFiche.className;

  const MaFiche = {
    TitreHtml: titreFicheHTML,
    TitreCss: titreFicheCSS,
    html: codeFicheHTML,
    styles: codeFicheCSS,
  };

  let ListeFiches = localStorage.getItem("fiches-recentes");
  ListeFiches = JSON.parse(ListeFiches);
  ListeFiches.push(MaFiche);
  localStorage.setItem("fiches-recentes", JSON.stringify(ListeFiches));

  //après enregistrement nettoyage de la page/ecran NOUVELLE FICHE
  ContenuFiche.innerHTML = FicheVierge;
  ContenuFiche.className = "ecrire-note";
  TitreFiche.innerHTML = "";
  alert("Fiche sauvegardée");
  document.getElementById("nouvelle-fiche").classList.add("hidden");
  document.getElementById("accueil").classList.remove("hidden");
  document.getElementById("accueil").classList.remove("opacite");
});

//bouton ouverture bible

document
  .getElementById("ouverture-bible")
  .addEventListener("click", function () {
    document.getElementById("accueil").classList.remove("opacite");
    document.getElementById("accueil").classList.add("hidden");
    document.getElementById("bible").classList.remove("hidden");
  });

// switcher entre le nouveau et l'ancien testament :

document.getElementById("switch").addEventListener("click", function () {
  document.getElementById("bible-at").classList.toggle("hidden");
  document.getElementById("at").classList.toggle("hidden");
  document.getElementById("nt").classList.toggle("hidden");
  document.getElementById("bible-nt").classList.toggle("hidden");
});



// lecture de la BIBLE

// fonction d'affichage des chapitres après clic sur un livre

function lesChapitres(livre,chapitres) {
  document.getElementById(livre).addEventListener("click", function () {
    document.getElementById("bible").classList.add("hidden");
    document.getElementById("chapitres-wrapper").classList.remove("hidden")
    document.getElementById(chapitres).classList.remove("hidden");
  });
}

function Retour(idRetour,chapitres){
  document.getElementById(idRetour).addEventListener("click",function(){
    document.getElementById(chapitres).classList.add("hidden")
    document.getElementById("bible").classList.remove("hidden")
  })
}

lesChapitres("genese","chap-1")
Retour("retour-1","chap-1")
lesChapitres("exode","chap-2")
Retour("retour-2","chap-2")
lesChapitres("levitique","chap-3")
Retour("retour-3","chap-3")
lesChapitres("nombres","chap-4")
Retour("retour-4","chap-4")
lesChapitres("deuteronome","chap-5")
Retour("retour-5","chap-5")
lesChapitres("josue","chap-6")
Retour("retour-6","chap-6")
lesChapitres("juges","chap-7")
Retour("retour-7","chap-7")
lesChapitres("ruth","chap-8")
Retour("retour-8","chap-8")
lesChapitres("1samuel","chap-9")
Retour("retour-9","chap-9")
lesChapitres("2samuel","chap-10")
Retour("retour-10","chap-10")
lesChapitres("1rois","chap-11")
Retour("retour-11","chap-11")
lesChapitres("2rois","chap-12")
Retour("retour-12","chap-12")
lesChapitres("1chroniques","chap-13")
Retour("retour-13","chap-13")
lesChapitres("2chroniques","chap-14")
Retour("retour-14","chap-14")
lesChapitres("esdras","chap-15")
Retour("retour-15","chap-15")
lesChapitres("nehemie","chap-16")
Retour("retour-16","chap-16")
lesChapitres("esther","chap-17")
Retour("retour-17","chap-17")
lesChapitres("job","chap-18")
Retour("retour-18","chap-18")
lesChapitres("psaumes","chap-19")
Retour("retour-19","chap-19")
lesChapitres("proverbes","chap-20")
Retour("retour-20","chap-20")
lesChapitres("ecclesiaste","chap-21")
Retour("retour-21","chap-21")
lesChapitres("cantiquedescantiques","chap-22")
Retour("retour-22","chap-22")
lesChapitres("esaie","chap-23")
Retour("retour-23","chap-23")
lesChapitres("jeremie","chap-24")
Retour("retour-24","chap-24")
lesChapitres("lamentations","chap-25")
Retour("retour-25","chap-25")
lesChapitres("ezechiel","chap-26")
Retour("retour-26","chap-26")
lesChapitres("daniel","chap-27")
Retour("retour-27","chap-27")
lesChapitres("osee","chap-28")
Retour("retour-28","chap-28")
lesChapitres("joel","chap-29")
Retour("retour-29","chap-29")
lesChapitres("amos","chap-30")
Retour("retour-30","chap-30")
lesChapitres("abdias","chap-31")
Retour("retour-31","chap-31")
lesChapitres("jonas","chap-32")
Retour("retour-32","chap-32")
lesChapitres("michee","chap-33")
Retour("retour-33","chap-33")
lesChapitres("nahum","chap-34")
Retour("retour-34","chap-34")
lesChapitres("habacuc","chap-35")
Retour("retour-35","chap-35")
lesChapitres("sophonie","chap-36")
Retour("retour-36","chap-36")
lesChapitres("aggee","chap-37")
Retour("retour-37","chap-37")
lesChapitres("zacharie","chap-38")
Retour("retour-38","chap-38")
lesChapitres("malachie","chap-39")
Retour("retour-39","chap-39")

// Affichage du contenu des 