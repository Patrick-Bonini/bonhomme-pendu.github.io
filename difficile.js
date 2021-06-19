//array de tout les mots disponibles dans le jeu
var arrayDifficile = [
  "ORNITHORYNQUE",
  "HYDROPHOBE",
	"ANTICONSTITUTIONNELLEMENT",
	"METHYLISOTHIAZOLINONE",
	"CONDRICHTYEN",
	"ZYGOMATIQUE",
	"HYPPOPOTOMONSTROSESQUIPEDALIOPHOBIE",
  "HEXAKOSIOIHEXEKONTAHEXAPHOBIE",
  "LLANFAIRPWLLGWYNGYLLGOGERYCHWYRNDROBWLLLLANTYSILIOGOGOGOCH",
  "INTERGOUVERNEMENTALISATIONS"
];

//code pour choisir un de ces mots au hasard
var hasardDifficile = arrayDifficile[Math.floor(Math.random()*arrayDifficile.length)];

//Définie etatMot comme un array vide
let etatMot = [];
//définie erreures comme 0
let erreures = 0;
//définie erreures max comme 7
let maxErreures = 7;

//trouve la longueure du mot choisi
let length = hasardDifficile.length
 
//fonction pour afficher le mot comme un mot caché
function affiche_() {
  for (let n = 0; n < length; n++) {
    etatMot[n] = ("_ ")
  }
  //code pour afficher le mot sur la page web
  mot.innerHTML = etatMot.join('')
}


//fonction qui determine si tu as perdu le jeu
function jeuPerdu() {
  //si le nombre d'erreures permis est atteint, le code s'éxecute
  if (erreures == maxErreures) {
    //affiche tu as perdu sur l'écran
    document.getElementById('gagneOuPerd').innerHTML = "Tu as Perdu!"
    //change l'image à un bonhomme pendu mort
    document.getElementById('photoBonhomme').src = 'https://www.cs.cmu.edu/~cburch/hang/hang07.gif'
    //dit à l'utilisateur ce que le mot était
    motFin.innerHTML = 'Le mot était ' + hasardDifficile
  }
}

//fonction qui détermine si le jeu est gagné
function jeuGagne() {
  //s'éxécute si l'état du mot est égale à le mot choisi par le code
  if (etatMot.join('') == hasardDifficile) {
    //affiche tu as gagné sur l'écran
    document.getElementById('gagneOuPerd').innerHTML = 'Tu as gagné!'
    document.getElementById('photoBonhomme').src = 'https://www.cs.cmu.edu/~cburch/hang/hang08.gif'
  }
}

//défini lettreChoisi comme un string vide
var lettreChoisi = "";

//fonction pour voir si la lettre choisie est dans le mot choisi par le code
function clavier(lettreChoisi) {
  //boolean faux pour lettreTrouve
  var lettreTrouve = false;

  //for loop qui fonctionne jusqu'à ce que le jeu est gagné ou perdu
  for (let i = 0; i < etatMot.length; i++) {
    //if statement qui affiche une lettre si elle est bien dans le mot
    if (hasardDifficile[i] == lettreChoisi ) {
      etatMot[i] = lettreChoisi
      lettreTrouve = true;
      //vérifie si le jeu est gagné
      jeuGagne();
    } 
  } 
  //if statement qui ajoute un erreure si la lettre choisie n'est pas dans le mot
  if (lettreTrouve == false) {
    erreures++
    //vérifie si le jeu est perdu
    jeuPerdu();
    document.getElementById('erreures').innerHTML = erreures
  }
  //change la photo du bonhomme pendu à chaque fois qu'une nouvelle erreure est ajoutée
  document.getElementById('photoBonhomme').src = 'https://www.cs.cmu.edu/~cburch/hang/hang0' + erreures + '.gif'
  mot.innerHTML = etatMot.join('')
}

//fonction pour afficher les erreures en haut de l'écran
function metErreures() {
  document.getElementById('maxErreures').innerHTML = erreures;
}

//appelle la fonction pour afficher le mot caché
affiche_();
