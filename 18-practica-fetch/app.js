const urlApiGeneral = "https://hp-api.onrender.com/api/characters";
const urlApiIndividual = "https://hp-api.onrender.com/api/character/";

let personajes = [];

const contenedor = document.querySelector("#contenedor");
const myModal = new bootstrap.Modal("#modal");
const titleH1 = document.querySelector("#exampleModalLabel");

// fetch(urlApiGeneral)
//     .then(response => response.json())
//     .then(data => {
//         // todas las acciones que yo quiero con esa data

//         console.log(data);
//     })

const obtenerPersonajesHp = async () => {
  try {
    const response = await fetch(urlApiGeneral);
    const data = await response.json();

    return data.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnPersonajeHp = async (idPersonaje) => {
  try {
    const response = await fetch(`${urlApiIndividual}${idPersonaje}`);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const cargarPersonajes = async () => {
  // obtener los personajes
  personajes = await obtenerPersonajesHp();

  // recorrer y agregar en el html
  // construir el html
  personajes.forEach((personaje) => {
    contenedor.innerHTML += `
    <div>
        <img src=${personaje.image} alt=${personaje.name} />
        <button class="btn btn-primary btn-ver-detalle" data-id=${personaje.id}>ver detalle</button>
    </div>
  `;
  });
};

const verDetalle = async (id) => {
  const personaje = await obtenerUnPersonajeHp(id);
  console.log(personaje[0].species);
};

contenedor.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-ver-detalle")) {
    const idPersonaje = e.target.dataset.id;
    const personaje = await obtenerUnPersonajeHp(idPersonaje);

    titleH1.textContent = personaje.name;

    myModal.show();
  }
});

cargarPersonajes();
// verDetalle("43403619-70cb-4a0c-b70a-6d5cae20e602");
