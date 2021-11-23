/**Login  */
let formLogin = document.getElementById("loginForm");
const form = {
  CI: document.querySelector("#inputCI"),
  PASS: document.querySelector("#inputPIN"),
};

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch('http://127.0.0.1:9000/login', {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ci: form.CI.value,
      pin: form.PASS.value,
    }),
  }).then((response) => response.json())
    .then((data) => {
      console.log(data.status);
      if (data.status == "400") {
          alert("Error al introduccir la contraseña o la cedula");
      } else {
        localStorage.setItem('ci', form.CI.value);
        window.location.href = "http://127.0.0.1:5500/ProjeBDJava-main/game.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//**Login  */