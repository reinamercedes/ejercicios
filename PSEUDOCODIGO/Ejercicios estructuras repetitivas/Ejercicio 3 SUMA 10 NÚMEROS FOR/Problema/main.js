//Escribe aquí tú código

var suma = 0;

for(i = 1; i <= 10; i++) {
    var num = Number(prompt("Ingresa tu número " + i));
	suma = suma + num;
	document.write("El número que escribí fue " + num + "<br/>");
	document.write("La suma es " + suma + "<br/>");
}