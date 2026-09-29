const slider = document.querySelector('#csuszka')
//console.log(slider)

slider.addEventListener('input', mood)

function mood() {
    const sliderValue = parseInt(slider.value) + 1
    //console.log(sliderValue)
    
    const img = document.querySelector('#kep')
    img.src = `./img/${sliderValue}.png`
    img.alt = 'hangulat'
    //console.log(img)
}