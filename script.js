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


//Bouton d'accès à la BIBLE à partir des notes :
document.getElementById("bible2").addEventListener("click", function(){
  document.getElementById("nouvelle-note").classList.add("hidden")
  document.getElementById("bible").classList.remove("hidden")
})
document.getElementById("retour-note-fiche").addEventListener("click",function(){
  document.getElementById("bible").classList.add("hidden")
  document.getElementById("nouvelle-note").classList.remove("hidden")
})


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

document.getElementById("retour-chapitres").addEventListener("click",function(){
  document.getElementById("affichage").classList.add("hidden")
  document.getElementById("bible").classList.remove("hidden")
})

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


// Affichage du contenu des chapitres ( texte biblique) :

function ContenuChapites (chapitres,livres,Livre,Chapitre){
document.getElementById(chapitres).addEventListener("click", function(){
  document.getElementById(livres).classList.add("hidden")
  document.getElementById("affichage").classList.remove("hidden")
  document.getElementById("affichage-texte").textContent=AncienTestament[Livre][Chapitre]
})
}

ContenuChapites("gen-1", "chap-1", "Genèse", "1")
ContenuChapites("gen-2", "chap-2", "Genèse", "2")
ContenuChapites("gen-3", "chap-3", "Genèse", "3")
ContenuChapites("gen-4", "chap-4", "Genèse", "4")
ContenuChapites("gen-5", "chap-5", "Genèse", "5")
ContenuChapites("gen-6", "chap-6", "Genèse", "6")
ContenuChapites("gen-7", "chap-7", "Genèse", "7")
ContenuChapites("gen-8", "chap-8", "Genèse", "8")
ContenuChapites("gen-9", "chap-9", "Genèse", "9")
ContenuChapites("gen-10", "chap-10", "Genèse", "10")
ContenuChapites("gen-11", "chap-11", "Genèse", "11")
ContenuChapites("gen-12", "chap-12", "Genèse", "12")
ContenuChapites("gen-13", "chap-13", "Genèse", "13")
ContenuChapites("gen-14", "chap-14", "Genèse", "14")
ContenuChapites("gen-15", "chap-15", "Genèse", "15")
ContenuChapites("gen-16", "chap-16", "Genèse", "16")
ContenuChapites("gen-17", "chap-17", "Genèse", "17")
ContenuChapites("gen-18", "chap-18", "Genèse", "18")
ContenuChapites("gen-19", "chap-19", "Genèse", "19")
ContenuChapites("gen-20", "chap-20", "Genèse", "20")
ContenuChapites("gen-21", "chap-21", "Genèse", "21")
ContenuChapites("gen-22", "chap-22", "Genèse", "22")
ContenuChapites("gen-23", "chap-23", "Genèse", "23")
ContenuChapites("gen-24", "chap-24", "Genèse", "24")
ContenuChapites("gen-25", "chap-25", "Genèse", "25")
ContenuChapites("gen-26", "chap-26", "Genèse", "26")
ContenuChapites("gen-27", "chap-27", "Genèse", "27")
ContenuChapites("gen-28", "chap-28", "Genèse", "28")
ContenuChapites("gen-29", "chap-29", "Genèse", "29")
ContenuChapites("gen-30", "chap-30", "Genèse", "30")
ContenuChapites("gen-31", "chap-31", "Genèse", "31")
ContenuChapites("gen-32", "chap-32", "Genèse", "32")
ContenuChapites("gen-33", "chap-33", "Genèse", "33")
ContenuChapites("gen-34", "chap-34", "Genèse", "34")
ContenuChapites("gen-35", "chap-35", "Genèse", "35")
ContenuChapites("gen-36", "chap-36", "Genèse", "36")
ContenuChapites("gen-37", "chap-37", "Genèse", "37")
ContenuChapites("gen-38", "chap-38", "Genèse", "38")
ContenuChapites("gen-39", "chap-39", "Genèse", "39")
ContenuChapites("gen-40", "chap-40", "Genèse", "40")
ContenuChapites("gen-41", "chap-41", "Genèse", "41")
ContenuChapites("gen-42", "chap-42", "Genèse", "42")
ContenuChapites("gen-43", "chap-43", "Genèse", "43")
ContenuChapites("gen-44", "chap-44", "Genèse", "44")
ContenuChapites("gen-45", "chap-45", "Genèse", "45")
ContenuChapites("gen-46", "chap-46", "Genèse", "46")
ContenuChapites("gen-47", "chap-47", "Genèse", "47")
ContenuChapites("gen-48", "chap-48", "Genèse", "48")
ContenuChapites("gen-49", "chap-49", "Genèse", "49")
ContenuChapites("gen-50", "chap-50", "Genèse", "50")
// ==================== EXODE (40 chapitres) ====================
ContenuChapites("exo-1", "chap-1", "Exode", "1")
ContenuChapites("exo-2", "chap-2", "Exode", "2")
ContenuChapites("exo-3", "chap-3", "Exode", "3")
ContenuChapites("exo-4", "chap-4", "Exode", "4")
ContenuChapites("exo-5", "chap-5", "Exode", "5")
ContenuChapites("exo-6", "chap-6", "Exode", "6")
ContenuChapites("exo-7", "chap-7", "Exode", "7")
ContenuChapites("exo-8", "chap-8", "Exode", "8")
ContenuChapites("exo-9", "chap-9", "Exode", "9")
ContenuChapites("exo-10", "chap-10", "Exode", "10")
ContenuChapites("exo-11", "chap-11", "Exode", "11")
ContenuChapites("exo-12", "chap-12", "Exode", "12")
ContenuChapites("exo-13", "chap-13", "Exode", "13")
ContenuChapites("exo-14", "chap-14", "Exode", "14")
ContenuChapites("exo-15", "chap-15", "Exode", "15")
ContenuChapites("exo-16", "chap-16", "Exode", "16")
ContenuChapites("exo-17", "chap-17", "Exode", "17")
ContenuChapites("exo-18", "chap-18", "Exode", "18")
ContenuChapites("exo-19", "chap-19", "Exode", "19")
ContenuChapites("exo-20", "chap-20", "Exode", "20")
ContenuChapites("exo-21", "chap-21", "Exode", "21")
ContenuChapites("exo-22", "chap-22", "Exode", "22")
ContenuChapites("exo-23", "chap-23", "Exode", "23")
ContenuChapites("exo-24", "chap-24", "Exode", "24")
ContenuChapites("exo-25", "chap-25", "Exode", "25")
ContenuChapites("exo-26", "chap-26", "Exode", "26")
ContenuChapites("exo-27", "chap-27", "Exode", "27")
ContenuChapites("exo-28", "chap-28", "Exode", "28")
ContenuChapites("exo-29", "chap-29", "Exode", "29")
ContenuChapites("exo-30", "chap-30", "Exode", "30")
ContenuChapites("exo-31", "chap-31", "Exode", "31")
ContenuChapites("exo-32", "chap-32", "Exode", "32")
ContenuChapites("exo-33", "chap-33", "Exode", "33")
ContenuChapites("exo-34", "chap-34", "Exode", "34")
ContenuChapites("exo-35", "chap-35", "Exode", "35")
ContenuChapites("exo-36", "chap-36", "Exode", "36")
ContenuChapites("exo-37", "chap-37", "Exode", "37")
ContenuChapites("exo-38", "chap-38", "Exode", "38")
ContenuChapites("exo-39", "chap-39", "Exode", "39")
ContenuChapites("exo-40", "chap-40", "Exode", "40")

