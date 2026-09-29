const demo = document.querySelector('#demo')
const area = document.querySelector('#area')

//console.log(demo, area)

area.addEventListener('keyup', keyEvent)

function keyEvent() {
    //console.log('műkdik')
    let star = ''

    //console.log(area.value)
    
    for(let i = 0; i < area.value.length; i++) {
        star+='*'
    }

    demo.textContent = star
}