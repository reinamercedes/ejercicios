//Escribe aquí tú código

var cantidad_personas = prompt("Ingresa cuantas personas son:");
var suma = 0;

for(var i = 0; i < cantidad_personas; i++){
	var condicion = true;
	var estatura;
	do{
     		estatura = parseFloat(prompt("Ingrese su estatura:"));
		if(!isNaN(estatura)){
			condicion = false;
		}
	} while(condicion);
	suma += estatura;
}

document.write("El promedio es: " + suma/cantidad_personas);