// ==================== LÉVITIQUE (27 chapitres) ====================
ContenuChapites("lev-1", "chap-1", "Lévitique", "1")
ContenuChapites("lev-2", "chap-2", "Lévitique", "2")
ContenuChapites("lev-3", "chap-3", "Lévitique", "3")
ContenuChapites("lev-4", "chap-4", "Lévitique", "4")
ContenuChapites("lev-5", "chap-5", "Lévitique", "5")
ContenuChapites("lev-6", "chap-6", "Lévitique", "6")
ContenuChapites("lev-7", "chap-7", "Lévitique", "7")
ContenuChapites("lev-8", "chap-8", "Lévitique", "8")
ContenuChapites("lev-9", "chap-9", "Lévitique", "9")
ContenuChapites("lev-10", "chap-10", "Lévitique", "10")
ContenuChapites("lev-11", "chap-11", "Lévitique", "11")
ContenuChapites("lev-12", "chap-12", "Lévitique", "12")
ContenuChapites("lev-13", "chap-13", "Lévitique", "13")
ContenuChapites("lev-14", "chap-14", "Lévitique", "14")
ContenuChapites("lev-15", "chap-15", "Lévitique", "15")
ContenuChapites("lev-16", "chap-16", "Lévitique", "16")
ContenuChapites("lev-17", "chap-17", "Lévitique", "17")
ContenuChapites("lev-18", "chap-18", "Lévitique", "18")
ContenuChapites("lev-19", "chap-19", "Lévitique", "19")
ContenuChapites("lev-20", "chap-20", "Lévitique", "20")
ContenuChapites("lev-21", "chap-21", "Lévitique", "21")
ContenuChapites("lev-22", "chap-22", "Lévitique", "22")
ContenuChapites("lev-23", "chap-23", "Lévitique", "23")
ContenuChapites("lev-24", "chap-24", "Lévitique", "24")
ContenuChapites("lev-25", "chap-25", "Lévitique", "25")
ContenuChapites("lev-26", "chap-26", "Lévitique", "26")
ContenuChapites("lev-27", "chap-27", "Lévitique", "27")

// ==================== NOMBRES (36 chapitres) ====================
ContenuChapites("nom-1", "chap-1", "Nombres", "1")
ContenuChapites("nom-2", "chap-2", "Nombres", "2")
ContenuChapites("nom-3", "chap-3", "Nombres", "3")
ContenuChapites("nom-4", "chap-4", "Nombres", "4")
ContenuChapites("nom-5", "chap-5", "Nombres", "5")
ContenuChapites("nom-6", "chap-6", "Nombres", "6")
ContenuChapites("nom-7", "chap-7", "Nombres", "7")
ContenuChapites("nom-8", "chap-8", "Nombres", "8")
ContenuChapites("nom-9", "chap-9", "Nombres", "9")
ContenuChapites("nom-10", "chap-10", "Nombres", "10")
ContenuChapites("nom-11", "chap-11", "Nombres", "11")
ContenuChapites("nom-12", "chap-12", "Nombres", "12")
ContenuChapites("nom-13", "chap-13", "Nombres", "13")
ContenuChapites("nom-14", "chap-14", "Nombres", "14")
ContenuChapites("nom-15", "chap-15", "Nombres", "15")
ContenuChapites("nom-16", "chap-16", "Nombres", "16")
ContenuChapites("nom-17", "chap-17", "Nombres", "17")
ContenuChapites("nom-18", "chap-18", "Nombres", "18")
ContenuChapites("nom-19", "chap-19", "Nombres", "19")
ContenuChapites("nom-20", "chap-20", "Nombres", "20")
ContenuChapites("nom-21", "chap-21", "Nombres", "21")
ContenuChapites("nom-22", "chap-22", "Nombres", "22")
ContenuChapites("nom-23", "chap-23", "Nombres", "23")
ContenuChapites("nom-24", "chap-24", "Nombres", "24")
ContenuChapites("nom-25", "chap-25", "Nombres", "25")
ContenuChapites("nom-26", "chap-26", "Nombres", "26")
ContenuChapites("nom-27", "chap-27", "Nombres", "27")
ContenuChapites("nom-28", "chap-28", "Nombres", "28")
ContenuChapites("nom-29", "chap-29", "Nombres", "29")
ContenuChapites("nom-30", "chap-30", "Nombres", "30")
ContenuChapites("nom-31", "chap-31", "Nombres", "31")
ContenuChapites("nom-32", "chap-32", "Nombres", "32")
ContenuChapites("nom-33", "chap-33", "Nombres", "33")
ContenuChapites("nom-34", "chap-34", "Nombres", "34")
ContenuChapites("nom-35", "chap-35", "Nombres", "35")
ContenuChapites("nom-36", "chap-36", "Nombres", "36")

