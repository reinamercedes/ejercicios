//Escribe aquí tú código

var cantidad = parseInt(prompt("Ingresa la cantidad de números que se evaluará:"));

for(var i = 0; i < cantidad; i++){
	var num = parseInt(prompt("Ingresa el número " + (i+1)));
	if(num > 0){
		document.write("El número " + num + " es mayor a cero" + "<br/>");
	} else if(num < 0){
		document.write("El número " + num + " es menor a cero" + "<br/>");
	} else {
		document.write("El número " + num + " es igual a cero."  + "<br/>")
	}
}