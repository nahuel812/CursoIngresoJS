function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

//con el !="Soltero" estoy negando eso, entonces cuando no sea soltero va a funcionar.

if(edad < 18 && estadoCivil != "Soltero")
{
    alert("Es muy pequeño para NO se soltero")
}
	


}//FIN DE LA FUNCIÓN