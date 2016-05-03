//Escribe aquí tú código

var num = parseInt(prompt("Ingresa un número para saber su tabla de multiplicar hasta el 12 :)"));

for(i = 0; i <= 12; i++){
        var multiplicacion = 0;
        multiplicacion = i * num;
        document.write( num + " x " + i + " = " + multiplicacion + "<br/>");
}