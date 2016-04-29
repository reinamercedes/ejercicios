//Escribe aquí tu código
var cantidad_persona = prompt("Cuantas personas atenderán el evento?");

function costo_por_cantidad_personas () {
	if (cantidad_persona < 200) {
		alert("El costo por persona será de 95.00 dólares");
	} else if (cantidad_persona > 200 && cantidad_persona <= 300) {
		alert("El costo por persona será de 85.00 dólares");
	} else {
		alert("El costo por persona será de 75.00 dólares");
	}
}

costo_por_cantidad_personas()