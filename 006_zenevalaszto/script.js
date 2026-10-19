// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
// és írd meg a saját függvényedet!
const stilus = document.querySelector('#stilus')
const valasztott = document.querySelector('#valasztott')
//console.log(stilus, valasztott)

stilus.addEventListener('change', showStyle)

function showStyle() {
    valasztott.textContent = stilus.value
    document.title = stilus.value
}
