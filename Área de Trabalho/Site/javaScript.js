function calcular() {
  var n1 = parseInt(document.getElementById('numero1').value, 10);
  var n2 = parseInt(document.getElementById('numero2').value, 10);
  document.getElementById('resultado').innerHTML = n1 + n2;

alert(n1 + n2);
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
