/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function CentigradosFahrenheit () 
{
	var temperatura;
	var temperaturaFahrenheit;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

	temperaturaFahrenheit = (temperatura * 9/5) + 32;

	alert("Temperatura en Fahrenheit: " + temperaturaFahrenheit + "°F"); 
}

function FahrenheitCentigrados () 
{
	var temperatura;
	var temperaturaCelsius;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

	temperaturaCelsius = (temperatura - 32) * 5/9;
	
	alert("Temperatura en Celsius " + temperaturaCelsius.toFixed(2) + "°C");
}
