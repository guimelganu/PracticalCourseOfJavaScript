const h1 = document.querySelector('h1');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const calcular = document.querySelector("#calcular");
const result = document.querySelector("#result");

function btnOnclick(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "Resultado de tu suma: " + suma;
}
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = "Patito";
// console.log(h1.getAttribute("Pantalla"));

// h1.setAttribute("class", "rojo");

// h1.classList.add('verde');
// h1.classList.remove('rojo');

// const img = document.createElement('img');

// img.setAttribute('src', 'https://static.platzi.com/media/avatars/platziteam_8cfe6fc7-1246-4c9a-9f5d-d10d467443ee.png')

// pid.innerHTML = "";

// pid.appendChild(img);
