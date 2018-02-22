function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		contador ++
		numero = prompt("ingrese otro numero")
		numero = parseInt(numero)//si ingreso una letra va a valer NaN
		acumulador=acumulador+numero
		//o tambien para acumular acumular+=numero;
		//para acumular a una variable le sumo otra y se acumula.
		

	}
	
	/*
	while(isNaN(NaN))
		{
			numero=prompt()
			numero=parseInt(numero)
		}
	*/

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

	

}//FIN DE LA FUNCIÓN