function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	respuesta = prompt("Desea ingresar un numero? si/no.");

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
			while (isNaN(numero)) 			//con esto nos aseguramos que no estamos ingresando un valo NaN
				{
					numero=prompt("Ingrese numero nuevamente porque no ingerso un numero correspondiente.");
					numero=parseInt(numero);
				}

			if(numero > 0)
			{
				positivo=numero+positivo
			}
			else if(numero != 0)
			{
				negativo=numero*negativo
			}

		respuesta=prompt("Desea ingresar otro numero? si/no");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN