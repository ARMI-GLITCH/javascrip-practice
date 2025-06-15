// AND, OR, NOT
//AND &&
console.log(true && false);
console.log(true && true);

let mayor = true;
let suscrito = true;
console.log("operador and",  mayor && suscrito);//Devuelve false si hay minimo un valor false 
console.log("operador or", mayor || suscrito);//Devuelve true si hay minimo un valor true
console.log("operador not", !mayor);//Devuelve y cambia el valor, si es true lo cambia a false y viceversa
let solocatalogoinfantil = !mayor;
console.log(solocatalogoinfantil);

