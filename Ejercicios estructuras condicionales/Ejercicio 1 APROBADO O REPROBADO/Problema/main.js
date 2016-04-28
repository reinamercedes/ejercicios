//Escribe aquí tu código

//entrada del usuario

var nota1 = prompt("Ingresa nota 1.");
var nota2 = prompt("Ingresa nota 2.");
var nota3 = prompt("Ingresa nota 3.");

//logica - proceso

function nota_1() {
	if (nota1 >= 6 && nota1 <= 10){
		return "La nota " + nota1 + " esta aprobada :) ";
	} else if (nota1 <= 6){
		return "La nota " + nota1 + " esta reprobada :( ";
	} else if (nota1 > 10){
		return "La nota ingresada no es valida, ingresa un valor menor a 10. ";
	}
}

function nota_2() {
	if (nota2 >= 6 && nota2 <= 10){
		return "La nota " + nota2 + " esta aprobada :) ";
	} else if (nota2 <= 6){
		return "La nota " + nota2 + " esta reprobada :( ";
	} else if (nota2 > 10){
		return "La nota ingresada no es valida, ingresa un valor menor a 10. ";
	}
}

function nota_3() {
	if (nota3 >= 6 && nota3 <= 10){
		return "La nota " + nota3 + " esta aprobada :) ";
	} else if (nota3 <= 6){
		return "La nota " + nota3 + " esta reprobada :( ";
	} else if (nota3 > 10){
		return "La nota ingresada no es valida, ingresa un valor menor a 10. ";
	}
}
//output

var nota_final = [nota_1(), nota_2(), nota_3()];

alert(nota_final);