// ==================== DEUTÉRONOME (34 chapitres) ====================
ContenuChapites("deu-1", "chap-1", "Deutéronome", "1")
ContenuChapites("deu-2", "chap-2", "Deutéronome", "2")
ContenuChapites("deu-3", "chap-3", "Deutéronome", "3")
ContenuChapites("deu-4", "chap-4", "Deutéronome", "4")
ContenuChapites("deu-5", "chap-5", "Deutéronome", "5")
ContenuChapites("deu-6", "chap-6", "Deutéronome", "6")
ContenuChapites("deu-7", "chap-7", "Deutéronome", "7")
ContenuChapites("deu-8", "chap-8", "Deutéronome", "8")
ContenuChapites("deu-9", "chap-9", "Deutéronome", "9")
ContenuChapites("deu-10", "chap-10", "Deutéronome", "10")
ContenuChapites("deu-11", "chap-11", "Deutéronome", "11")
ContenuChapites("deu-12", "chap-12", "Deutéronome", "12")
ContenuChapites("deu-13", "chap-13", "Deutéronome", "13")
ContenuChapites("deu-14", "chap-14", "Deutéronome", "14")
ContenuChapites("deu-15", "chap-15", "Deutéronome", "15")
ContenuChapites("deu-16", "chap-16", "Deutéronome", "16")
ContenuChapites("deu-17", "chap-17", "Deutéronome", "17")
ContenuChapites("deu-18", "chap-18", "Deutéronome", "18")
ContenuChapites("deu-19", "chap-19", "Deutéronome", "19")
ContenuChapites("deu-20", "chap-20", "Deutéronome", "20")
ContenuChapites("deu-21", "chap-21", "Deutéronome", "21")
ContenuChapites("deu-22", "chap-22", "Deutéronome", "22")
ContenuChapites("deu-23", "chap-23", "Deutéronome", "23")
ContenuChapites("deu-24", "chap-24", "Deutéronome", "24")
ContenuChapites("deu-25", "chap-25", "Deutéronome", "25")
ContenuChapites("deu-26", "chap-26", "Deutéronome", "26")
ContenuChapites("deu-27", "chap-27", "Deutéronome", "27")
ContenuChapites("deu-28", "chap-28", "Deutéronome", "28")
ContenuChapites("deu-29", "chap-29", "Deutéronome", "29")
ContenuChapites("deu-30", "chap-30", "Deutéronome", "30")
ContenuChapites("deu-31", "chap-31", "Deutéronome", "31")
ContenuChapites("deu-32", "chap-32", "Deutéronome", "32")
ContenuChapites("deu-33", "chap-33", "Deutéronome", "33")
ContenuChapites("deu-34", "chap-34", "Deutéronome", "34")

// ==================== JOSUÉ (24 chapitres) ====================
ContenuChapites("jos-1", "chap-1", "Josué", "1")
ContenuChapites("jos-2", "chap-2", "Josué", "2")
ContenuChapites("jos-3", "chap-3", "Josué", "3")
ContenuChapites("jos-4", "chap-4", "Josué", "4")
ContenuChapites("jos-5", "chap-5", "Josué", "5")
ContenuChapites("jos-6", "chap-6", "Josué", "6")
ContenuChapites("jos-7", "chap-7", "Josué", "7")
ContenuChapites("jos-8", "chap-8", "Josué", "8")
ContenuChapites("jos-9", "chap-9", "Josué", "9")
ContenuChapites("jos-10", "chap-10", "Josué", "10")
ContenuChapites("jos-11", "chap-11", "Josué", "11")
ContenuChapites("jos-12", "chap-12", "Josué", "12")
ContenuChapites("jos-13", "chap-13", "Josué", "13")
ContenuChapites("jos-14", "chap-14", "Josué", "14")
ContenuChapites("jos-15", "chap-15", "Josué", "15")
ContenuChapites("jos-16", "chap-16", "Josué", "16")
ContenuChapites("jos-17", "chap-17", "Josué", "17")
ContenuChapites("jos-18", "chap-18", "Josué", "18")
ContenuChapites("jos-19", "chap-19", "Josué", "19")
ContenuChapites("jos-20", "chap-20", "Josué", "20")
ContenuChapites("jos-21", "chap-21", "Josué", "21")
ContenuChapites("jos-22", "chap-22", "Josué", "22")
ContenuChapites("jos-23", "chap-23", "Josué", "23")
ContenuChapites("jos-24", "chap-24", "Josué", "24")

// ==================== JUGES (21 chapitres) ====================
ContenuChapites("jug-1", "chap-1", "Juges", "1")
ContenuChapites("jug-2", "chap-2", "Juges", "2")
ContenuChapites("jug-3", "chap-3", "Juges", "3")
ContenuChapites("jug-4", "chap-4", "Juges", "4")
ContenuChapites("jug-5", "chap-5", "Juges", "5")
ContenuChapites("jug-6", "chap-6", "Juges", "6")
ContenuChapites("jug-7", "chap-7", "Juges", "7")
ContenuChapites("jug-8", "chap-8", "Juges", "8")
ContenuChapites("jug-9", "chap-9", "Juges", "9")
ContenuChapites("jug-10", "chap-10", "Juges", "10")
ContenuChapites("jug-11", "chap-11", "Juges", "11")
ContenuChapites("jug-12", "chap-12", "Juges", "12")
ContenuChapites("jug-13", "chap-13", "Juges", "13")
ContenuChapites("jug-14", "chap-14", "Juges", "14")
ContenuChapites("jug-15", "chap-15", "Juges", "15")
ContenuChapites("jug-16", "chap-16", "Juges", "16")
ContenuChapites("jug-17", "chap-17", "Juges", "17")
ContenuChapites("jug-18", "chap-18", "Juges", "18")
ContenuChapites("jug-19", "chap-19", "Juges", "19")
ContenuChapites("jug-20", "chap-20", "Juges", "20")
ContenuChapites("jug-21", "chap-21", "Juges", "21")

