//Escribe aquí tu código

//entrada del usuario

var num1 = prompt("Ingresa primer número");
var num2 = prompt("Ingresa segundo número");

// logica - proceso

function primer_numero() {
	if (num1 >= 1){
		return num1 + " es positivo. ";
	} else if (num1 < 1){
		return num1 + " es negativo. ";
	}
}

function segundo_numero() {
	if (num2 >= 1){
		return num2 + " es positivo. ";
	} else if (num2 < 1){
		return num2 + " es negativo. ";
	}
}
//output

var resultado_final = [primer_numero(), segundo_numero()];

alert(resultado_final);
