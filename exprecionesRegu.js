let palabraPrueba =
  "Lorem de prueba para encontrar alguna palbara XD o si no paila";
//dos formas de encontrar una palabra
let expreciones = new RegExp("Xd", "ig"); //la i es una bandera para que ignore mayusculas y minusculas y la g es que busque en todas y no se dentenga en la primera
let exprecion2 = /paila/;

console.log(expreciones.test(palabraPrueba));
console.log(exprecion2.test(palabraPrueba));
exprecion2 = /\d/gi; // la \d hace que busque si existen numeros
console.log(exprecion2.test(palabraPrueba));

//-----------funciones anonimas autoejecutables -------------
(function (d, w, c) {
  console.log("hey");
})(document, window, console);
