function nombreResolucion(ancho, alto){
  /* El codigo debe seguir un orden lógico desde las resoluciones más altas a más bajas
  lo cual es importante para evitar clasificaciones no deseadas, por ejemplo
  si el ancho es 2000 y el alto es 1000, si el primer if es para comprobar la resolucion HD, siempre se cumplira
  independientemente de que tan grande es el valor de ancho y alto, siempre sera HD, haciendo que el codigo no retorne
  los resultados correctos
  */
  if(ancho >= 7860 && alto >= 4320){
    return "La resolucion es 8K"
  } else if(ancho >= 3840 && alto >= 2160){
    return "La resolucion es 4K"
  } else if(ancho >= 2560 && alto >= 1440){
    return "La resolucion es WQHD"
  } else if(ancho >= 1920 && alto >= 1080){
    return "La resolucion es FHD"
  } else if(ancho >= 1280 && alto >= 720){
    return "La resolucion es HD"
  } else {
    return "No se conoce la resolucion";
  }
}

let nombre = nombreResolucion(1285, 1080);
console.log(nombre);
