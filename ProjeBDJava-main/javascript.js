/**DOM */
var formulario = document.getElementById("formulario");
var princi = document.getElementById("princi");
var container = document.getElementById("container");
var register = document.getElementById("btnRegister");
var redi = document.getElementById("BtnBack");
const tiempoBox = document.getElementById("tiempo");
const rosco1 = document.getElementById("rosco1");
var input = document.getElementsByClassName("FormInput");
let index = 0;
/**DOM */
const getWords = async () => {
  const response = await fetch("http://127.0.0.1:9000/palabras");
  const palabras = await response.json();
  return palabras; 
};
getWords();



const getTopJugadores = async () => {
  const response = await fetch("http://127.0.0.1:9000/top/ganadas");
  const data = await response.json();
  return data;
};

const tbody = document.querySelector("#tabla1 tbody");
let mostrar_top = async () => {
  let top = await getTopJugadores();
  top.tbody.innerHTML = "";
  for (let i = 0; i < top.length; i++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = top[i].nombre;
  }
};
mostrar_top();


let words = [];

async function mostrarPalabra() {
words = await getWords();
console.log(words);
document.getElementById("descripcion").innerHTML = words[index].definicion;
}
mostrarPalabra();

const indicesta = {
  incorrecto: 0,
  correcto: 1,
  pasa: 2,
};

const respuestar1 = [];



/** FUNCTIONS */

function game() {
  window.location = "game.html";
}


/**EL PASAPALABRA */

function resetRosco() {
  if (index == 25) {
    for (let i = 0; i < respuestar1.length; i++) {
      if (respuestar1[i] == 2) {
        rosco1.children[i].classList.toggle("letra--default");
        index = i;
        break;
      }
    }
  }
}


function skip() {
  resetRosco();
  rosco1.children[index].classList.toggle("letra--skip");
  respuestar1.push(2);
  index++;
  document.getElementById("descripcion").innerHTML = words[index].definicion;
  console.log(index);
}
function verificar() {
  const inputEnviar = document.getElementById("inputEnviar").value;
  if (inputEnviar == words[index].palabra) {
    resetRosco();
    rosco1.children[index].classList.toggle("letra--approve");
    index++;
    document.getElementById("descripcion").innerHTML = words[index].definicion;
    respuestar1.push(1);
    console.log(index);

  } else {
    resetRosco();
    rosco1.children[index].classList.toggle("letra--fail");
    index++;
    document.getElementById("descripcion").innerHTML = words[index].definicion;
    respuestar1.push(0);
    console.log(index);
  }
  
}

let puntaje = 0;

function puntajes() {
  for (let index = 0; index < respuestar1.length; index++) {
    if (respuestar1[index] == 1) {
      puntaje++;
    }
  }

  console.log(puntaje);
}

//Contador

let dseconds = 50;
count = setInterval(function () {
  if (dseconds != 0) {
    dseconds--;
    document.getElementById("tiempo").innerHTML = dseconds;
  } else {
    clearInterval(count);
    gameEnd();
  }
}, 1000);

function restartGame() {
  window.location = "game.html";
  return topTier;
}

function gameEnd() {
  puntajes();
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-content").innerHTML = `Tu puntaje fue de ${puntaje} respuestas correctas`;
}

/** FUNCTIONS */
