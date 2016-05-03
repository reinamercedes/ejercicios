//Escribe aquí tú código

for(h = 1; h < 500; h++){
	for(a = 1; a < 500; a ++){
		for(b = 1; b < 500; b++){
			if(h*h == (a*a) + (b*b)){
				document.write("Posible combinación para formar un triángulo rectángulo con números enteros: " + "<br/>" + "(" + h + " al cuadrado)" + " = (" + a + " al cuadrado)" + " + (" + b + " al cuadrado.)" + "<br/>");
			}
		}
	}
}