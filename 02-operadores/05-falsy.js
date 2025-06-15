// short circuit
/*
Verifica si un valor es truthy con el operador OR
en caso de que encuentre un valor truthy, corta la evaluacion
porque ya encontro lo que neceisto(truthy)
*/
let nombre = "Jose";
let username = nombre || "Anonimo"

/*
Verifica si un valor es falsy con el operador AND
en caso de que encuentre un valor falsy, corta la evaluacion
porque ya encontro lo que neceisto(falsy)
*/
function fn1(){
  console.log("Soy funcion 1");
  return true
}

function fn2(){
  console.log("Soy funcion 2");
  return true
}

let x = fn1() && fn2();