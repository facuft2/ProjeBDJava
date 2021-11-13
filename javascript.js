
/**DOM */
var formulario = document.getElementById("formulario");
var princi = document.getElementById("princi");
var container = document.getElementById("container");
var register = document.getElementById("btnRegister");
var redi = document.getElementById("BtnBack");
const tiempoBox = document.getElementById("tiempo");
const rosco1 = document.getElementById("rosco1");
var input = document.getElementsByClassName("FormInput");
/**DOM */
const words = [
  { letra: "a", descripcion: "In nostrud nulla aliqua enim pariatur exercitation aute nostrud minim id nisi labore.", respuesta: "hermana" },
  { letra: "b", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "c", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "d", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "e", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "f", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "g", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "h", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "i", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "j", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "k", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "m", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "n", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "ñ", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "o", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "p", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "q", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "r", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "s", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "t", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "u", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "v", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "w", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
  { letra: "x", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "y", descripcion: "Tu hermana ", respuesta: "hermana" },
  { letra: "z", descripcion: "Tu hermana sin a ", respuesta: "hermana" },
];

const indicesta = {
  incorrecto: 0,
  correcto: 1,
  pasa: 2,
};

const respuestar1 = [];
const respuestar2 = [];

console.log(rosco1);

let index = 0;
console.log(rosco1.children[index]);
/** FUNCTIONS */



/**EL PASAPALABRA */
function skip() {
  resetRosco();
  rosco1.children[index].classList.toggle("letra--skip");
  respuestar1.push(2);
  index++;
  document.getElementById("descripcion").innerHTML = words[index].descripcion;
  console.log(index);
  
}

function resetRosco() {
if(index == 25){
for(let i = 0; i < rosco1.children.length; i++){
if(respuestar1[i] == 2){
rosco1.children[i].classList.toggle("letra--default");
index = i;
console.log(index + "index");
break;
}
}

}
}
  


document.getElementById("descripcion").innerHTML = words[index].descripcion;

function verificar() {
  const inputEnviar = document.getElementById("inputEnviar").value;
  if (inputEnviar == words[index].respuesta) {
    resetRosco();
    rosco1.children[index].classList.toggle("letra--approve");
    document.getElementById("descripcion").innerHTML = words[index].descripcion;
    respuestar1.push(1);
  } else {
    resetRosco(); 
    rosco1.children[index].classList.toggle("letra--fail");
    document.getElementById("descripcion").innerHTML = words[index].descripcion;
    respuestar1.push(0);
  }
  index++;
  console.log(index);
  console.log(respuestar1);   

}


//Contador
let dseconds = 120;
function contador() {
  if (dseconds == 0) {
    clearInterval(interval);
    return gameend();
  }
  dseconds--;

  document.getElementById("tiempo").innerHTML = dseconds;
}
setInterval(contador, 1000);

/** FUNCTIONS */

function gameend(){

  const gameend = document.getElementById("princi");
  gameend.classList.add("gameend");
  gameend.innerHTML = `<h1>GAME OVER</h1>
  <h2>Tu puntaje fue de: ${respuestar1.length}</h2>
  <button class="btn" onclick="logear()">Jugar de nuevo</button>`;
  document.body.appendChild(gameend);

}
function startgame() {
  const start = document.getElementById("princi");
  start.classList.add("start");
  start.innerHTML = `<h1>PASAPALABRA</h1>
  <h2>${dseconds}</h2>
  <button class="btn" onclick="back()">Regresar</button>
  <button class="btn" onclick="change()">Registrarse</button>`;
  document.body.appendChild(start);
}