// ==================== RUTH (4 chapitres) ====================
ContenuChapites("rut-1", "chap-1", "Ruth", "1")
ContenuChapites("rut-2", "chap-2", "Ruth", "2")
ContenuChapites("rut-3", "chap-3", "Ruth", "3")
ContenuChapites("rut-4", "chap-4", "Ruth", "4")

// ==================== 1 SAMUEL (31 chapitres) ====================
ContenuChapites("1sa-1", "chap-1", "1 Samuel", "1")
ContenuChapites("1sa-2", "chap-2", "1 Samuel", "2")
ContenuChapites("1sa-3", "chap-3", "1 Samuel", "3")
ContenuChapites("1sa-4", "chap-4", "1 Samuel", "4")
ContenuChapites("1sa-5", "chap-5", "1 Samuel", "5")
ContenuChapites("1sa-6", "chap-6", "1 Samuel", "6")
ContenuChapites("1sa-7", "chap-7", "1 Samuel", "7")
ContenuChapites("1sa-8", "chap-8", "1 Samuel", "8")
ContenuChapites("1sa-9", "chap-9", "1 Samuel", "9")
ContenuChapites("1sa-10", "chap-10", "1 Samuel", "10")
ContenuChapites("1sa-11", "chap-11", "1 Samuel", "11")
ContenuChapites("1sa-12", "chap-12", "1 Samuel", "12")
ContenuChapites("1sa-13", "chap-13", "1 Samuel", "13")
ContenuChapites("1sa-14", "chap-14", "1 Samuel", "14")
ContenuChapites("1sa-15", "chap-15", "1 Samuel", "15")
ContenuChapites("1sa-16", "chap-16", "1 Samuel", "16")
ContenuChapites("1sa-17", "chap-17", "1 Samuel", "17")
ContenuChapites("1sa-18", "chap-18", "1 Samuel", "18")
ContenuChapites("1sa-19", "chap-19", "1 Samuel", "19")
ContenuChapites("1sa-20", "chap-20", "1 Samuel", "20")
ContenuChapites("1sa-21", "chap-21", "1 Samuel", "21")
ContenuChapites("1sa-22", "chap-22", "1 Samuel", "22")
ContenuChapites("1sa-23", "chap-23", "1 Samuel", "23")
ContenuChapites("1sa-24", "chap-24", "1 Samuel", "24")
ContenuChapites("1sa-25", "chap-25", "1 Samuel", "25")
ContenuChapites("1sa-26", "chap-26", "1 Samuel", "26")
ContenuChapites("1sa-27", "chap-27", "1 Samuel", "27")
ContenuChapites("1sa-28", "chap-28", "1 Samuel", "28")
ContenuChapites("1sa-29", "chap-29", "1 Samuel", "29")
ContenuChapites("1sa-30", "chap-30", "1 Samuel", "30")
ContenuChapites("1sa-31", "chap-31", "1 Samuel", "31")

// ==================== 2 SAMUEL (24 chapitres) ====================
ContenuChapites("2sa-1", "chap-1", "2 Samuel", "1")
ContenuChapites("2sa-2", "chap-2", "2 Samuel", "2")
ContenuChapites("2sa-3", "chap-3", "2 Samuel", "3")
ContenuChapites("2sa-4", "chap-4", "2 Samuel", "4")
ContenuChapites("2sa-5", "chap-5", "2 Samuel", "5")
ContenuChapites("2sa-6", "chap-6", "2 Samuel", "6")
ContenuChapites("2sa-7", "chap-7", "2 Samuel", "7")
ContenuChapites("2sa-8", "chap-8", "2 Samuel", "8")
ContenuChapites("2sa-9", "chap-9", "2 Samuel", "9")
ContenuChapites("2sa-10", "chap-10", "2 Samuel", "10")
ContenuChapites("2sa-11", "chap-11", "2 Samuel", "11")
ContenuChapites("2sa-12", "chap-12", "2 Samuel", "12")
ContenuChapites("2sa-13", "chap-13", "2 Samuel", "13")
ContenuChapites("2sa-14", "chap-14", "2 Samuel", "14")
ContenuChapites("2sa-15", "chap-15", "2 Samuel", "15")
ContenuChapites("2sa-16", "chap-16", "2 Samuel", "16")
ContenuChapites("2sa-17", "chap-17", "2 Samuel", "17")
ContenuChapites("2sa-18", "chap-18", "2 Samuel", "18")
ContenuChapites("2sa-19", "chap-19", "2 Samuel", "19")
ContenuChapites("2sa-20", "chap-20", "2 Samuel", "20")
ContenuChapites("2sa-21", "chap-21", "2 Samuel", "21")
ContenuChapites("2sa-22", "chap-22", "2 Samuel", "22")
ContenuChapites("2sa-23", "chap-23", "2 Samuel", "23")
ContenuChapites("2sa-24", "chap-24", "2 Samuel", "24")

// ==================== 1 ROIS (22 chapitres) ====================
ContenuChapites("1ro-1", "chap-1", "1 Rois", "1")
ContenuChapites("1ro-2", "chap-2", "1 Rois", "2")
ContenuChapites("1ro-3", "chap-3", "1 Rois", "3")
ContenuChapites("1ro-4", "chap-4", "1 Rois", "4")
ContenuChapites("1ro-5", "chap-5", "1 Rois", "5")
ContenuChapites("1ro-6", "chap-6", "1 Rois", "6")
ContenuChapites("1ro-7", "chap-7", "1 Rois", "7")
ContenuChapites("1ro-8", "chap-8", "1 Rois", "8")
ContenuChapites("1ro-9", "chap-9", "1 Rois", "9")
ContenuChapites("1ro-10", "chap-10", "1 Rois", "10")
ContenuChapites("1ro-11", "chap-11", "1 Rois", "11")
ContenuChapites("1ro-12", "chap-12", "1 Rois", "12")
ContenuChapites("1ro-13", "chap-13", "1 Rois", "13")
ContenuChapites("1ro-14", "chap-14", "1 Rois", "14")
ContenuChapites("1ro-15", "chap-15", "1 Rois", "15")
ContenuChapites("1ro-16", "chap-16", "1 Rois", "16")
ContenuChapites("1ro-17", "chap-17", "1 Rois", "17")
ContenuChapites("1ro-18", "chap-18", "1 Rois", "18")
ContenuChapites("1ro-19", "chap-19", "1 Rois", "19")
ContenuChapites("1ro-20", "chap-20", "1 Rois", "20")
ContenuChapites("1ro-21", "chap-21", "1 Rois", "21")
ContenuChapites("1ro-22", "chap-22", "1 Rois", "22")

