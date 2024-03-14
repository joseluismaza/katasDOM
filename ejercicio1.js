/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
let boton = document.querySelector(".showme");
console.log(boton);
/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
let h1 = document.querySelector("#pillado");
console.log(h1);

/*1.3 Usa querySelector para mostrar por consola todos los p*/
let parrafo = document.querySelectorAll("p");
console.log(parrafo);

/*1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon*/
let pokemo = document.querySelectorAll(".pokemon");
console.log(pokemo);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".*/
let atributo = document.querySelectorAll('span[data-function="testMe"]');
console.log(atributo);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

let atributo3 = atributo[2];
console.log(atributo3);