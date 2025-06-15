function crearUsuario(name, email){
  return {
    id: 1,
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave..");
    },
  }
}

let user1 = crearUsuario("Nico", "armigames199@gmail.com")
let user2 = crearUsuario("Felipe", "phillips97@gmail.com")