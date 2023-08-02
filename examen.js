
// let name = "Jorge";
// let lastname = "Garcia";
// let platziUserName = "GuimelGaNu"
// let age = 26;
// let email = "guimelgn96@hotmail.com";
// let mayorDeEdad = 18;
// let savedMoney = 20000;
// let spents = 15000;

// let realMoney = savedMoney - spents

// console.log("Nombre Completo: " + name + " " + lastname);
// console.log("Dinero Real: " + (savedMoney-spents));
// console.log(`Real Money: ${spents}`);


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

const tipoDeSuscription = ["Free", "Basic", "Expert", "ExpertPlus"];

