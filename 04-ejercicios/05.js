let array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor(arr){
  let menor = arr[0];//arr[0] => 2 empezamos suponiendo que es el menor
  let mayor = arr[0];//arr[0] => 2 empezamos suponiendo que es el mayor
  for(numero of arr){
    //Si el "menor" es menor que el "numero", se mantiene el valor de menor en la variable
    //En caso de que no, el valor de el "numero" iterado se guarda en la variable "menor"
    menor = menor < numero ? menor : numero;
    //Si el "mayor" es mayor que el "numero", se mantiene el valor de mayor en la variable
    //En caso de que no, el valor de el "numero" iterado se guarda en la variable "mayor"
    mayor = mayor > numero ? mayor : numero;
  }
  //Cuando se termine de iterar todos los elementos de arr
  //retornara la variable con el valor "menor" y "mayor" del arr
  return [menor, mayor];
}
let numeros = getMenorMayor(array)
console.log(numeros);


