const words = [
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "c" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "d" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "e" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "f" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "g" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "h" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "i" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "j" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "k" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "m" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "n" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "ñ" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "o" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "p" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "q" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "r" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "s" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "t" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "u" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "v" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "w" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
  {letra: "x" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "y" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "z" , descripcion : "Tu hermana sin a " , respuesta: "hermana"},
];


let index = 0;
console.log(rosco.children[index]);
/** FUNCTIONS */

/**CUANDO APRETAS 'JUGA' TE MANDA AL ROSCO DIRECTAMENTE */
function logear() {
  container.remove();
  formulario.remove();
  princi.style.visibility = 'visible';
  
}
/**BORRA EL FORMULARIO Y APARECE EL PASAPALABRA */
function back() {
  formulario.remove();
  princi.style.visibility = 'visible';
  
}

/** APRETAS REGISTRARSE Y TE REDIRECCIONA AL FORMULARIO */
function change() {
  container.remove();
  formulario.style.visibility = 'visible';
  
}
/** ES UNA """ANIMACION""" CON EL TEXTO DEL FORMULARIO(Al darle click para escribir desplaza las letras hacia arriba y estas no bajan si hay algo escrito de lo contrario si, no pude alinear el texto) */
function keyup() {
  if (this.value.length >= 1) {
    this.nextElementSibling.classList.add('focus');
  }
  else {
    this.nextElementSibling.classList.remove('focus');
  }
}
 /**EL PASAPALABRA */
function skip() {
  rosco.children[index].classList.toggle('letra--skip');
  index++;
}
/** VERIFICA SI TA BOM THE ASNWER */
function verificar() {
  const inputEnviar = document.getElementById('inputEnviar').value;
  if (inputEnviar == words[index].respuesta) {
    rosco.children[index].classList.toggle('letra--approve'); 
  }else{
    rosco.children[index].classList.toggle('letra--fail');
  }
  index++;
console.log(index);
}
/** FUNCTIONS */



  /** COSAS PARA CAMBIAR de pagina */
var formulario = document.getElementById('formulario')
var princi = document.getElementById('princi');
var container = document.getElementById('container');
var register = document.getElementById('btnRegister')
var redi = document.getElementById('BtnBack')
var descripcion = document.getElementById('descripcion');
var rosco = document.getElementById('rosco');
console.log(rosco);
/** COSAS PARA CAMBIAR de pagina */


/** FORMULARIO DE LOGEO */
var input = document.getElementsByClassName('FormInput');
for (var r = 0; r < input.length; r++) {
  input[r].addEventListener(keyup)
}
/** FORMULARIO DE LOGEO */


