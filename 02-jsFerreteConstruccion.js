/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var result;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	result = ((largo + ancho)*2)* 3; 

	alert("Cantidad de alambre a comprar: " + result + " mts");

}
function Circulo () 
{
	var radio;
	var result;

	radio = parseFloat(document.getElementById("txtIdRadio").value);
	
	result = (Math.PI * (radio * radio)) * 3;

	alert("Cantidad de alambre a comprar: " + result.toFixed(2) + " mts")

}
function Materiales () 
{
	var largo;
	var ancho;
	var bolsaCemento;
	var bolsaCal;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	bolsaCemento = (largo * ancho) * 2;
	bolsaCal = (largo * ancho) * 3;

	alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal");


	
}