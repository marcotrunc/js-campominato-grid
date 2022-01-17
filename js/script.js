console.log('JS Ok')
/*Consegna
L'utente indica TRAMITE DOM un livello di difficoltà
in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi
in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro. */

// ! Funzioni he mi aspetto, generare griglia
// ** Funzione che genera la griglia
function generateGrid(maxElement, elementInPage) {
    for (let i = 0; i < maxElement; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('cell');
        elementInPage.appendChild(newElement);
    }
}
// 1 Prendo elementi dal Dom
const grid = document.getElementById('grid');

const maxElement = 64;
generateGrid(64, grid);
/* 2 Assegno alle varibiali delle dimensioni in base alla
difficoltà*/
// 3 Assegno una lunghezza diversa a numero di elementi
