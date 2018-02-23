function Mostrar()
{
	var numero;
	var contador=0;
	var negativos=0; //le doy un valor a las variables.
	var acumuladorNegativos=0;
	var positivos=0;
	var acumuladorPositivos=0;
	var contadorPares=0;
	var contadorCeros=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	respuesta= prompt("Desea ingresar un numero?");

	while(respuesta!="no")
	{	
		contador ++;
		numero=prompt("Ingrese un numero");
		numero= parseInt(numero);
			while(isNaN(numero))
			{
				numero=prompt("Ingrese solamente un numero.");
				numero=parseInt(numero);
			}
		if(numero%2==0 && numero != 0)
		{
			contadorPares ++;
		}

		//suma de negativos
		if(numero<0)
		{
			negativos=negativos+numero;
			acumuladorNegativos ++;
		}
		//suma de positivos
		else 
		{
			if(numero>0)
			{
			positivos=positivos+numero;
			acumuladorPositivos ++;
			}
			else
			{
				contadorCeros ++;
			}
		}



		respuesta= prompt("ingresar otro numero?");

	}//cierra el while(respuesta!="no")
	promedioNegativos=acumuladorNegativos / negativos;
	promedioPositivos=acumuladorPositivos / positivos;

	diferencia= acumuladorPositivos-acumuladorNegativos

	document.write("La suma de los negativos es " + negativos);
	
	document.write("La suma de los positivos es " +positivos);

	document.write("El promedio de los negativos es " +promedioNegativos)

	document.write("El promedio de los positivos es " +promedioPositivos)

	document.write("La diferencia es de "+diferencia)




}//FIN DE LA FUNCIÓN