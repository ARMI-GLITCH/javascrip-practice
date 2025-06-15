function cualEsMayor(a, b){
  //Hacemos un ternario que verifica si un numero es mayor que otro
  return (a > b) ? a : b;// en caso de que a sea mayor, retorna a, si no retorna b
}
let mayor = cualEsMayor(10, 15)
console.log(mayor);

