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

// // Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados
// Para que no recargue la pagina por defecto. Crear una constate donde guardaremos el valor del input.



// ESTA ES LA FORMA CORRECTA porque el input tiene un valor por defecto. // Funcion por input
function onSubmit(e) {
  e.preventDefault();

  const nombre = inputNombre.value;
  const emailValue = inputEmail.value;
  const mensajeValue = inputMensaje.value;

  const user = {
    nombre, //si la key y la value se llaman igual solo se pone una
    correo: emailValue,
    mensaje: mensajeValue,
  };


  // ESTO NO FUNCIONARA PORQUE VALUE NO ES UNA PROPIEDAD QUE ESTE DENTRO DE USER vs EL inputNombre.value es el VALUE QUE ESTA POR DEFECTO EN UN INPUT QUE ES LO QUE SE ESCRIBE EN LA CASILLA DEL NAVEGADOR:
          // function onSubmit(e) {
          //     e.preventDefault();
          //     const userValue = user.value;
          //     console.log(userValue)
          // }

  // Esto convierte el objeto en un JSON string solo para poder guardarlo en el local storage del navegador (Lo convierte y lo guarda):
localStorage.setItem("usuario", JSON.stringify(user)); 

//  Esto es una llamada a la funcion que he creado mas abajo para guardar los datos al realizar el submit

guardarDatos(userJson)
console.log(arrayDatos)


}

//  Realiza el proceso inverso para poder obtener de nuevo nuestro objeto. Lo recogemos del Local Storage

let userJson = JSON.parse(localStorage.getItem("usuario"));


// Fuera de la funcion. Le decimos al botón que cuando escuche el evento “click” ejecute la función que hemos creado:
inputBtn.addEventListener("click", onSubmit);

// Muestra el usuario que has guardado en el DOM
// Pista: utiliza JSON.parse() y JSON.stringify() 

// ERROR. SOLO ME FUNCIONA AL REFRESCAR LA PAGINA. DESPUES DE ENVIAR
let p = document.createElement("p");
let pTexto = document.createTextNode(JSON.stringify(userJson));
let textoSinCaracteres = pTexto.data.replace(/[{}"]/g, ""); // Utilizar expresión regular para eliminar los caracteres no deseados

p.appendChild(document.createTextNode(textoSinCaracteres)); // introduce en el parrafo los datos rectificados
document.body.appendChild(p);

// Funcion para guardar los datos en un array vacio
let arrayDatos = [];
function guardarDatos(dato){
  arrayDatos.push(dato);
}

console.log(arrayDatos)

// Boton para borrar el local storage
const btnClear = document.querySelector("#btnBorrar");

function clearLocal(){
  localStorage.clear();
}

btnClear.addEventListener("click", clearLocal);

