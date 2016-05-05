//Escribe aquí tú código

var ahorro_anual = 0;

for(var i = 0; i < 12; i++){
	var mes = parseInt(prompt("Cantidad de ahorro en el mes " + (i+1) + "/2015:"));
	document.write("La cantidad ahorrada en el mes " + (i+1) + "/2015 es: " + mes + "<br/>");
	ahorro_anual += mes;
}
document.write("El ahorro anual de todo el año 2015 fue: " + ahorro_anual);