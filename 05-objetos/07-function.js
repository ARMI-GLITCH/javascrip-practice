function Punto(x, y){
  this.x = x;
  this.y = y;
  this.dibujar = function(){ console.log("Dibujando..."); }
}

let argumento = { z: 7};
Punto.call(argumento, 1, 2);

console.log(argumento);


// const Point = new Function("x", "y", `this.x = x;
//   this.y = y;
//   this.dibujar = function(){ console.log("Dibujando..."); }`)

// const p = new Point(1, 2)
// console.log(p);
