//const URL = 'http://localhost:3004/colores' //Json-server

const URL = "http://localhost:4002/apipaleta/colores"; 

console.log(URL)

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaColores = await respuesta.json();
    return listaColores;
  } catch (error) {
    console.log(error);
  }
};

export const crearColorAPI = async (tarea) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColorAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


