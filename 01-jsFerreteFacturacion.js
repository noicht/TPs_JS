/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3;

	num1 = document.getElementById("txtIdPrecioUno").value;
	num2 = document.getElementById("txtIdPrecioDos").value;
	num3 = document.getElementById("txtIdPrecioTres").value;

	alert("Precio: " + (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)));
	
}
function Promedio () 
{
	var num1;
	var num2;
	var num3;

	num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	alert("Promedio: " + ((num1+num2+num3)/3));


	
}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3;
	var iva;

	num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	iva = parseFloat((num1+num2+num3) * 0.21);

	alert("Precio final: " + (num1 + num2 + num3 + iva))







	
}