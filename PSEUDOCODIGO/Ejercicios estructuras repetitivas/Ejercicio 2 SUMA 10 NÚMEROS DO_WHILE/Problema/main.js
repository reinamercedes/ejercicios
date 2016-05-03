//Escribe aquí tú código

var suma = 0;
var i = 0;

do {
	var num = Number(prompt("Ingresa tu número " + (i+1)));
	suma = suma + num;
	i++;
} while(i < 10){
	document.write("El último número que escribí fue " + num + "<br/>");
	document.write("La suma es " + suma + "<br/>");
}
	
