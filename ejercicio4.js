/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
let boton = document.querySelector("#btnToClick");
boton.addEventListener("click", (event) => {
  console.log(event);
});

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/
let foco = document.querySelector(".focus");
foco.addEventListener("focus", (e) => {
  console.log(foco.value);
});

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/
let inputado = document.querySelector(".value");
inputado.addEventListener("input", () => {
  console.log(inputado.value);
});


