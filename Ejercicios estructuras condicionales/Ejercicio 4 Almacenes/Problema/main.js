//Escribe aquí tu código

//entrada del usuario 

var traje = prompt("Tenemos una promoción para ti!!! Ingresa el precio de tu traje a comprar.");

// logica - proceso 

function precio_final() {
	if (traje >= 2500.00){
		alert("El precio total a pagar será de " + traje * 0.85);
	} else if (traje < 2500.00){
		alert("El precio total a pagar será de " + traje * 0.92);
	}
}

// output

precio_final()