/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ulpaises = document.createElement("ul");
let lipaises = document.createElement("li");
for (let a = 0; a < 5; a++) {
  let li = document.createElement("li");
  li.textContent = countries[a];
  ulpaises.appendChild(li);
}
document.body.appendChild(ulpaises);

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
let eliminarelemento = document.querySelectorAll(".fn-remove-me");
eliminarelemento.forEach(elemento => {
  elemento.parentNode.removeChild(elemento);
});

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
let añadirenfuncion = document.querySelector('div[data-function="printHere"]');
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ulcars = document.createElement("ul");
cars.forEach(coche => {
  let li = document.createElement("li");
  li.textContent = coche;
  ulcars.appendChild(li);
});

añadirenfuncion.appendChild(ulcars);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countries2.forEach(pais => {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  h4.textContent = pais.title;
  let img = document.createElement("img");
  img.src = pais.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/
let boton = document.createElement("button");
boton.textContent = "Eliminar último div";

function eliminardiv() {
  let divremove = document.querySelectorAll("div");
  divremove[divremove.length - 1].remove();
}
boton.addEventListener("click", eliminardiv);
document.body.appendChild(boton);

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

let botoneliminado = document.querySelectorAll("div");

for (let div of botoneliminado) {
  let button = document.createElement("button");
  button.textContent = "Elimar"
  button.addEventListener("click", (event) => event.target.parentElement.remove())
  div.appendChild(button);
}


