//3- Rellena un array con 7 numeros y muestra por consola cuantos numeros son menores a 3

//Extra
//- Rellena el array usando valores aleatorios (con math random)

const array = [];

for (let i = 0; i < 7; i++) {
  const value = Math.floor(Math.random() * 10);
  array.push(value);
}

console.log(array);

let contador = 0;
array.forEach((el) => {
  if (el < 3) {
    contador++;
  }
});

console.log(contador);
