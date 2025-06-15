// Definimos una función llamada suma que recibe dos parámetros: a y b
// Las variables a y b son parámetros de para la función.
function suma(a, b) {
  // 'arguments' es un objeto que contiene todos los argumentos que se declararon en la función
  // En este caso, imprimirá cualquier tipo de valor en la consola y retorna la suma de estas variables
  console.log(arguments);
  return a + b;
}

// Cuando se llama a la función, se les asignan los valores, que se convertiran en argumentos.
// en este caso: suma(5, 6) asigna a = 5 y b = 6
let resultado = suma(5, 6);
console.log(resultado);

