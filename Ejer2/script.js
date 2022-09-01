/*2- Realizar un algoritmo que permita ingresar el día de la semana, la fecha y año, la temperatura máxima y la temperatura mínima del día.
  
  
  Calcular la temperatura promedio y mostrar la información con el formato del siguiente ejemplo
  
    Ejemplo:
  
  20 de abril de 2020.
  TEMPERATURAS
  Temperatura MAXIMA: 99,9
  Temperatura MINIMA: 99.9
  Temperatura PROMEDIO: 99.9
  
  */

function temperaturaPromedio(dia, mes, año, maxTemp, minTemp) {
  let promedio = 0;
  promedio = (maxTemp + minTemp) / 2;
  console.log(dia + " de " + mes + " de " + año);
  console.log("Temp max: ", maxTemp);
  console.log("Temp min: ", minTemp);
  console.log("Temp promedio: ", promedio);
}

temperaturaPromedio(30, "Agosto", 2022, 10, 5);
