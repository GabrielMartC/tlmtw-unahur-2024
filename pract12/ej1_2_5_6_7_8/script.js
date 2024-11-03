//ej1
alert("¡Hola, mundo!");

//ej2
let miNombre = "Gabriel";
let miEdad = 28;
let eresEstudiante = true;

console.log("Nombre: "+miEdad+", "+"Edad: "+ miEdad+ ", "+"Es estudiante?: "+eresEstudiante);

//ej5
// let nuevoTexto = document.getElementById("miParrafo");
// nuevoTexto.innerHTML = "Texto cambiado con JavaScript";
document.getElementById("miParrafo").innerHTML = "Texto cambiado con JavaScript";

//ej6
function sumarNros(nro1, nro2){
    return nro1 + nro2;
}

console.log(sumarNros(50,76))

//ej8
let mensajeAlert = document.getElementById("miBoton")
mensajeAlert.addEventListener("click",function(){
    alert("Botón presionado :)");
})