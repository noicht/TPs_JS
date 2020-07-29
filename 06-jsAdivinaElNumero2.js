/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

	contadorIntentos = 0;

	numeroSecreto = Math.floor(Math.random() * 100) + 1; // Defino numero secreto entre 1 y 100

	 
	alert("Ya puede ingresar el numero");
	 
	

}

function verificar()
{
	let ingresarNumero = parseInt(document.getElementById("txtIdNumero").value);
	
	contadorIntentos = contadorIntentos + 1;

	document.getElementById("txtIdIntentos").value = contadorIntentos; // Display de intentos en el submitbox

	if (ingresarNumero == numeroSecreto)
	{
		alert("Usted gano en " + contadorIntentos + " intentos!");

	}
	else if (ingresarNumero > numeroSecreto) 
	{
			alert("te pasaste");


	}
	else if(ingresarNumero < numeroSecreto)
	{
			alert("falta");

		
	}

	if (contadorIntentos == 1 && ingresarNumero == numeroSecreto) 
	{
		alert("Usted es Psíquico");
	}

	else if (contadorIntentos == 2 && ingresarNumero == numeroSecreto) 
	{
		alert("Excelente percepción");
	}	
	
	else if (contadorIntentos == 3 && ingresarNumero == numeroSecreto)
	{
		alert("Esto es suerte");
	}

	else if (contadorIntentos == 4 && ingresarNumero == numeroSecreto) 
	{
		alert("Excelente tecnica");
	}

	else if(contadorIntentos == 5 && ingresarNumero == numeroSecreto)
	{
		alert("Usted esta en la media");
	}

	else if (contadorIntentos >= 6 && contadorIntentos <= 10 && ingresarNumero == numeroSecreto) 
	{
		alert("Falta tecnica");
	}

	else 
	{
		if(contadorIntentos > 10 && ingresarNumero == numeroSecreto)
		{

		alert("afortunado en el amor!");
		
		}

	}


}