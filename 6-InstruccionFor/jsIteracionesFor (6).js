function Mostrar()
{
    var numero;
    var contadorPares=0;


    numero=prompt("Ingrese un numero.")

    for(var i=1;i<numero;i++)
    {
        if(i%2 == 0 && numero!=0)
        {
            contadorPares++;
            console.log(contadorPares);
        }

    }




}//FIN DE LA FUNCIÓN