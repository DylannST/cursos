//call: sirve para dar valores a this es decir el contexto

const personaPrueba = {
  nombre: "nicolai",
  edad: 25,
  trabajo: "celador",
};

function valorDeThis() {
  console.log(`hola mi nombre es ${this.nombre}`);
}
valorDeThis.call(personaPrueba); //aqui se le da el valor o contexto  mediante call

//aply hace lo mismo que call pero se le pasan los argunmentos de distinta forma

const personaPrueba2 = {
  nombre: "nicolai",
  edad: 25,
  trabajo: "celador",
};
function elDeAply(hobbie, color) {
  console.log(
    `hola soy ${this.nombre} y tengo ${this.edad} 
    y mi hobbie es ${hobbie} y mi color favorito es ${color}`
  );
}
elDeAply.apply(personaPrueba2, ["ajedrez", "azul"]); //en apply se le pasa un array con los argumentos que solicite

//bind estabelece el valor de this en una nueva funcion
const personaPrueba3 = {
  nombre: "nicolai",
  edad: 25,
  trabajo: "celador",
};

function saludo() {
  console.log(`hola soy ${this.nombre}`);
}

const nuevaFuncion = saludo.bind(personaPrueba3);

nuevaFuncion();