// ==================== 2 ROIS (25 chapitres) ====================
ContenuChapites("2ro-1", "chap-1", "2 Rois", "1")
ContenuChapites("2ro-2", "chap-2", "2 Rois", "2")
ContenuChapites("2ro-3", "chap-3", "2 Rois", "3")
ContenuChapites("2ro-4", "chap-4", "2 Rois", "4")
ContenuChapites("2ro-5", "chap-5", "2 Rois", "5")
ContenuChapites("2ro-6", "chap-6", "2 Rois", "6")
ContenuChapites("2ro-7", "chap-7", "2 Rois", "7")
ContenuChapites("2ro-8", "chap-8", "2 Rois", "8")
ContenuChapites("2ro-9", "chap-9", "2 Rois", "9")
ContenuChapites("2ro-10", "chap-10", "2 Rois", "10")
ContenuChapites("2ro-11", "chap-11", "2 Rois", "11")
ContenuChapites("2ro-12", "chap-12", "2 Rois", "12")
ContenuChapites("2ro-13", "chap-13", "2 Rois", "13")
ContenuChapites("2ro-14", "chap-14", "2 Rois", "14")
ContenuChapites("2ro-15", "chap-15", "2 Rois", "15")
ContenuChapites("2ro-16", "chap-16", "2 Rois", "16")
ContenuChapites("2ro-17", "chap-17", "2 Rois", "17")
ContenuChapites("2ro-18", "chap-18", "2 Rois", "18")
ContenuChapites("2ro-19", "chap-19", "2 Rois", "19")
ContenuChapites("2ro-20", "chap-20", "2 Rois", "20")
ContenuChapites("2ro-21", "chap-21", "2 Rois", "21")
ContenuChapites("2ro-22", "chap-22", "2 Rois", "22")
ContenuChapites("2ro-23", "chap-23", "2 Rois", "23")
ContenuChapites("2ro-24", "chap-24", "2 Rois", "24")
ContenuChapites("2ro-25", "chap-25", "2 Rois", "25")

// ==================== 1 CHRONIQUES (29 chapitres) ====================
ContenuChapites("1ch-1", "chap-1", "1 Chroniques", "1")
ContenuChapites("1ch-2", "chap-2", "1 Chroniques", "2")
ContenuChapites("1ch-3", "chap-3", "1 Chroniques", "3")
ContenuChapites("1ch-4", "chap-4", "1 Chroniques", "4")
ContenuChapites("1ch-5", "chap-5", "1 Chroniques", "5")
ContenuChapites("1ch-6", "chap-6", "1 Chroniques", "6")
ContenuChapites("1ch-7", "chap-7", "1 Chroniques", "7")
ContenuChapites("1ch-8", "chap-8", "1 Chroniques", "8")
ContenuChapites("1ch-9", "chap-9", "1 Chroniques", "9")
ContenuChapites("1ch-10", "chap-10", "1 Chroniques", "10")
ContenuChapites("1ch-11", "chap-11", "1 Chroniques", "11")
ContenuChapites("1ch-12", "chap-12", "1 Chroniques", "12")
ContenuChapites("1ch-13", "chap-13", "1 Chroniques", "13")
ContenuChapites("1ch-14", "chap-14", "1 Chroniques", "14")
ContenuChapites("1ch-15", "chap-15", "1 Chroniques", "15")
ContenuChapites("1ch-16", "chap-16", "1 Chroniques", "16")
ContenuChapites("1ch-17", "chap-17", "1 Chroniques", "17")
ContenuChapites("1ch-18", "chap-18", "1 Chroniques", "18")
ContenuChapites("1ch-19", "chap-19", "1 Chroniques", "19")
ContenuChapites("1ch-20", "chap-20", "1 Chroniques", "20")
ContenuChapites("1ch-21", "chap-21", "1 Chroniques", "21")
ContenuChapites("1ch-22", "chap-22", "1 Chroniques", "22")
ContenuChapites("1ch-23", "chap-23", "1 Chroniques", "23")
ContenuChapites("1ch-24", "chap-24", "1 Chroniques", "24")
ContenuChapites("1ch-25", "chap-25", "1 Chroniques", "25")
ContenuChapites("1ch-26", "chap-26", "1 Chroniques", "26")
ContenuChapites("1ch-27", "chap-27", "1 Chroniques", "27")
ContenuChapites("1ch-28", "chap-28", "1 Chroniques", "28")
ContenuChapites("1ch-29", "chap-29", "1 Chroniques", "29")

