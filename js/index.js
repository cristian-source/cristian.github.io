var boton = document.getElementById('boton').addEventListener("click", function() {
  document.getElementById('título').style.backgroundColor= '#c13213' 
});

var boton1 = document.getElementById('boton1').addEventListener("click", function() {
  document.getElementById('contenido').style.display= 'none' 
});
 
var boton2 = document.getElementById('boton2').addEventListener("click", function() {
  document.getElementById('contenido').style.display= 'inline'
});

var boton3 = document.getElementById('boton3').addEventListener("click", function() {
  document.getElementById("fecha").innerHTML = Date();
});

var boton4 = document.getElementById('boton4').addEventListener("click", function() {
  const lineas = document.getElementsByClassName("linea");
  for (let i = 0; i <lineas.length; i++) {
    lineas[i].style.fontFamily= 'calibri'
   }
});