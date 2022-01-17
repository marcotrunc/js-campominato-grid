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
// ** Funzione che genera la cella
function generateCell(cellInRow, i) {
    const newElement = document.createElement('div');
    newElement.classList.add('cell');
    newElement.innerText = i + 1;
    // Style
    newElement.style.width = `calc(700px / ${cellInRow} )`;
    newElement.style.height = `calc(700px / ${cellInRow})`;
    newElement.style.lineHeight = `calc(700px / ${cellInRow})`;
    return newElement;
}

//** Funzione che mi permette di ricavare le celle per riga
function getLevel(levelValue) {
    if (levelValue === 'first-level') {
        return 10;
    } else if (levelValue === 'second-level') {
        return 9;
    } else {
        return 7;
    }
}
// !------------------------------------------------------

//** 1 Prendo elementi dal Dom
const grid = document.getElementById('grid');
const levelField = document.getElementById('level-select');
const button = document.getElementById('button');
// !----------------------------------------
// ! PROGRAMMA PRINCIPALE
// !----------------------------------------

button.addEventListener('click', function () {
    // 2Acquisisco dati
    const level = levelField.value;
    console.log(level);
    // 3 Associo al livello un numero di celle per riga
    const elementForRow = getLevel(level);
    console.log(getLevel(level));
    // 4 Numero di celle
    const numberOfElement = elementForRow * elementForRow;
    console.log(numberOfElement);
    for (let i = 0; i < numberOfElement; i++) {
        const newElement = generateCell(elementForRow, i);


        newElement.addEventListener('click', () => {
            newElement.classList.toggle('clicked');
        });

        grid.appendChild(newElement);
    }
});