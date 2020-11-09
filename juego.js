var valor = "piedra";

var resultado = function () {
  var valorMaquina = Math.round(Math.random() * (3 - 1) + 1);
  if (valorMaquina === 1) {
    return "piedra";
  } else if (valorMaquina === 2) {
    return "papel";
  } else {
    return "tijera";
  }
};

console.log(`jugador: ${valor}---Maquina: ${resultado()}`);
