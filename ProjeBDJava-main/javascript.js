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
const getWords = async () => {
  const response = await fetch("http://127.0.0.1:9000/palabras");
  const data = await response.json();
};

const getTopJugadores = async () => {
  const response = await fetch("http://127.0.0.1:9000/top/ganadas");
  const data = await response.json();
  return data;
};

const tbody = document.querySelector("#tabla1 tbody");
let mostrar_top = async () => {
  let data = await getTopJugadores();
  data.tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = data[i].nombre;
  }
};

mostrar_top();

const words = [
  {
    letra: "a",
    descripcion:
      "In nostrud nuaalla aliqua enim pariatur exercitation aute nostrud minim id nisi labore.",
    respuesta: "hermana",
  },
  {
    letra: "b",
    descripcion:
      "Nulla commodo fugiat non veniam amet deserunt anim est occaecat magna. ",
    respuesta: "hermana",
  },
  {
    letra: "c",
    descripcion: "Nisi sunt consequat consectetur aute dolor laborum. ",
    respuesta: "hermana",
  },
  {
    letra: "d",
    descripcion:
      "Nulla anim sint fugiat labore et non incididunt excepteur nostrud occaecat proident aliqua duis.",
    respuesta: "hermana",
  },
  {
    letra: "e",
    descripcion:
      "TEsse eiusmod cillum aute exercitation ipsum consectetur ex ut sint laborum enim ipsum.u hermana sin a ",
    respuesta: "hermana",
  },
  {
    letra: "f",
    descripcion:
      "TCillum labore mollit in eu sint amet cupidatat magna ad est in consectetur.u hermana ",
    respuesta: "hermana",
  },
  {
    letra: "g",
    descripcion:
      "Tu herUt est exercitation culpa minim velit aliqua magna dolore.mana sin a ",
    respuesta: "hermana",
  },
  {
    letra: "h",
    descripcion:
      "Tu heEsse aliquip do minim sint laborum minim officia Lorem pariatur ex quis eu proident.rmana ",
    respuesta: "hermana",
  },
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

console.log(rosco1);

let index = 0;

/** FUNCTIONS */

function game() {
  window.location = "game.html";
  contador();
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

document.getElementById("descripcion").innerHTML = words[index].descripcion;

function skip() {
  resetRosco();
  rosco1.children[index].classList.toggle("letra--skip");
  respuestar1.push(2);
  index++;
  document.getElementById("descripcion").innerHTML = words[index].descripcion;
  console.log(index);
}
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
  document.getElementById(
    "modal-content"
  ).innerHTML = `Tu puntaje fue de ${puntaje} respuestas correctas`;
}

/** FUNCTIONS */
