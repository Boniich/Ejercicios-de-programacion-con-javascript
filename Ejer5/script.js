/*
5- Realizar un algoritmo que permita ingresar la cantidad de un producto comprado y el precio
unitario de éste. Se desea conocer el monto a abonar teniendo en cuenta que si la compra es
superior a $450 se realiza un descuento del 12%*

//Extras

// Hacer que el valor del descuento sea dinamico
// Modificar el valor del monto necesario para que se haga el descuento

 */

function hacerDescuento(cantidad, precio, porcetanjeDescuento, monto = 450) {
  let total = 0;

  total = cantidad * precio;

  if (total > monto) {
    let descuento = 0;

    descuento = (total * porcetanjeDescuento) / 100;
    total -= descuento;
    console.log(total);
  }
}

hacerDescuento(5, 100, 20);
