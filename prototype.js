//prtotype es lo que reemplasaria las clases en JavaScript
operar.prototype.restar = function () {
  return this.a - this.b;
};
function operar(nombre, a, b) {
  //const metodos = Object.create(operar.prototype);
  this.name = nombre;
  this.a = a;
  this.b = b;
}

const numero1 = new operar("el primero", 2, 4);
console.log(numero1.name);
console.log(numero1.restar());

//Herencia prototipal-----------------------------------------------
