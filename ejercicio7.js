let añadirendiv = document.querySelector('div[data-function="printHere"]');
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


let ulplazas = document.createElement("ul");
places.forEach(plazas => {
  let li = document.createElement("li");
  li.textContent = plazas;
  ulplazas.appendChild(li);
})
añadirendiv.appendChild(ulplazas);
