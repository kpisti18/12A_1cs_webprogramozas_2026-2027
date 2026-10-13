const demo = document.querySelector('#demo')
// console.log(demo)
let isImgDisplayed = false

demo.addEventListener('mouseover', displayImg)
demo.addEventListener('mouseout', removeImg)

function displayImg(event) {
    //console.log(event)
    if (!isImgDisplayed && event.target === demo) {
        const img = document.createElement('img')
        img.src = './img/kep.jpg'
        img.alt = 'elegtelen'
        //console.log(img)
        
        demo.replaceChildren(img)
        isImgDisplayed = true
    }
}

function removeImg(event) {
    if (isImgDisplayed && event.target === demo) {
        const p = document.createElement('p')
        p.textContent = 'Hanyasra értékellek?'
        //console.log(p)
        demo.replaceChildren(p)
        isImgDisplayed = false
    }
}