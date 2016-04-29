//Escribe aquí tu código
function minimo_personas(cantidad_personas) {
	if (cantidad_personas < 20) {
		var cantidad_personas = 20;
	}
	return cantidad_personas;
}

function costo_bus(tipo_bus, km) {
	var costo_kilometro = 0;
	switch(tipo_bus) {
	    case "A":
	        costo_kilometro = parseFloat(2.0 * km);
	        break;
	    case "B":
	        costo_kilometro = parseFloat(2.5 * km);
	        break;
	    case "C":
	        costo_kilometro = parseFloat(3.0 * km);
	        break;
	    default:
	    	alert("ELIGE ENTRE A - B - C");
	    	break;
	}
	return costo_kilometro;
}


function calcularCosto(km, cantidad_personas, tipo_bus) {

    cantidad_personas = minimo_personas(cantidad_personas);
    var costo_persona = costo_bus(tipo_bus, km);
    var costo_total = costo_persona*cantidad_personas;
	return [costo_persona, costo_total];
		
}
// entrada del usuario
var km = prompt("Cuantos kilometros recorrerán?"); 
var cantidad_personas = prompt("Cuantas personas irán en el bus?");
var tipo_bus = prompt("Elige tu tipo de bus");

// logica - proceso 

var total = calcularCosto(km, cantidad_personas, tipo_bus);
// output

alert("El costo por persona será " + total[0] + ". En total será " + total[1]);


