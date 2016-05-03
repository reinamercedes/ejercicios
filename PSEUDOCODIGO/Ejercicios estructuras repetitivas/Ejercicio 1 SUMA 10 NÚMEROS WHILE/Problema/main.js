//Escribe aquí tú código

// ingreso del usuario 



// logica - proceso

var suma = 0;
var i = 0;

while(i < 10){
	var num = Number(prompt("Ingresa tu número " + (i+1)));
	suma = suma + num;
	i++;
	document.write("El número que escribí fue " + num + "<br/>");
	document.write("La suma es " + suma + "<br/>");
}
// output 

