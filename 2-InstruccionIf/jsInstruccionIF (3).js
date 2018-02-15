function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if(edad > 17)
{
    alert("Usted es mayor de edad")
}

//el else va acompañado del if, para que si el if no se cumple haga el else.
//puedo aclarar o no que sea menor de edad, porque si el if no se cumplue directamente pasa al else.
else(edad < 18)
{
    alert("Usted es menor de edad")
}


}//FIN DE LA FUNCIÓN