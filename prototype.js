//prtotype es lo que reemplasaria las clases en JavaScript
operar.prototype.restar = function () {
  return this.a - this.b;
};
function operar(nombre, a, b) {
  //const metodos = Object.create(operar.prototype);
  this.nombre = nombre;
  this.a = a;
  this.b = b;
}

const numero1 = new operar("el primero", 2, 4);
console.log(numero1.nombre);

console.log(numero1.restar());

//Herencia prototipal-----------------------------------------------
function triangulo(nombre, a, b, puntas) {
  this.super = operar;
  this.super(nombre, a, b);
  this.puntas = puntas;
}

//aqui se hace la herencia
triangulo.prototype = new operar();
const valor = new triangulo("triangulo", 5, 6, 3);
console.log(valor.nombre);

//reescribir-------------------------------------------------
triangulo.prototype.restar = function () {
  console.log(this.a * this.b);
};

console.log(valor.restar());

//-----------------------------------------------------

class figuras {
  constructor(nombre, puntas) {
    this.nombre = nombre;
    this.puntas = puntas;
  }

  mostrar() {
    console.log(`soy ${this.nombre} y tengo ${this.puntas} puntas`);
  }
}

const cuadrado = new figuras("cuadrado", 4);
cuadrado.mostrar();
