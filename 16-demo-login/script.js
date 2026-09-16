// ! Simulación de base de datos
const users = [
  {
    username: "johnd",
    password: "Asdf123#",
  },
  {
    username: "sofiat",
    password: "Asdf123#",
  },
  {
    username: "vales",
    password: "Asdf123#",
  },
  {
    username: "alesan",
    password: "asdfasdf",
  },
  {
    username: "carlosz",
    password: "Asdf123#",
  },
];

// -----------------------------------------------
// ! Esta función permite reutilizar el código para los diferentes tipos de mensajes con sus respectivos colores
const showAlert = (htmlParent, message, alertType = "danger") => {
  htmlParent.innerHTML = `<div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
        <span>${message}</span>
        <strong>!</strong> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
};

// -----------------------------------------------
// ! Captura de referencia HTML del formulario
const loginForm = document.querySelector("#form-login");

// ! Evento DEL FORMULARIO, desencadenado al hacer click en el botón "Signin"
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // ! Información ingresada en el formulario
  const username = loginForm.user.value;
  const password = loginForm.password.value;

  // ! Find en varias líneas
  // Comparación con base de datos
  // const userExist = users.find( (user) => {
  //     if(user.username === username && user.password === password){
  //         return user;
  //     }
  // })

  // ! Find en una líneas
  const userExist = users.find(
    (user) => user.username === username && user.password === password,
  );

  // ! Nodo padre donde se va a mostrar cualquiera sea el tipo de mensaje (danger o success)
  const htmlDivAlert = document.querySelector("#alert-msg"); // Capturamos la referencia del div donde se inyectará el mensaje

  // ! Preguntamos si el usuario existe o no, luego de la búsqueda
  if (!userExist) {
    showAlert(htmlDivAlert, "Usuario o contraseña incorrectos", "danger");
  } else {
    showAlert(htmlDivAlert, `Bienvenido/a ${userExist.username}`, "success");
  }

  /*
   * Si se encontró un usuario con las mismas credenciales ingresadas, significa
   * que nos hemos autenticado correctamente y el programa debería redirigirnos
   * a la página principal del usuario autenticado (Investigar sobre funcionamiento de location.href="").
   */
});
