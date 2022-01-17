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
function generateGrid(maxElement, elementInPage, cellInRow) {
    for (let i = 0; i < maxElement; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('cell');
        newElement.innerText = i + 1;
        // Style
        newElement.style.width = `calc(700px / ${cellInRow} )`;
        newElement.style.height = `calc(700px / ${cellInRow})`;
        newElement.style.lineHeight = `calc(700px / ${cellInRow})`;
        elementInPage.appendChild(newElement);
    }
}

//** Funzione che mi permette di ricavare le celle per riga
function getLevel(levelValue, num) {
    if (levelValue === 'first-level') {
        return num = 10;
    } else if (levelValue === 'second-level') {
        return num = 9;
    }
    return num = 7;
}
// !------------------------------------------------------

//** 1 Prendo elementi dal Dom
const grid = document.getElementById('grid');
const levelField = document.getElementById('level-select');
const button = document.getElementById('button');


// 3 Assegno una lunghezza diversa a numero di elementi



// !----------------------------------------
// ! PROGRAMMA PRINCIPALE
// !----------------------------------------

button.addEventListener('click', function () {
    // 4 Acquisisco dati
    const level = levelField.value;;
    // 5 Associo al livello un numero di celle 
    let cell;
    const elementForRow = getLevel(level, cell);
    console.log(getLevel(level, cell));
    const numberOfElement = elementForRow * elementForRow;
    console.log(elementForRow);
    generateGrid(numberOfElement, grid, elementForRow);
});