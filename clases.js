class calcular {
  constructor() {
    this.valorA = 0;
    this.valorB = 0;
  }
  suma(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB;
  }
}

const calcu = new calcular();
console.log(calcu.suma(1, 3));

import { holas } from "./moduloDeClases";
holas();
function* hola() {
  if (true) {
    yield "hey";
  }
  if (true) {
    yield "bien o no?";
  }
  if (true) {
    yield "vamono";
  }
}
const guardar = hola();
console.log(guardar.next().value);
console.log(guardar.next().value);
console.log(guardar.next().value);
