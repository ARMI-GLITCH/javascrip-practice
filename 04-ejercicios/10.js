let longitud = 7;
function crearArray(n){
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

let resultado = crearArray(longitud)
console.log(resultado);
