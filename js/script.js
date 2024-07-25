let arregloVocales = ["a", "e", "i", "o", "u"];
let arregloPalabras = ["ai", "enter", "imes", "ober", "ufat"];

//Función para encriptar
function encriptar(text) {
  let separarTexto = [];
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    let existe = false;
    for (let j = 0; j < arregloVocales.length; j++) {
      if (text[i] == arregloVocales[j]) {
        console.log(text[i], arregloPalabras[j]);
        separarTexto.push(arregloPalabras[j]);
        existe = true;
      }
    }
    if (!existe) {
      separarTexto.push(text[i]);
    }
  }
  return separarTexto.join("");
}

//Función desencriptar
function desencriptar(text) {
  return text
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

//Funcion visible
function visibleLabel(labelEncriptado) {
  labelEncriptado.style.visibility = "visible";

  let botonCopiar = document.getElementById("botonCopiar");
  botonCopiar.style.visibility = "visible";
  let imagenLabel = document.getElementById("spanBorrar");
  imagenLabel.style.visibility = "hidden";
}

//Evento del boton Encriptar
document
  .getElementById("botonEncriptar")
  .addEventListener("click", function () {
    let contenidoTexto = document.getElementById("encriptarTexto").value;
    if (contenidoTexto == "") {
      alert("Escribe algo para encriptar");
    } else {
      let encriptarLabel = document.getElementById("labelEncriptado");
      encriptarLabel.textContent = encriptar(contenidoTexto);
      visibleLabel(labelEncriptado);
    }
  });

//Evento de boton desencriptar
document
  .getElementById("botonDesencriptar")
  .addEventListener("click", function () {
    let contenidoTexto = document.getElementById("encriptarTexto").value;
    if (contenidoTexto == "") {
      alert("Escribe algo para desencriptar");
    } else {
      let desencriptarLabel = document.getElementById("labelEncriptado");
      desencriptarLabel.textContent = desencriptar(contenidoTexto);
      visibleLabel(labelEncriptado);
    }
  });

//Evento boton copiar

document.getElementById("botonCopiar").addEventListener("click", function () {
  let textoLabel = document.getElementById("labelEncriptado").textContent;
  navigator.clipboard
    .writeText(textoLabel)
    .then(function () {
      console.log("Texto copiado: " + textoLabel);
    })
    .catch(function (error) {
      console.error("Error al copiar: " + error);
    });
});

//Evento boton pegar
document.getElementById("botonPegar").addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then(function (text) {
      document.getElementById("encriptarTexto").value = text;
      console.log("Texto pegado en el textarea: " + text);
    })
    .catch(function (error) {
      console.error("Error al pegar texto: ", error);
    });
});

//limpiar pagina

document.getElementById("icon").addEventListener("click", function () {
  let textoLabel = document.getElementById("labelEncriptado");
  textoLabel.textContent = "";
  let textoEncriptado = document.getElementById("encriptarTexto");
  textoEncriptado.value = "";
  let botonCopiar = document.getElementById("botonCopiar");
  botonCopiar.style.visibility = "hidden";
  let imagenLabel = document.getElementById("spanBorrar");
  imagenLabel.style.visibility = "visible";
});

//mensaje emergente

function showTemporaryMessage() {
  var message = document.getElementById("textoTemporal");
  message.style.display = "block";
  setTimeout(function () {
    message.style.display = "none";
  }, 5000);
}

showTemporaryMessage();
