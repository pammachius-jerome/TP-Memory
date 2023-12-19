// Déclaration des variables
let images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let imagesAleatoire = [];
let imageCarte = document.getElementsByClassName("img-thumbnail");
let tableauImages = document.getElementById("tableauImages");
let carteSelectionne;
let idCarte;
let nbrEssai;
let tableauCarteInitialise = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// fonction pour ranomiser le tableau des images
function aleatoire(entrerTableau) {
    entrerTableau.sort(() => Math.random() - 0.5);
    return entrerTableau
};

// initialisation des image dos de cartes
async function dosDeCartes() {
    for (let i = 0; i < 12; i++) {
        if (tableauCarteInitialise[i] != 2) {
            imageCarte[i].innerHTML = '<img src="images/dos.jpg" id = "' + i + '" alt="Dos de carte">';
        }
    }
    nbrEssai = 0;
    return Promise.resolve();
};
// fonction pour attendre
function temporise(x){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      },2000);
    })
  }
// fonction asynchrone
async function fonctionAsynchrone() {
    let x = await temporise(10);
    dosDeCartes();
    document.querySelector("#tableauImages").addEventListener("click", selectionCarte);
}

// fonction pour retourner la carte
function selectionCarte(e) {
    carteSelectionne = e.target;
    carteSelectionne = carteSelectionne.parentElement;
    idCarte = carteSelectionne.firstElementChild.id;
    // début du timer et test
    carteSelectionne.innerHTML = '<img src="images/' + imagesAleatoire[idCarte] + '.jpg" alt="Carte coté face ">';
    nbrEssai++;
    tableauCarteInitialise[idCarte] = 1;
    console.log(tableauCarteInitialise);

    if (nbrEssai == 2) {
        let position1 = tableauCarteInitialise.indexOf(1);
        let position2 = tableauCarteInitialise.indexOf(1, position1 + 1);
        if (imagesAleatoire[position1] != imagesAleatoire[position2]) {
            document.querySelector("#tableauImages").removeEventListener("click", selectionCarte);
          
            fonctionAsynchrone();

            for (let i = 0; i < 12; i++) {
                if (tableauCarteInitialise[i] == 1) {
                    tableauCarteInitialise[i] = 0
                }
            }
        } else {
            for (let i = 0; i < 12; i++) {
                if (tableauCarteInitialise[i] == 1) {
                    tableauCarteInitialise[i] = 2
                }
            }
            nbrEssai = 0;
            verificationFinPartie();
        }

    }
};

function verificationFinPartie() {
    if (tableauCarteInitialise.every((element) => element === 2)) {
        console.log("gagner!");
        alert("Gagné!!!")
    } else {
        console.log("pas encore gagner");
    }
}

function debutPartie() {
    dosDeCartes();
    imagesAleatoire = aleatoire(images);
    console.log(imagesAleatoire);
    document.querySelector("#tableauImages").addEventListener("click", selectionCarte);
};