// ==================== 2 CHRONIQUES (36 chapitres) ====================
ContenuChapites("2ch-1", "chap-1", "2 Chroniques", "1")
ContenuChapites("2ch-2", "chap-2", "2 Chroniques", "2")
ContenuChapites("2ch-3", "chap-3", "2 Chroniques", "3")
ContenuChapites("2ch-4", "chap-4", "2 Chroniques", "4")
ContenuChapites("2ch-5", "chap-5", "2 Chroniques", "5")
ContenuChapites("2ch-6", "chap-6", "2 Chroniques", "6")
ContenuChapites("2ch-7", "chap-7", "2 Chroniques", "7")
ContenuChapites("2ch-8", "chap-8", "2 Chroniques", "8")
ContenuChapites("2ch-9", "chap-9", "2 Chroniques", "9")
ContenuChapites("2ch-10", "chap-10", "2 Chroniques", "10")
ContenuChapites("2ch-11", "chap-11", "2 Chroniques", "11")
ContenuChapites("2ch-12", "chap-12", "2 Chroniques", "12")
ContenuChapites("2ch-13", "chap-13", "2 Chroniques", "13")
ContenuChapites("2ch-14", "chap-14", "2 Chroniques", "14")
ContenuChapites("2ch-15", "chap-15", "2 Chroniques", "15")
ContenuChapites("2ch-16", "chap-16", "2 Chroniques", "16")
ContenuChapites("2ch-17", "chap-17", "2 Chroniques", "17")
ContenuChapites("2ch-18", "chap-18", "2 Chroniques", "18")
ContenuChapites("2ch-19", "chap-19", "2 Chroniques", "19")
ContenuChapites("2ch-20", "chap-20", "2 Chroniques", "20")
ContenuChapites("2ch-21", "chap-21", "2 Chroniques", "21")
ContenuChapites("2ch-22", "chap-22", "2 Chroniques", "22")
ContenuChapites("2ch-23", "chap-23", "2 Chroniques", "23")
ContenuChapites("2ch-24", "chap-24", "2 Chroniques", "24")
ContenuChapites("2ch-25", "chap-25", "2 Chroniques", "25")
ContenuChapites("2ch-26", "chap-26", "2 Chroniques", "26")
ContenuChapites("2ch-27", "chap-27", "2 Chroniques", "27")
ContenuChapites("2ch-28", "chap-28", "2 Chroniques", "28")
ContenuChapites("2ch-29", "chap-29", "2 Chroniques", "29")
ContenuChapites("2ch-30", "chap-30", "2 Chroniques", "30")
ContenuChapites("2ch-31", "chap-31", "2 Chroniques", "31")
ContenuChapites("2ch-32", "chap-32", "2 Chroniques", "32")
ContenuChapites("2ch-33", "chap-33", "2 Chroniques", "33")
ContenuChapites("2ch-34", "chap-34", "2 Chroniques", "34")
ContenuChapites("2ch-35", "chap-35", "2 Chroniques", "35")
ContenuChapites("2ch-36", "chap-36", "2 Chroniques", "36")

// ==================== ESDRAS (10 chapitres) ====================
ContenuChapites("esd-1", "chap-1", "Esdras", "1")
ContenuChapites("esd-2", "chap-2", "Esdras", "2")
ContenuChapites("esd-3", "chap-3", "Esdras", "3")
ContenuChapites("esd-4", "chap-4", "Esdras", "4")
ContenuChapites("esd-5", "chap-5", "Esdras", "5")
ContenuChapites("esd-6", "chap-6", "Esdras", "6")
ContenuChapites("esd-7", "chap-7", "Esdras", "7")
ContenuChapites("esd-8", "chap-8", "Esdras", "8")
ContenuChapites("esd-9", "chap-9", "Esdras", "9")
ContenuChapites("esd-10", "chap-10", "Esdras", "10")

// ==================== NÉHÉMIE (13 chapitres) ====================
ContenuChapites("neh-1", "chap-1", "Néhémie", "1")
ContenuChapites("neh-2", "chap-2", "Néhémie", "2")
ContenuChapites("neh-3", "chap-3", "Néhémie", "3")
ContenuChapites("neh-4", "chap-4", "Néhémie", "4")
ContenuChapites("neh-5", "chap-5", "Néhémie", "5")
ContenuChapites("neh-6", "chap-6", "Néhémie", "6")
ContenuChapites("neh-7", "chap-7", "Néhémie", "7")
ContenuChapites("neh-8", "chap-8", "Néhémie", "8")
ContenuChapites("neh-9", "chap-9", "Néhémie", "9")
ContenuChapites("neh-10", "chap-10", "Néhémie", "10")
ContenuChapites("neh-11", "chap-11", "Néhémie", "11")
ContenuChapites("neh-12", "chap-12", "Néhémie", "12")
ContenuChapites("neh-13", "chap-13", "Néhémie", "13")

// ==================== ESTHER (10 chapitres) ====================
ContenuChapites("est-1", "chap-1", "Esther", "1")
ContenuChapites("est-2", "chap-2", "Esther", "2")
ContenuChapites("est-3", "chap-3", "Esther", "3")
ContenuChapites("est-4", "chap-4", "Esther", "4")
ContenuChapites("est-5", "chap-5", "Esther", "5")
ContenuChapites("est-6", "chap-6", "Esther", "6")
ContenuChapites("est-7", "chap-7", "Esther", "7")
ContenuChapites("est-8", "chap-8", "Esther", "8")
ContenuChapites("est-9", "chap-9", "Esther", "9")
ContenuChapites("est-10", "chap-10", "Esther", "10")

// ==================== JOB (42 chapitres) ====================
ContenuChapites("job-1", "chap-1", "Job", "1")
ContenuChapites("job-2", "chap-2", "Job", "2")
ContenuChapites("job-3", "chap-3", "Job", "3")
ContenuChapites("job-4", "chap-4", "Job", "4")
ContenuChapites("job-5", "chap-5", "Job", "5")
ContenuChapites("job-6", "chap-6", "Job", "6")
ContenuChapites("job-7", "chap-7", "Job", "7")
ContenuChapites("job-8", "chap-8", "Job", "8")
ContenuChapites("job-9", "chap-9", "Job", "9")
ContenuChapites("job-10", "chap-10", "Job", "10")
ContenuChapites("job-11", "chap-11", "Job", "11")
ContenuChapites("job-12", "chap-12", "Job", "12")
ContenuChapites("job-13", "chap-13", "Job", "13")
ContenuChapites("job-14", "chap-14", "Job", "14")
ContenuChapites("job-15", "chap-15", "Job", "15")
ContenuChapites("job-16", "chap-16", "Job", "16")
ContenuChapites("job-17", "chap-17", "Job", "17")
ContenuChapites("job-18", "chap-18", "Job", "18")
ContenuChapites("job-19", "chap-19", "Job", "19")
ContenuChapites("job-20", "chap-20", "Job", "20")
ContenuChapites("job-21", "chap-21", "Job", "21")
ContenuChapites("job-22", "chap-22", "Job", "22")
ContenuChapites("job-23", "chap-23", "Job", "23")
ContenuChapites("job-24", "chap-24", "Job", "24")
ContenuChapites("job-25", "chap-25", "Job", "25")
ContenuChapites("job-26", "chap-26", "Job", "26")
ContenuChapites("job-27", "chap-27", "Job", "27")
ContenuChapites("job-28", "chap-28", "Job", "28")
ContenuChapites("job-29", "chap-29", "Job", "29")
ContenuChapites("job-30", "chap-30", "Job", "30")
ContenuChapites("job-31", "chap-31", "Job", "31")
ContenuChapites("job-32", "chap-32", "Job", "32")
ContenuChapites("job-33", "chap-33", "Job", "33")
ContenuChapites("job-34", "chap-34", "Job", "34")
ContenuChapites("job-35", "chap-35", "Job", "35")
ContenuChapites("job-36", "chap-36", "Job", "36")
ContenuChapites("job-37", "chap-37", "Job", "37")
ContenuChapites("job-38", "chap-38", "Job", "38")
ContenuChapites("job-39", "chap-39", "Job", "39")
ContenuChapites("job-40", "chap-40", "Job", "40")
ContenuChapites("job-41", "chap-41", "Job", "41")
ContenuChapites("job-42", "chap-42", "Job", "42")

