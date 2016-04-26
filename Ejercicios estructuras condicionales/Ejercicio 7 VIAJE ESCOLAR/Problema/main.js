//Escribe aquí tu código
var cantidad_alumnos = prompt("Cuantos alumnos viajarán?");

function costo_viaje() {
	if(cantidad_alumnos >= 100) {
		var pago_total_viaje = cantidad_alumnos * 65;
		alert("El pago total será " + pago_total_viaje + " y el costo por alumno será 65.00 dólares");
	} else if (cantidad_alumnos >= 50 && cantidad_alumnos <= 99) {
		var pago_total_viaje = cantidad_alumnos * 70;
		alert("El pago total será " + pago_total_viaje + " y el costo por alumno será 70.00 dólares");
	} else if (cantidad_alumnos >= 30 && cantidad_alumnos <= 49) {
		var pago_total_viaje = cantidad_alumnos * 95;
		alert("El pago total será " + pago_total_viaje + " y el costo por alumno será 95.00 dólares");
	} else if (cantidad_alumnos < 30) {
		alert("El pago total será de 4000 dólares por la renta del bus.");
	}
}

costo_viaje()