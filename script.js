let entrada = document.getElementById("insertar");
let salida = document.getElementById("salida");
const copia = document.getElementById("copiar");
const nada = document.getElementById("nada");
const nadita = document.getElementById("nadita");


function redireccionar(valor) {
    if(valor == 1){
    window.location.href = "encriptador.html";
    }
    else if(valor == 2){
        window.location.href = "https://www.linkedin.com/in/david-soto-castro/";
    }
  }

  function encriptar(){

    if(entrada.value!=""){

    salida.style.display = "flex";
    copia.style.display= "flex";
    nada.style.display = "none";
    nadita.style.display= "none";

    let diccionarioEncriptar = {};

diccionarioEncriptar["a"] = "ai";
diccionarioEncriptar["e"] = "enter";
diccionarioEncriptar["i"] = "imes";
diccionarioEncriptar["o"] = "ober";
diccionarioEncriptar["u"] = "ufat";

const texto =entrada.value;
let resultado ="";


for(let i = 0; i<texto.length;i++){

    const letra = texto.charAt(i);

    if(diccionarioEncriptar[letra]) {

     resultado=resultado+(diccionarioEncriptar[letra]);

    }else{

        resultado=resultado+texto.charAt(i);

    }
}

salida.value=resultado;

entrada.value="";

}
 }

 function desencriptar(){
  if(entrada.value!=""){

  salida.style.display = "flex";
  copia.style.display= "flex";
  nada.style.display = "none";
  nadita.style.display= "none";

  let texto=entrada.value;
  let resultado = "";
  
  resultado = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
  
  salida.value=resultado;
  entrada.value="";
  }

}

function copiar(){

 salida.focus();
 document.execCommand('selectAll');
 document.execCommand('copy');
 
}