// ==================== PSAUMES (150 chapitres) ====================
ContenuChapites("psa-1", "chap-1", "Psaumes", "1")
ContenuChapites("psa-2", "chap-2", "Psaumes", "2")
ContenuChapites("psa-3", "chap-3", "Psaumes", "3")
ContenuChapites("psa-4", "chap-4", "Psaumes", "4")
ContenuChapites("psa-5", "chap-5", "Psaumes", "5")
ContenuChapites("psa-6", "chap-6", "Psaumes", "6")
ContenuChapites("psa-7", "chap-7", "Psaumes", "7")
ContenuChapites("psa-8", "chap-8", "Psaumes", "8")
ContenuChapites("psa-9", "chap-9", "Psaumes", "9")
ContenuChapites("psa-10", "chap-10", "Psaumes", "10")
ContenuChapites("psa-11", "chap-11", "Psaumes", "11")
ContenuChapites("psa-12", "chap-12", "Psaumes", "12")
ContenuChapites("psa-13", "chap-13", "Psaumes", "13")
ContenuChapites("psa-14", "chap-14", "Psaumes", "14")
ContenuChapites("psa-15", "chap-15", "Psaumes", "15")
ContenuChapites("psa-16", "chap-16", "Psaumes", "16")
ContenuChapites("psa-17", "chap-17", "Psaumes", "17")
ContenuChapites("psa-18", "chap-18", "Psaumes", "18")
ContenuChapites("psa-19", "chap-19", "Psaumes", "19")
ContenuChapites("psa-20", "chap-20", "Psaumes", "20")
ContenuChapites("psa-21", "chap-21", "Psaumes", "21")
ContenuChapites("psa-22", "chap-22", "Psaumes", "22")
ContenuChapites("psa-23", "chap-23", "Psaumes", "23")
ContenuChapites("psa-24", "chap-24", "Psaumes", "24")
ContenuChapites("psa-25", "chap-25", "Psaumes", "25")
ContenuChapites("psa-26", "chap-26", "Psaumes", "26")
ContenuChapites("psa-27", "chap-27", "Psaumes", "27")
ContenuChapites("psa-28", "chap-28", "Psaumes", "28")
ContenuChapites("psa-29", "chap-29", "Psaumes", "29")
ContenuChapites("psa-30", "chap-30", "Psaumes", "30")
ContenuChapites("psa-31", "chap-31", "Psaumes", "31")
ContenuChapites("psa-32", "chap-32", "Psaumes", "32")
ContenuChapites("psa-33", "chap-33", "Psaumes", "33")
ContenuChapites("psa-34", "chap-34", "Psaumes", "34")
ContenuChapites("psa-35", "chap-35", "Psaumes", "35")
ContenuChapites("psa-36", "chap-36", "Psaumes", "36")
ContenuChapites("psa-37", "chap-37", "Psaumes", "37")
ContenuChapites("psa-38", "chap-38", "Psaumes", "38")
ContenuChapites("psa-39", "chap-39", "Psaumes", "39")
ContenuChapites("psa-40", "chap-40", "Psaumes", "40")
ContenuChapites("psa-41", "chap-41", "Psaumes", "41")
ContenuChapites("psa-42", "chap-42", "Psaumes", "42")
ContenuChapites("psa-43", "chap-43", "Psaumes", "43")
ContenuChapites("psa-44", "chap-44", "Psaumes", "44")
ContenuChapites("psa-45", "chap-45", "Psaumes", "45")
ContenuChapites("psa-46", "chap-46", "Psaumes", "46")
ContenuChapites("psa-47", "chap-47", "Psaumes", "47")
ContenuChapites("psa-48", "chap-48", "Psaumes", "48")
ContenuChapites("psa-49", "chap-49", "Psaumes", "49")
ContenuChapites("psa-50", "chap-50", "Psaumes", "50")
ContenuChapites("psa-51", "chap-51", "Psaumes", "51")
ContenuChapites("psa-52", "chap-52", "Psaumes", "52")
ContenuChapites("psa-53", "chap-53", "Psaumes", "53")
ContenuChapites("psa-54", "chap-54", "Psaumes", "54")
ContenuChapites("psa-55", "chap-55", "Psaumes", "55")
ContenuChapites("psa-56", "chap-56", "Psaumes", "56")
ContenuChapites("psa-57", "chap-57", "Psaumes", "57")
ContenuChapites("psa-58", "chap-58", "Psaumes", "58")
ContenuChapites("psa-59", "chap-59", "Psaumes", "59")
ContenuChapites("psa-60", "chap-60", "Psaumes", "60")
ContenuChapites("psa-61", "chap-61", "Psaumes", "61")
ContenuChapites("psa-62", "chap-62", "Psaumes", "62")
ContenuChapites("psa-63", "chap-63", "Psaumes", "63")
ContenuChapites("psa-64", "chap-64", "Psaumes", "64")
ContenuChapites("psa-65", "chap-65", "Psaumes", "65")
ContenuChapites("psa-66", "chap-66", "Psaumes", "66")
ContenuChapites("psa-67", "chap-67", "Psaumes", "67")
ContenuChapites("psa-68", "chap-68", "Psaumes", "68")
ContenuChapites("psa-69", "chap-69", "Psaumes", "69")
ContenuChapites("psa-70", "chap-70", "Psaumes", "70")
ContenuChapites("psa-71", "chap-71", "Psaumes", "71")
ContenuChapites("psa-72", "chap-72", "Psaumes", "72")
ContenuChapites("psa-73", "chap-73", "Psaumes", "73")
ContenuChapites("psa-74", "chap-74", "Psaumes", "74")
ContenuChapites("psa-75", "chap-75", "Psaumes", "75")
ContenuChapites("psa-76", "chap-76", "Psaumes", "76")
ContenuChapites("psa-77", "chap-77", "Psaumes", "77")
ContenuChapites("psa-78", "chap-78", "Psaumes", "78")
ContenuChapites("psa-79", "chap-79", "Psaumes", "79")
ContenuChapites("psa-80", "chap-80", "Psaumes", "80")
ContenuChapites("psa-81", "chap-81", "Psaumes", "81")
ContenuChapites("psa-82", "chap-82", "Psaumes", "82")
ContenuChapites("psa-83", "chap-83", "Psaumes", "83")
ContenuChapites("psa-84", "chap-84", "Psaumes", "84")
ContenuChapites("psa-85", "chap-85", "Psaumes", "85")
ContenuChapites("psa-86", "chap-86", "Psaumes", "86")
ContenuChapites("psa-87", "chap-87", "Psaumes", "87")
ContenuChapites("psa-88", "chap-88", "Psaumes", "88")
ContenuChapites("psa-89", "chap-89", "Psaumes", "89")
ContenuChapites("psa-90", "chap-90", "Psaumes", "90")
ContenuChapites("psa-91", "chap-91", "Psaumes", "91")
ContenuChapites("psa-92", "chap-92", "Psaumes", "92")
ContenuChapites("psa-93", "chap-93", "Psaumes", "93")
ContenuChapites("psa-94", "chap-94", "Psaumes", "94")
ContenuChapites("psa-95", "chap-95", "Psaumes", "95")
ContenuChapites("psa-96", "chap-96", "Psaumes", "96")
ContenuChapites("psa-97", "chap-97", "Psaumes", "97")
ContenuChapites("psa-98", "chap-98", "Psaumes", "98")
ContenuChapites("psa-99", "chap-99", "Psaumes", "99")
ContenuChapites("psa-100", "chap-100", "Psaumes", "100")
ContenuChapites("psa-101", "chap-101", "Psaumes", "101")
ContenuChapites("psa-102", "chap-102", "Psaumes", "102")
ContenuChapites("psa-103", "chap-103", "Psaumes", "103")
ContenuChapites("psa-104", "chap-104", "Psaumes", "104")
ContenuChapites("psa-105", "chap-105", "Psaumes", "105")
ContenuChapites("psa-106", "chap-106", "Psaumes", "106")
ContenuChapites("psa-107", "chap-107", "Psaumes", "107")
ContenuChapites("psa-108", "chap-108", "Psaumes", "108")
ContenuChapites("psa-109", "chap-109", "Psaumes", "109")
ContenuChapites("psa-110", "chap-110", "Psaumes", "110")
ContenuChapites("psa-111", "chap-111", "Psaumes", "111")
ContenuChapites("psa-112", "chap-112", "Psaumes", "112")
ContenuChapites("psa-113", "chap-113", "Psaumes", "113")
ContenuChapites("psa-114", "chap-114", "Psaumes", "114")
ContenuChapites("psa-115", "chap-115", "Psaumes", "115")
ContenuChapites("psa-116", "chap-116", "Psaumes", "116")
ContenuChapites("psa-117", "chap-117", "Psaumes", "117")
ContenuChapites("psa-118", "chap-118", "Psaumes", "118")
ContenuChapites("psa-119", "chap-119", "Psaumes", "119")
ContenuChapites("psa-120", "chap-120", "Psaumes", "120")
ContenuChapites("psa-121", "chap-121", "Psaumes", "121")
ContenuChapites("psa-122", "chap-122", "Psaumes", "122")
ContenuChapites("psa-123", "chap-123", "Psaumes", "123")
ContenuChapites("psa-124", "chap-124", "Psaumes", "124")
ContenuChapites("psa-125", "chap-125", "Psaumes", "125")
ContenuChapites("psa-126", "chap-126", "Psaumes", "126")
ContenuChapites("psa-127", "chap-127", "Psaumes", "127")
ContenuChapites("psa-128", "chap-128", "Psaumes", "128")
ContenuChapites("psa-129", "chap-129", "Psaumes", "129")
ContenuChapites("psa-130", "chap-130", "Psaumes", "130")
ContenuChapites("psa-131", "chap-131", "Psaumes", "131")
ContenuChapites("psa-132", "chap-132", "Psaumes", "132")
ContenuChapites("psa-133", "chap-133", "Psaumes", "133")
ContenuChapites("psa-134", "chap-134", "Psaumes", "134")
ContenuChapites("psa-135", "chap-135", "Psaumes", "135")
ContenuChapites("psa-136", "chap-136", "Psaumes", "136")
ContenuChapites("psa-137", "chap-137", "Psaumes", "137")
ContenuChapites("psa-138", "chap-138", "Psaumes", "138")
ContenuChapites("psa-139", "chap-139", "Psaumes", "139")
ContenuChapites("psa-140", "chap-140", "Psaumes", "140")
ContenuChapites("psa-141", "chap-141", "Psaumes", "141")
ContenuChapites("psa-142", "chap-142", "Psaumes", "142")
ContenuChapites("psa-143", "chap-143", "Psaumes", "143")
ContenuChapites("psa-144", "chap-144", "Psaumes", "144")
ContenuChapites("psa-145", "chap-145", "Psaumes", "145")
ContenuChapites("psa-146", "chap-146", "Psaumes", "146")
ContenuChapites("psa-147", "chap-147", "Psaumes", "147")
ContenuChapites("psa-148", "chap-148", "Psaumes", "148")
ContenuChapites("psa-149", "chap-149", "Psaumes", "149")
ContenuChapites("psa-150", "chap-150", "Psaumes", "150")

