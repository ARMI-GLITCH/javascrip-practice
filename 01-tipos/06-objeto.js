// El objeto que esta abajo funciona para guardar distintos datos relacionados
let personaje = {
  nombre: "Jinx", //Propiedad "nombre" con el valor "Jinx"
  anime: "Arcane", //Propiedad "anime" con el valor "Arcane"
  edad: 18,  //Propiedad "edad" con el valor 18
}

//Aqui se imprime el objeto por completo
console.log(personaje);
//Aqui se imprime y se consulta un valor especifico del objeto con notacion de punto
console.log(personaje.nombre);//Resultado: Jinx
//Aqui se imprime y se consulta un valor especifico del objeto con notacion de corchetes
console.log(personaje['anime']);//Resultado: Arcane

// Aquí se le asigna una nueva propiedad 'edad' al objeto 'personaje' con el valor 20
personaje.edad = 20;
// Aqui se elimina la propiedad del objeto
delete personaje.edad

console.log(personaje);

