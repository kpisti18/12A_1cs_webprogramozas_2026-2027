// Ide írd az elemekre hivatkozást, az eseménykezelő hozzárendelését
// és a saját függvényedet!
const nev = document.querySelector('#nev')
const gomb = document.querySelector('#gomb')
const jatekosnev = document.querySelector('#jatekosnev')
//console.log(nev, gomb, jatekosnev)

gomb.addEventListener('click', showName)

function showName() {
    if (nev.value.trim() === '') {
        jatekosnev.textContent = 'Vendég'
    } else {
        jatekosnev.textContent = nev.value
    }
}