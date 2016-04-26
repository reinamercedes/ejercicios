//Escribe aquí tu código
var cantidad_personas = prompt("Cuantas personas irán en el bus?");
var tipo_bus = prompt("Elige tu tipo de bus");


function calcularCosto(tipo_bus) {
	var costo_kilometro;
	var km = prompt("Cuantos kilometros recorrerán?");
	switch(tipo_bus) {
	    case "A":
	        costo_kilometro = 2.0 * km;
	        break;
	    case "B":
	        costo_kilometro = 2.5 * km;
	        break;
	    case "C":
	        costo_kilometro = 3.0 * km;
	        break;
	    default:
	    	alert("ELIGE ENTRE A - B - C");
	    	break;
	}
	return costo_kilometro;
}




