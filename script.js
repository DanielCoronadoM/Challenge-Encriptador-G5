const text_in = document.querySelector(".caja_input");
const text_out = document.querySelector(".caja_output");


function btnEncriptar(){
    let textoEncriptado = encriptar(text_in.value);
    text_out.value = textoEncriptado;
    
    mostrarTexto();
}

function btnDesencriptar(){
    let textoEncriptado = desencriptar(text_in.value);
    text_out.value = textoEncriptado;

    mostrarTexto();
}

function btnCopiar(){
    text_out.select(); 
    navigator.clipboard.writeText(text_out.value);
    mensaje.value = "";
    

    //alert("Texto copiado");
}

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    
    return stringEncriptada;
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    
    return stringEncriptada;
}

function mostrarTexto(){ //Muestra la caja de texto y oculta imagen, mensaje e instrucciones
    document.getElementById("img-search").style.display = "none";
    document.getElementById("mesage").style.display = "none";
    document.getElementById("instr").style.display = "none";

    document.getElementById("text-box").style.display = "block";
    document.getElementById("copiar").style.display = "block";
}