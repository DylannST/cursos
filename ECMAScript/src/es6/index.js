//
function nuevaFuncion(nombre, edad, pais) {
  var nombre = nombre || "pepito";
  var edad = edad || 54;
  var pais = pais || "Colombia";
}

//ECMAScript 6
function nuevaFuncionEcmaScript6(
  nombre = "pepito",
  edad = 54,
  pais = "Colombia"
) {
  console.log(nombre, edad, pais);
}

nuevaFuncion("heriverto", 69, "Suiza");
nuevaFuncionEcmaScript6();

//nueva forma de mostrar objetos
var objeto = {
  nombre: "loquito",
  edad: 25,
  pais: "Colombia",
};

var { nombre, edad, pais } = objeto;
console.log(`${nombre} ${edad} ${pais}`);

//union de arrays operador de propagacion
let personas1 = ["heriberto", "anastacia", "sianfiro"];
let personas2 = ["el runin", "chapastafa", "correro"];

let union = ["casimiro", ...personas1, ...personas2];
console.log(union);

//var es global y let es local

//forma de asignar objetos
let nombre = "el pepe";
let edad = 110;

let modoAntiguo = { nombre: nombre, edad: edad }; //forma antigua de asignar valores a un objeto
let modoNuevo = { nombre, edad };
console.log(modoAntiguo);
console.log(modoNuevo);

//arrows function y funcion map
const personas = [
  { nombre: "jacinto", edad: 26, telefono: "3023356969" },
  { nombre: "anastacia", edad: 98, telefono: "3056569698" },
];
let lista = personas.map((persona) =>
  console.log(
    `nombre: ${persona.nombre} edad: ${persona.edad} telefono: ${persona.telefono}`
  )
);

//promesas su funcion es hacer funciones asincronas
//resolve cuando quieres que haga algo reject cuando hubo un error
let x = 0;
const promesas = new Promise((resolve, reject) => {
  if (4 / x == 2) {
    resolve("paso la prueba");
  } else {
    reject("hubo un error, ojo mijo");
  }
});
//funcion then() se ejecuta cuando hay un resolve
promesas
  .then((mensajePositivo) => {
    console.log(mensajePositivo);
  })
  .catch((mensajeNegativo) => {
    console.log(mensajeNegativo);
  });
console.log(promesas);
//callback

function fecha(callback) {
  console.log(new Date());
  setTimeout(() => {
    let fecha = new Date();
    callback(fecha);
  }, 5000);
}
function imprimir(mostrar) {
  console.log(mostrar);
}
fecha(imprimir);
