const precioTicket = 200;

function resumir() {
var cantidadTicket= parseInt(document.getElementById("inputCantidad").value);
var categoria= parseInt(document.getElementById("inputCategoria").value);

var precio = cantidadTicket*(precioTicket - precioTicket*(categoria/100));

document.getElementById("resumen").value= "Total a pagar= $"+ precio
    
}
