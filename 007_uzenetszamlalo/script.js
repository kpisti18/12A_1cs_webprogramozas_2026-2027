// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
// és írd meg a saját függvényedet!
const uzenet = document.querySelector('#uzenet')
const darab = document.querySelector('#darab')

const szamlalo = document.querySelector('.szamlalo')
szamlalo.lastChild.textContent = ' karakter maradt'

uzenet.addEventListener('keyup', counter)

function counter() {
    //darab.textContent = uzenet.value.length
    darab.textContent = 100 - uzenet.value.length
}