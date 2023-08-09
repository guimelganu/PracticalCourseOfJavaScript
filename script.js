const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "Patito";
console.log(h1.getAttribute("Pantalla"));

h1.setAttribute("class", "rojo");

h1.classList.add('verde');
h1.classList.remove('rojo');

const img = document.createElement('img');

img.setAttribute('src', '')