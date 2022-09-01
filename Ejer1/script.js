//1- Crea una funcion llamada "sumar" y utiliza el objeto arguments que son capaces de utilizar las funciones (salvo las arrow function)
// para sumar una cantidad indeterminada de valores numericos pasados por argumento. Devolver el total de la suma

// Si no se pasan argumentos devolver "No hay elementos para sumar"

// Extras

// - Evita que se ingresen valores no numericos. Si se ingresa un valor no numerico, evita que se haga la suma y
// devuelve el siguiente mensaje: "Se a ingresado un valor que no es un numero, chequea los valores ingresados"

function sumar() {
  let result = 0;

  if (arguments.length === 0) {
    console.log("No hay elementos para sumar");
    return;
  }

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      console.log("Se ha ingresado un valor no numerico");
      return;
    }
    result += arguments[i];
  }

  console.log("La suma es:", result);
}

sumar("hola");
