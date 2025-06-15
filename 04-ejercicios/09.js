let array = [{
  name: "Nicolas",
}, {
  name: "Felipe",
}, {
  name: "Chanchito",
}];

function toPairs(arr){
  const resultado = arr.map((nombre, index) =>{
    return{
      id: index + 1,
      name: nombre
    }
  })
  return resultado
};

let resultado = toPairs(array)
console.log(resultado);
