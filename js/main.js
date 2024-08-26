function adivinarFechas() {
const fecha = 1910

let intentos = 0;
let adivinado = false;

while (adivinado === false){
    const intento = parseInt(prompt("¿En que año se independizó Argentina?"));
    intentos++;
    
    if (intento === fecha) {
        alert("Felicidades, ¡la pegaste!");
        adivinado = true;
    } else if (intento < fecha) {
        alert("Fue unos años más tarde, seguí probando");
    } else if (intento > fecha) {
        alert("Fue unos años antes, seguí probando")
    } else {
        alert("Probá solo con Números.")
    }
}
}

adivinarFechas();