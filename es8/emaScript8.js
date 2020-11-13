const datos = {
  nombre: "pepe",
  edad: 25,
  mascotas: 2,
};

const entradas = Object.entries(datos); //crea unaa matriz con lo elemntos que se le envien
console.log(entradas);
console.log(entradas.length);

const valores = Object.values(datos); //muestra solo los valores sin poner los atributos
console.log(valores);

const cadena = "oelo bn";
console.log(cadena.padStart(10, "hey")); //pone al inicio hey en esa posicion
console.log(cadena.padEnd(20, "-------")); //pone al final las --------
console.log("comida".padEnd(12, "---------"));
