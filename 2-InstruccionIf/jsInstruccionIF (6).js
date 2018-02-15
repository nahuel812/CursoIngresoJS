function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if(edad >= 18)
{
    alert("Usted es mayor de edad")
}

else
{
    if(edad > 13)
    {
        alert("Usted es un adolescente")
    }

    //como ya no hay mas posibilidades mas que menores que trece, toma esos valores y manda la alerta.
    
    else
    {
        alert("Usted es un niño")
    }
}

}//FIN DE LA FUNCIÓN