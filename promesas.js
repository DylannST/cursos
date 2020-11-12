const algoParaHacer = (valor) => {
  return new Promise((resolve, reject) => {
    if (valor) {
      resolve("Excelente");
    } else {
      reject("algo salio mal");
    }
  });
};
const algoParaHacer2 = (valor) => {
  return new Promise((resolve, reject) => {
    if (valor) {
      resolve("bien");
    } else {
      reject("paila");
    }
  });
};

///------------------------
/*algoParaHacer(false)
  .then((respuesta) => console.log(respuesta))
  .catch((e) => console.log(e));*/

Promise.all([algoParaHacer(true), algoParaHacer2(true)])
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => console.log(error));


  //traer de otra clase
  const variable=require('../ruta/ruta')