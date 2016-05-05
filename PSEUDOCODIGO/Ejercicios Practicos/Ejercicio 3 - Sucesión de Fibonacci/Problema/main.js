//Escribe aquí tú código

var cantidad_elementos = parseInt(prompt("¿Cuántos elementos de la secuencia de Fibonacci deseas conocer?"));
var valor1 = 0;
var valor2 = 1;

for(var i = 0; i < cantidad_elementos; i++){
	var tmp = valor2;
	valor2 = valor1 + valor2;
	valor1 = tmp;
	document.write(valor2 + "<br/>");
}

