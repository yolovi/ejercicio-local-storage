// 1. Formulario de contacto - Local Storage
// Crear (en el html) un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje

// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputBtn = document.querySelector("#btn");
const inputMensaje = document.querySelector("#mensaje");
// const form = document.querySelector("#form");

// Para que no recargue la pagina por defecto. Crear una constate (const nombreValue) donde guardaremos el valor del input.

// ESTO NO FUNCIONARA PORQUE VALUE NO ES UNA PROPIEDAD QUE ESTE DENTRO DE USER vs EL inputNombre.value es el VALUE QUE ESTA POR DEFECTO EN UN INPUT QUE ES LO QUE SE ESCRIBE EN LA CASILLA DEL NAVEGADOR:
// function onSubmit(e) {
//     e.preventDefault();
//     const userValue = user.value;
//     console.log(userValue)
// }


// ESTA ES LA FORMA CORRECTA porque el input tiene un valor por defecto:

// Funcion por input
function onSubmit(e) {
  e.preventDefault();

  const Nombre = inputNombre.value;
  const emailValue = inputEmail.value;
  const mensajeValue = inputMensaje.value;

  const user = {
    Nombre,
    emailValue,
    mensajeValue,
  };

  // Esto convierte el objeto en un JSON string solo para poder guardarlo en el local storage del navegador (Lo convierte y lo guarda):
localStorage.setItem("user", JSON.stringify(user));

//  Realiza el proceso inverso para poder obtener de nuevo nuestro objeto. Lo recogemos del Local Storage

let userJson = JSON.parse(localStorage.getItem("user"));
console.log("Mi objeto", userJson);

}




// Fuera de la funcion. Le decimos al botón que cuando escuche el evento “click” ejecute la función que hemos creado:
inputBtn.addEventListener("click", onSubmit);

// // Le decimos al botón que cuando escuche el evento “click” ejecute la función que hemos creado:
// btn.addEventListener('click',onSubmit)

// // Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados
