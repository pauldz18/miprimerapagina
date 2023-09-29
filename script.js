alert("Hola este es mi Javascript");

let nombre="Paul";

console.log(nombre);

let contenido = "nuevonombre";
let titulo = document.querySelector(".fuente-acento");
titulo.innerHTML = contenido;
//condicion
let textotitulo = titulo.innerText
console.log(textotitulo);

if (textotitulo == "nuevonombre"){
    textotitulo = "Otro";
}else {
    console.log ("no se cumple");
}


// funcion

let palabra1 = "cambio1";
let palabra2 = "cambio2";
let palabra3 = "cambio3";


let estrofa = document.querySelector(".parrafo2");

function cambiodepal(palabra1, palabra2, palabra3){
    let contenido = `Segundo ${palabra1} del texto mostrar descripcion y ${palabra2} de la persona, cualidades, ${palabra3} y estudios.`;
    return contenido;
}

estrofa.innerText = cambiodepal(palabra1, palabra2, palabra3 );