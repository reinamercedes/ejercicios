//Escribe aquí tú código

var num = parseInt(prompt("Ingresa el número base."));
var potencia = parseInt(prompt("¿A qué número deseas elevar " + num + " ?"));

for(i = 0; i <= potencia; i++){
	var elevar_potencia = 0;
	elevar_potencia = num * i;
}

document.write("El resultado es:  " + elevar_potencia + " (en serio! si quieres hazlo con calculadora)");