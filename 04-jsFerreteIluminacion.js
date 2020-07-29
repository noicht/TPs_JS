/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio ()
{
	let precioLamparitas = 35;
	let cantLamparitas;
	let marcaLamparitas;
	let descuento;
	let diferenciaDesc;
	let precioDescuento;
	let impuestoIIBB;
	let totalIIBB;	



	cantLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
	marcaLamparitas = document.getElementById("Marca").value;


	if (cantLamparitas >= 6)
	{
		descuento = 0.50;


	}

	else 
	{
		if (cantLamparitas == 5)
		{
			if (marcaLamparitas == "ArgentinaLuz")
			{
				 descuento = 0.60;
			}
			else
			{
				descuento = 0.70;
			}
		}

		else
		{
			if (cantLamparitas == 4)
			{
				if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
				{

					descuento = 0.75;
				}
				else 
				{
					descuento = 0.80;
				}
			}
			else
			{
				if(cantLamparitas == 3)
				{
					if(marcaLamparitas == "ArgentinaLuz")
					{
						descuento = 0.85;
					}

					else if (marcaLamparitas == "FelipeLamparas") 
					{
						descuento = 0.90;
					}

					else 
					{
						descuento = 0.95;


					}
				}
				else 
				{
					if(cantLamparitas < 3)
					{
						descuento = 1;
					} 
				}
			}
		}

	}


	precioDescuento= parseFloat((cantLamparitas * precioLamparitas)* descuento).toFixed(2); 	
	

	parseFloat(document.getElementById("txtIdprecioDescuento").value = precioDescuento);




if (precioDescuento > 120)
{
	impuestoIIBB = precioDescuento * 1.10;
	totalIIBB = impuestoIIBB - precioDescuento;

	alert("USTED PAGO $" + impuestoIIBB.toFixed(2) + " SIENDO $" + totalIIBB.toFixed(2) + " el impuesto que pago");
}

}

