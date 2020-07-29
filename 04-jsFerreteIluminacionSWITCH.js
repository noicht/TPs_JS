function CalcularPrecio() 
{
	let precioLamparitas = 35;
	let cantLamparitas;
	let marcaLamparitas;
	let descuento;
	let diferenciaDesc;
	let precioDescuento;
	let impuestoIIBB;
	let totalIIBB;

	cantLamparitas = parseInt(document.getElementById("txtCantidad").value);
	marcaLamparitas = document.getElementById("Marca").value;

	switch(cantLamparitas)
	{
		case cantLamparitas >= 6:
			descuento = 0.50;
			break;

		case cantLamparitas == 5:
			if (marcaLamparitas == "ArgentinaLuz")
			{
				descuento = 0.60;

			}
			else 
			{
				descuento = 0.70;
			}
			break;

		case cantLamparitas == 4:
			if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
			{
				descuento = 0.75
			}

			else
			{
				descuento = 0.80
			}

		case cantLamparitas == 3:

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
				descuento = 0.95
			}


		default:
			if (cantLamparitas < 3)
			{
				descuento = 1;
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


}