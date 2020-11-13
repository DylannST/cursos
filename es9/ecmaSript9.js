const objeto = {
  nombre: "pedrito",
  edad: 15,
  telefono: "3225699897",
};

let { nombre, ...todoAqui } = objeto;
console.log(nombre, todoAqui);
//lo que hace es extraer nombre y encapsulara todo el objeto en tla variable
//todoAqui y no muestra la variable que se extrajo sin destruir el objeto

const objeto2 = {
  nombre: "omally",
  edad: 2,
};

const objeto3 = {
  ...objeto2, //para traer un objeto completo sin poner dato por dato
  pais: "Colombia",
};
console.log(objeto3);

//--------------------------

const holaOtravez = () => {
  return new Promise((resolve, reject) => {
    false ? resolve("hola viejo") : reject("error mi viejo");
  });
};

holaOtravez()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    //finally sirve ára saber si se finalizo la ejecucion de todas las promesas sin importar si entra al catch
    console.log("se finalizo el programa");
  });
//--------------------------------------------

const fechas = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
//año{el tamaño de lo que va a contener}-mes{}-dia{}
const variable = fechas.exec("2015-09-25");
const anio = variable[1];
const mes = variable[2];
const dia = variable[3];
console.log(anio, mes, dia);
