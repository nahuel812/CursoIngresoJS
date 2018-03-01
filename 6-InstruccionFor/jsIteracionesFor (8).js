function Mostrar()
{
    var numero;
    var contador=0;

    numero=prompt("Ingrese un numero.");

    for(var i=1;i<=numero;i++)
    {
        if(numero%i==0)
        {
            contador++;
        }
    }

    if(contador==2)
    {
        alert(numero+"Es primo");
    }
    else
    {
        alert(numero+"No es primo");
    }





}//FIN DE LA FUNCIÓN