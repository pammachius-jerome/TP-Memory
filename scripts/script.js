// Déclaration des variables
let images = [1,1,2,2,3,3,4,4,5,5,6,6];
let imagesAleatoire = [];
let imageCarte = document.getElementsByClassName("img-thumbnail");
let tableauCarte = document.getElementById("tableauImages");
let carteSelectionne;
let cible;
// fonction pour ranomiser le tableau des images
function aleatoire(entrerTableau) {
        entrerTableau.sort(() => Math.random() -0.5);
};

// initialisation des image dos de cartes
function dosDeCartes () {
    
    for ( let i= 0; i < 12; i++) {
        imageCarte[i].innerHTML = '<img src="images/dos.jpg" alt="Dos de carte">';
    }
};

// fonction pour retourner la carte
function retourner (e) {
    cible = e.target;
    cible.innerHTML = "click ici";
    // carteSelectionne = tableauCarte.querySelectorAll("td:nth-child(3)")[0];
    console.log(carteSelectionne);
    // carteSelectionne.innerHTML = '<img src="images/1.jpg" alt="Carte une ">';


};


// ranomiser le tableau des images
aleatoire(images);
dosDeCartes();
tableauCarte.addEventListener("click", retourner);
