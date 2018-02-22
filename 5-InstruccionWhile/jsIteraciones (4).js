function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero < 0 || numero > 9)
	{
		console.log("numero incorrecto")
		
		numero=prompt("ingrese un numero ente 0 y 10.")
	}


	document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN