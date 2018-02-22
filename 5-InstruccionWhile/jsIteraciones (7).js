function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	respuesta = prompt("Desea ingresar un numero? si/no.");

	while(respuesta == "si")
	{
		contador ++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

			while(isNaN(numero)) //con esto nos aseguramos que no estamos ingresando un valor NaN
			{
				numero=prompt("Ingrese un numero");
				numero=parseInt(numero);
			}
		
			acumulador=numero+acumulador;
			respuesta=prompt("Desea ingresar un numero? si/no.")

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN