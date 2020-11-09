String();
Number();

//ternario
condition ? true : false;

var palabra1 = "verde";
var palabra2 = "azul";
var guardar = palabra1 === "azul " ? "es azul" : "no es azul";

var lista = ["papa", "melon", "zanahoria"];
//muestra la posicion
lista.indexOf("melon");
//agrega al principio del array
lista.unshift("gelatina");

for (var aux of listas) {
}
for (var aux of informacion) {
  console.log(aux);
}

//filter para recorrer listas
var listaGrande = [
  { nombre: "pepe", edad: 15 },
  { nombre: "omally", edad: 30 },
  { nombre: "hector", edad: 19 },
  { nombre: "miranda", edad: 17 },
  { nombre: "soledad", edad: 25 },
  { nombre: "brayan", edad: 13 },
];
var mayoresDeEdad = listaGrande.filter(function (personas) {
  return personas.edad >= 18;
});

//metodo find ayuda a encontrar valores en especifico devuelve tru o false
var encuentraOmally = listaGrande.find(function (personas) {
  return personas.nombre === "omally";
});
