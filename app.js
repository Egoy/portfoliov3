let moon = document.getElementById('moon')
let mBack = document.getElementById('mountain-back')
let mFront = document.getElementById('mountain-front')
let toggler = document.getElementById('switch')
let text = document.getElementById('text')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    moon.style.top = value * 1 + 'px'
    mBack.style.top = value * 0.75 + 'px'
    mFront.style.top = value * 0 + 'px'
    text.style.marginTop = value * -.5 + 'px'
    text.style.marginRight = value * 4 + 'px'
})

toggler.addEventListener('change', function(){
    console.log('huehuehuhue')
})

let list = document.querySelectorAll('li');
for (let i=0; i<list.length; i++){
    list[i].onmouseover = function() {
        let j = 0;
        while(j<list.length){
            list[j++].className = 'list'
        }
        list[i].className = 'list active'
    }
}

