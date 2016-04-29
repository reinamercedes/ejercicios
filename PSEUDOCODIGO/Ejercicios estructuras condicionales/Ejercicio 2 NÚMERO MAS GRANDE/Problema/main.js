//Escribe aquí tu código

//entrada del usuario

var num1 = prompt("Ingresa primer número");
var num2 = prompt("Ingresa segundo número");

//logica - proceso 

function numero_mayor() {
	if (num1 > num2){
		alert("El número " + num1 + " es mayor.");
	} else if (num2 > num1){
		alert("El número " + num2 + " es mayor.");
	}
}

//output

numero_mayor()