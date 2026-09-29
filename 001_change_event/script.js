const city = document.querySelector('#city')
//console.log(city.value)

window.addEventListener('DOMContentLoaded', cityChange)
city.addEventListener('change', cityChange)

function cityChange() {
    //console.log(city.value)
    const selectedCity = city.value.toLowerCase()
    //console.log(selectedCity)
    
    const demo = document.querySelector('#demo')
    //console.log(demo)
    
    demo.textContent = selectedCity

    const imageDiv = document.querySelector('#image')
    //console.log(imageDiv)
    const img = document.createElement('img')
    img.src = `./img/${selectedCity}.jpg`
    img.alt = selectedCity
    img.title = selectedCity
    //console.log(img)
    
    imageDiv.replaceChildren(img)
}