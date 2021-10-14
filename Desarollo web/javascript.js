var princi = document.getElementById('princi');
var container = document.getElementById('container');
var btonLogin = document.getElementById('btonLogin');
function logear() {
    princi.style.visibility = 'visible';
    container.style.visibility = 'hidden';
    container.remove();
  }