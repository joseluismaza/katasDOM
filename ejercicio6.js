let eliminarnodos = document.querySelectorAll(".fn-remove-me");
eliminarnodos.forEach(nodo => {
  nodo.parentNode.removeChild(nodo);
});