// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje

// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputBtn = document.querySelector("#btn");
const inputMensaje = document.querySelector("#mensaje");
const form = document.querySelector("#form");

// Para que no recargue la pagina por defecto. Crear una constate (const nombreValue) donde guardaremos el valor del input.
console.log(inputBtn);

function onSubmit(e) {
  e.preventDefault();

  const nombreValue = nombre.value;
  localStorage.setItem("nombre", nombreValue);
  console.log(nombreValue);
}

// Le decimos al botón que cuando escuche el evento “click” ejecute la función que hemos creado:
inputBtn.addEventListener("click", onSubmit);

// // Le decimos al botón que cuando escuche el evento “click” ejecute la función que hemos creado:
// btn.addEventListener('click',onSubmit)

// // Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados
