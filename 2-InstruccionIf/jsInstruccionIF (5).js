function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

//el || es igual al "o", en este caso evitamos las edades que estan aclaradas.

if(edad < 13 || edad > 17)
{
    alert("Usted no es un adolescente")
}


}//FIN DE LA FUNCIÓN