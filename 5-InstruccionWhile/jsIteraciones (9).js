function Mostrar()
{
	var numero;
	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';
	respuesta= prompt("Desea ingresar un numero?")

	while(respuesta!='no')
	{
		contador ++;
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero)
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero
			}
		}

		respuesta=prompt("para salir, ingrese no");
	
	}
	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN