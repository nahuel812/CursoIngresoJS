function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = parseInt(Math.random()*(10-1)+1);

	console.log(nota);
	
	if(nota >= 9)
	{
		alert("Excelente")
	}
	else if(nota >= 6)
	{
		alert("Muy bien")
	}
	else if(nota >= 4)
	{
		alert("Bien")
	}
	else if(nota >= 2)
	{
		alert("Mal")
	}
	else
	{
		alert("Desastroso")
	}
/*
	if(nota >= 9)
	{
		alert("Excelente")
	}
	else
	{
		if(nota >= 6)
		{
			alert("Muy bien")
		}
		else
		{
			if(nota >= 4)
			{
				alert("Bien")
			}
			else
			{
				if(nota >= 2)
				{
					alert("Mal")
				}
				else
				{
					alert("Desastroso")
				}
			}
		}
	}

	*/
}//FIN DE LA FUNCIÓN