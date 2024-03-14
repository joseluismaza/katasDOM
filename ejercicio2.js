/*1.1 Inserta dinamicamente en un html un div vacio con javascript.*/
let nuevadiv = document.createElement("div");
document.body.appendChild(nuevadiv);

/*1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
let divp = document.createElement("div");
let parrafo = document.createElement("p");
parrafo.textContent = "Ejercicio 1.2";
divp.appendChild(parrafo);
document.body.appendChild(divp);

/*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
  loop con javascript.*/
let bucleparrafo = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let p = document.createElement("p");
  p.textContent = `Párrafo ${i + 1}`;
  bucleparrafo.appendChild(p);
}
document.body.appendChild(bucleparrafo);


/*1.4 Inserta dinamicamente con javascript en un html una p con el 
  texto 'Soy dinámico!'.*/
let parrafonuevo = document.createElement("p");
parrafonuevo.textContent = "Soy dinámico!";
document.body.appendChild(parrafonuevo);

/*1.5 Inserta en el h2 con la clase.fn - insert - here el texto 'Wubba Lubba dub dub'.*/
let nuevotextoH2 = document.querySelector(".fn-insert-here");
nuevotextoH2.textContent = "Wubba Lubba dub dub";


/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let crearul = document.createElement("ul");
let crearli = document.createElement("li");
for (let a = 0; a < 5; a++) {
  let li = document.createElement("li");
  li.textContent = apps[a];
  crearul.appendChild(li);
}
document.body.appendChild(crearul);

/*1.7 Elimina todos los nodos que tengan la clase.fn - remove - me*/
let eliminarnodos = document.querySelectorAll(".fn-remove-me");
eliminarnodos.forEach(nodo => {
  nodo.parentNode.removeChild(nodo);
});

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
  Recuerda que no solo puedes insertar elementos con.appendChild.*/
let nuevoparrafodiv = document.createElement("p");
nuevoparrafodiv.textContent = "Voy al medio!";
let segundodiv = document.querySelector("div:nth-of-type(2)");
let primerdiv = segundodiv.parentNode;
primerdiv.insertBefore(nuevoparrafodiv, segundodiv);


/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
  .fn - insert - here*/

let todosdiv = document.querySelectorAll(".fn-insert-here");
let nuevotexto = document.createElement("p");
nuevotexto.textContent = "Voy dentro!";

document.body.appendChild(nuevotexto);

