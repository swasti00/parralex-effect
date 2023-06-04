let moon = document.getElementById('moon');
let ft = document.getElementById('front');
let bg = document.getElementById('background');
let text = document.getElementById('text');
let header = document.querySelector('header');
let h2 = document.getElementById('h2');
let p = document.getElementById('p');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * 1 + 'px';
    ft.style.top = value * 0.5 + 'px';
    ft.style.left = value * 0.2 + 'px';
    bg.style.top = value * 0.8 + 'px';
    text.style.marginTop = value * 0.5 + 'px';
    text.style.marginLeft = value * 3 + 'px';
})
