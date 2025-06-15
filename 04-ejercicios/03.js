function getbyIdx(arr, idx){
  //En la primera condicion verifica que el indice idx no sea menor a 0
  //En la segunda condicion verifica que el indice no este fuera del rango de indices validos
  //O simplemente para averiguar si el elemnto que pide el idx existe.
  if(idx < 0 || arr.length <= idx){
    return "Elemento no existe";
  } 
  //En caso de que el if no cumpla ninguna de sus 2 condiciones, retorna el elemento.
  return arr[idx];
}

let resultado = getbyIdx([1, 2], 0)
console.log(resultado);
