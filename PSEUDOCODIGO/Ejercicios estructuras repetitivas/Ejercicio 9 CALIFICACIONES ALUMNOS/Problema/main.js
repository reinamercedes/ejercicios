//Escribe aquí tú código

var cantidad_alumnos = 10;
var nota_maxima = 21;
var suma = 0;
var promedio = 0;

for(i = 0; i < cantidad_alumnos; i++){
	var nota = parseInt(prompt("Ingresa la nota del alumno " + (i+1)));
	suma += nota;
	promedio = suma/cantidad_alumnos;
           if(nota < nota_maxima){
           	nota_maxima = nota;
           }
}
document.write("La nota minima es: " + nota_maxima + "<br/>");
document.write("El promedio de las notas es: " + promedio);

