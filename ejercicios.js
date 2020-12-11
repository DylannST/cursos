//1----------------------------
function contar(frase) {
  return frase.length;
}
console.log(contar("perro"));

//2----------------------------
function separar(frase, tamanio) {
  let fraseR = frase.split("", tamanio);
  let aux = "";

  for (i = 0; i < fraseR.length; i++) {
    aux = aux + fraseR[i];
  }
  return aux;
}

console.log(separar("hola mundo", 6));

//3---------------------------
function arrayTextos(frase) {
  return frase.split(" ");
}

console.log(arrayTextos("hola que tal"));

//4--------------------------
function mostrarVeces(frase, veces) {
  for (let i = 0; i < veces; i++) {
    console.log(frase);
  }
}

mostrarVeces("hola mundo", 5);
