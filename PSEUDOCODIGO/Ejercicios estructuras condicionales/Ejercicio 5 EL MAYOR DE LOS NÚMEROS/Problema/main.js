//Escribe aquí tu código
var x1 = prompt("Escribe el primer número: ");
var x2 = prompt("Escribe el segundo número: ");
var x3 = prompt("Escribe el tercer número: ");

function numero_mayor() {
	if (x1 > x2 && x1 > x3) {
		alert(x1 + " es mayor.");
	} else if (x2 > x1 && x2 > x3) {
		alert(x2 + " es mayor.");
	} else if (x3 > x1 && x3 > x2) {
		alert(x3 + " es mayor.");
	} else if (x1 === x2 && x2 === x3 && x1 === x3) {
		alert("Los tres números son iguales");
	}
}
numero_mayor()