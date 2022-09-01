/*
 4- Ingresar una serie indeterminada de números. Cuando se ingrese cero (0), se detendrá el
ingreso de números y se deberá informar el promedio de todos los números ingresados y cual
fue el mayor valor de la serie.
 */

const array = [];
let flag = true;
let maxValue = 0;
let total = 0;
let promedio = 0;

while (flag) {
  const value = Math.floor(Math.random() * 100);
  array.push(value);

  if (value === 0) {
    flag = false;
  }
}

maxValue = array[0];

array.forEach((el) => {
  total += el;
  if (el > maxValue) {
    maxValue = el;
  }
});

promedio = total / array.length;

console.log(array);
console.log("El promedio de la suma de todos los numeros es: ", promedio);
console.log("El valor mas grande es: ", maxValue);
