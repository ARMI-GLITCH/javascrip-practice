function usuario(nombre){//esta funcion sirve para ponerle nombre a la propiedad de un objeto
  this.name =  nombre;
}

console.log(usuario.name);//nombre de la funcion
console.log(usuario.length);//la cantidad de parametros que espera la funcion

const u = usuario//imprime la funcion
let user = new usuario("Armando")//hace un objeto en base al valor que le demos al parametro

console.log(user);

function of(Us, Arg){//Esta funcion crea un objeto con un argumento
  return new Us(Arg);
}

let result = of(usuario, "Leonardo")//usa la funcion "usuario" para darle la propiedad al nuevo objeto que se creara con "of"
console.log(result);

function returned(){
  return function(){//crea una funcion anonima
    console.log("Hola mundo");
  }
}

let saludo = returned()//Saludo se convierte en una funcion
saludo()//llamas para ejecutar la funcio 

