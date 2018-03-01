function Mostrar()
{
    var numero;
    var cantidadDivisores=0;


    numero=prompt("Ingrese un numero.")

    for(i=1;i<=numero;i++)
    {
        
        if(numero%i == 0)
        {
            cantidadDivisores++;
            console.log("Numero divisor "+i);
        }

        console.log("Cantidad de divisores "+cantidadDivisores)
    }




}//FIN DE LA FUNCIÓN