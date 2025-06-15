// El array o arreglo que esta abajo funciona para guardar distintos datos relacionados
// Es parecido a el objeto, pero se maneja de distinta forma (por posiciones, no por nombre de propiedad)

let animales = ["Caballo", "Perro"];//Se declara un array con dos elementos
/*
 Esta es una forma de consultar y imprimir
 el primer elemento del array: "Caballo", ya que el indice de las posiciones en un array
 comienza desde 0,1,2,3 y etc.
*/ console.log(animales[0]);

/*
 Esta es la forma de agregar un nuevo elemento en la posición 2 del array, Índices: 0 -> "Caballo", 1 -> "Perro"
 entonces estaria luego el elemento "Perro"
*/ animales[2] = 'dragon';

// Imprime la cantidad total de los elementos en el array, en este caso: 3 elementos
console.log(animales.length);


