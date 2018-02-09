/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1 = document.getElementById("numeroUno").value;
    var numero2 = document.getElementById("numeroDos").value;
    var resultado;

//nan es igual a:  not a number 

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
     
    resultado = numero1 + numero2;

    alert("La suma es " + resultado);

}

