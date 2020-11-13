const array = [1, 2, 3, 4, 5, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()); //muestra el array por nivel
console.log(array.flat(2)); // muestra el seegundo nivel de la matriz

//---------------------------------

let array = [1, 2, 3, 4];
console.log(array.flatMap((valor) => [valor, valor * 2]));
//-----------------------------------
//eliminar espacios
let hola = "   bueno     aqui         ";
console.log(hola);
console.log(hola.trimStart()); //elimina espacios del principio
console.log(hola.trimEnd()); //elimina los espacios del principio

//-----------------------------------------------------
try {
} catch {
  error; //en ecmaScript10 ya no se le pasa el parametro a catch(erro){}---ya simplemente usas error dentro de las llaves sin ponerlos como atributo
}

//------------------------------------------------------------
let entradas = [
  ["nombre", "pepe"],
  ["edad", 32],
];
console.log(Object.fromEntries(entradas)); //convierte una matriz o vector en un objeto

//---------------------------------------------------------
let miSimbolo = "mi simbolo :D";
let simbolo = Symbol(miSimbolo); //para acceder a la descripcion de un objeto tipo simbolo
console.log(simbolo.description);
