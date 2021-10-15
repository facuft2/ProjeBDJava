const a = [
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
  {letra: "b" , descripcion : "Tu hermana " , respuesta: "hermana"},
  {letra: "a" , descripcion : "Tu hermana sin a " , respuesta: "hermn"},
];

const rosco = document.getElementById('rosco');
console.log(rosco);

let index = 0;
console.log(rosco.children[index]);


function c() {

  rosco.children[index].classList.toggle('letra--skip');
  index++;
}

function e() {
  const inputEnviar = document.getElementById('inputEnviar').value;
  if (inputEnviar == a[index].respuesta) {
    rosco.children[index].classList.toggle('letra--approve'); 
  }else{
    rosco.children[index].classList.toggle('letra--fail');
  }
  index++;
console.log(index);
}












function logear() {
    princi.style.visibility = 'visible';
    container.remove();
  }


  /** COSAS PARA CAMBIAR de pagina */
var princi = document.getElementById('princi');
var container = document.getElementById('container');
/** COSAS PARA CAMBIAR de pagina */
