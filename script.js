var textArea = document.getElementById("Texto");
var textArea2 = document.getElementById("Resultado");
const llaves = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

function sanitizar() {
    let textarea = textArea.value;
    let validar = textarea.match(/^[a-z]*$/);
    if (!validar || validar === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
};
function encriptar(clave, tipo) {
    clave = clave.toLowerCase();
    if (tipo == 0) {
        for (let i = 0; i < llaves.length; i++) {
            if (clave.includes(llaves[i][0])) {
                clave = clave.replaceAll(llaves[i][0], llaves[i][1]);
            }
        }
    }
    else if(tipo==1){
        for (let i = llaves.length-1; i >-1 ; i--) {
            if (clave.includes(llaves[i][1])) {
                clave = clave.replaceAll(llaves[i][1], llaves[i][0]);
            }
        }
    }
    return clave;
};
function btnEncriptar(){
    if(!sanitizar()) {
        let Encriptado = encriptar(textArea.value,0);
        textArea2.value = Encriptado;
        textArea.value = "";
    }
};
function btnDesEncriptar(){
    let Encriptado = encriptar(textArea.value,1);
    textArea2.value = Encriptado;
    textArea.value = "";
};
function copiaar(){
    textArea2.select();
    navigator.clipboard.writeText(textArea2.value)
    textArea2.value = "";
};