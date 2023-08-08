
let name = "Jorge";
let lastname = "Garcia";
let platziUserName = "GuimelGaNu"
let age = 26;
let email = "guimelgn96@hotmail.com";
let mayorDeEdad = 18;
let savedMoney = 20000;
let spents = 15000;

let realMoney = savedMoney - spents

console.log("Nombre Completo: " + name + " " + lastname);
console.log("Dinero Real: " + (savedMoney-spents));
console.log(`Real Money: ${spents}`);


function saludar (name, lastname, nickname){

    const completeName = name + lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");    
}

saludar("Jorge ","Garcia","Memelas");


const tipoDeSuscripcion = "Expert";

if(tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis.");
}
else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.")
}
else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.");
}

if(tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis.");
}
if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.")
}
if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.");
}


let tiposDeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis.",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes.",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año."
}

function determinarTipoDeSuscripcion(suscripcion){
    if(tiposDeSuscripcion[suscripcion]){
        console.log(tiposDeSuscripcion[suscripcion])
        return;
    }
    console.warn("Ese tipo de suscripción no sirve");
}

determinarTipoDeSuscripcion("expertDuo");


let x = 0;
while(x  < 5){
    console.log(`Hola Perro por ${x} vez`);
    x++;
}

let y = 10
while(y>=2){
    console.log(`El valor de i es: ${y}`);
    y--;
}

do{
    var response = prompt("Cuanto es 2 + 2?");
}while(response != 2);


function receiveArray (array = []){
    return console.log(array[0]);
}

receiveArray([1,2,3,4])

function receiveArrayOneByOne (array2 = []) {
    return array2.forEach(element => {
        console.log(element);
    });
}


receiveArrayOneByOne(["Manzana","Pera","Jitomate"]);


let carros = [
    {nombre: "Cadillac", año: "1720"},
    {nombre: "Mac-E", año: "2023"},
    {nombre: "Mustang", año: "2018"}
];

let persona = {
    nombre: "Pepe",
    edad: 32,
    nickname: "Pepito"
}

function receiveObjects (carros) {
    return carros.forEach(carro => {
        console.log(carro)
    }); 
}

function imprimirObjeto (obj) {
    for(var i in obj){
        console.log(persona[i]);
    }
}

receiveObjects(carros);

imprimirObjeto(persona);

function printNumbers() {
	for (var i = 0; i < 10; i++) {
		setTimeout(
        function printer() {
            console.log(i);
            },
			100 * i
		);
	}
}

printNumbers();