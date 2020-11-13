const holaMundo = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hola mundo"), 3000)
      : reject(new error("dio error"));
  });
};

const holaAsync = async () => {
  const hola = await holaMundo();
  console.log(hola);
};

holaAsync();

const otrafuncion = async () => {
  try {
    const hola = await holaMundo();
    console.log(hola);
  } catch (error) {
    console.log(error);
  }
};
otrafuncion();
//async await para hacer multiples llamaso en las promesas
//Async/await permite que nuestro código asíncrono se comporte como si fuera síncrono
