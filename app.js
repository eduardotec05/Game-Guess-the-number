let numeroSecreto = 0;
let intentos = 0;
let listaNumerosJugados = [];
let numeroMaximo = prompt("Ingrese el número máximo para el juego:");

condicionesIniciales();

function condicionesIniciales() {
  asignarTextoElemento("h1", "Bienvenido al juego aleatorio");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = numeroAleatorio(10);
  //reiniciar los intentos
  intentos = 1;
  console.log(numeroSecreto);
}
//funcion para verificar si el numero ingresado es igual al numero secreto
function verificarIntento() {
  let numeroIngresado = parseInt(document.getElementById("valorUsuario").value);
  let mensaje = "";
  if (numeroIngresado === numeroSecreto) {
    mensaje = `¡Adivinaste! en ${intentos} ${
      intentos === 1 ? "intento" : "intentos"
    }`;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroIngresado > numeroSecreto) {
    mensaje = "El número secreto es menor";
    intentos++;
  } else {
    mensaje = "El número secreto es mayor";
    intentos++;
  }
  asignarTextoElemento("p", mensaje);
  limpiarCaja();
}

function reiniciarJuego() {
  //limpiar la caja de texto
  limpiarCaja();
  /*indiciar mensaje de bienvenida
  iniciar un número aleatorio
  reiniciar los intentos*/
  condicionesIniciales();
  //deshabilitar el boton de reiniciar
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
//funcion para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function numeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumerosJugados.length == numeroMaximo) {
    asignarTextoElemento("p", "Se han sorteado todos los números posibles.Actualice la página para volver a jugar.");
  } else {
    if (listaNumerosJugados.includes(numeroGenerado)) {
      return numeroAleatorio();
    } else {
      listaNumerosJugados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
