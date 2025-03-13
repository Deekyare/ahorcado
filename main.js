const palabrasConPista = [
  { palabra: "manzana", pista: "Fruta, puede ser roja o verde" },
  {
    palabra: "computadora",
    pista:
      "Dispositivo informático que es capaz de recibir, almacenar y procesar información de una forma útil.",
  },
  {
    palabra: "chocotorta",
    pista: "Torta hecha con galletas de chocolate y dulce de leche",
  },
  {
    palabra: "alfiler",
    pista:
      "Clavillo que es usualmente de metal con punta por uno de sus extremos y una cabecilla por el otro. ",
  },
  {
    palabra: "heladera",
    pista:
      "Electrodoméstico con forma de armario que sirve para conservar fríos los alimentos.",
  },
  {
    palabra: "idioma",
    pista:
      "Sistema de comunicación verbal (lengua oral y gráfica) o gestual (lengua signada), propia de una sociedad humana.",
  },
  {
    palabra: "paraguas",
    pista: "Utensilio portátil para resguardarse de la lluvia.",
  },
  {
    palabra: "salchicha",
    pista:
      "Embutidos a base de carne picada introducida en una envoltura que es tradicionalmente la piel del intestino del animal.",
  },
  {
    palabra: "novela",
    pista:
      "Narración en prosa, generalmente extensa, que cuenta una historia de ficción.",
  },
  {
    palabra: "literatura",
    pista:
      "Arte de la expresión verbal y, por lo tanto, abarca tanto textos escritos como hablados o cantados.",
  },
  {
    palabra: "oceano",
    pista:
      "Masa de agua salada que cubre aproximadamente las tres cuartas partes de la superficie terrestre.",
  },
  {
    palabra: "medias",
    pista:
      "Prendas que cubren las piernas, desde los pies hasta media pantorrilla o hasta medio muslo. ",
  },
  {
    palabra: "gasolina",
    pista:
      "Producto obtenido del petróleo por destilación, que se utiliza principalmente como combustible ",
  },
  {
    palabra: "oxigeno",
    pista:
      "Gas sin color ni olor. Es necesario para la vida de plantas y animales.",
  },
  {
    palabra: "churrasco",
    pista: "Pieza de la falda de ternera cortada transversalmente.",
  },
  {
    palabra: "caramelos",
    pista: "Alimento preparado generalmente a base de azúcar fundido.",
  },
  {
    palabra: "continente",
    pista:
      "Gran extensión de tierra separada por los océanos y, en general, por determinados accidentes geográficos.",
  },
  {
    palabra: "angulos",
    pista:
      "Arco que se forma a partir de la cruce de dos semirrectas, segmentos o rectas, pudiendo ser medido en grados.",
  },
  { palabra: "volador", pista: "Que vuela." },
  {
    palabra: "bicicleta",
    pista: "Es un vehículo de transporte personal, de propulsión humana.",
  },
  {
    palabra: "camioneta",
    pista:
      "Automóvil menor que el camión, empleado generalmente para el transporte de elementos.",
  },
  {
    palabra: "caballo",
    pista: "Mamífero équido, macho, de tamaño mediano o grande",
  },
  { palabra: "abeja", pista: "Insecto que produce cera y miel" },
  {
    palabra: "bodega",
    pista:
      "Lugar, generalmente subterráneo, en el que se cría y se almacena el vino.",
  },
  {
    palabra: "cielo",
    pista:
      "Parte de la atmósfera y del espacio exterior vistos desde la Tierra, en la que están las nubes.",
  },
  { palabra: "europa", pista: "Segundo continente más pequeño de todos." },
];

let contadorErrores = 0;
let palabraRandom, palabraEscondidaConGuiones, pista;

// Inicializar elementos HTML para su posterior uso
const contenedorMenuPrincipal = document.querySelector(
  ".contenedor-menu-principal"
);
const contenedorAgregarPalabra = document.querySelector(
  ".contenedor-agregar-palabra"
);
const contenedorJuego = document.querySelector(".contenedor-juego");
const contenedorResultadoNegativo = document.querySelector(".contenedor-resultado-negativo");
const contenedorResultadoPositivo = document.querySelector(".contenedor-resultado-positivo");
const imagenGanasteEl = document.querySelector(".ganaste-nene");
const imagenPerdisteEl = document.querySelector(".perdiste");
const respuesta = document.querySelector(".respuesta");
const teclas = document.querySelectorAll(".btonTeclado");
const btniniciarjuegoEl = document.querySelector(".iniciar-juego");
const botones2El = document.querySelector(".botones2");
const guardarPalabraEl = document.querySelector(".guardarPalabra");
const inputTextoEl = document.querySelector(".input-texto");
const inputTextoPista = document.querySelector(".input-texto-pista");
const contenedorInputEl = document.querySelector(".contenedor-input");
const botonesInicialesEl = document.querySelector(".botonesIniciales");
const contenedorDibujosEl = document.querySelector(".contenedor-dibujos");
const dibujoEl = document.querySelector(".dibujo");
const palabraEscondidaEl = document.querySelector(".palabra-escondida");
const letrasEl = document.querySelector(".letras");
const tecladoEl = document.querySelector(".teclado");
const pistaEl = document.querySelector(".pista");


/*
 * Esta funcion se ejecuta cuando se emite el evento onLoad del <body>
 */
function iniciarPrograma() {
  console.log("Inicializando variables");
  mostrarMenu();
}

// Funcion mostrarMenu() elimina la clase escondido de todos los elementos que sean el menu
// Y agregue la clase escondido a todo lo que no sea de el.
function mostrarMenu() {
  contenedorMenuPrincipal.classList.remove("escondido");
  contenedorAgregarPalabra.classList.add("escondido");
  contenedorJuego.classList.add("escondido");
  contenedorResultadoPositivo.classList.add("escondido");
  contenedorResultadoNegativo.classList.add("escondido");
}

// al llegar a game over llamar a la funcion mostrarMenu()

// Función contadora de errores y avanza con el hombre ahorcado

function aumentarError() {
  contadorErrores++;

  // Mientras la cantidad de errores sea menor a 6 (1 a 5 errores) se van cambiando los estados del bichito
  if (contadorErrores < 6) {
    dibujoEl.setAttribute("src", `imagenes/estados/es${contadorErrores}.png`);
  } else {
    // Si la cantidad de errores llego a 6 entonces mostrar game over
    contenedorResultadoPositivo.classList.add("escondido");
    contenedorResultadoNegativo.classList.remove("escondido");
    contenedorJuego.classList.add("escondido");
    respuesta.innerHTML = palabraRandom;

    contadorErrores = 0;
    dibujoEl.setAttribute("src", `imagenes/estados/es${contadorErrores}.png`);

   


    //setTimeout(() => {
    // Llamar a mostrarMenu()
    //mostrarMenu();
    //}, 2000);
  }
}

//Función iniciar juego, ocultar todo lo que no corresponda al juego en si.
function  btnIniciarJuego(palabraGuardada, pistaGuardada) {
  console.log("btnIniciarJuego");
  contenedorJuego.classList.remove("escondido");
  contenedorMenuPrincipal.classList.add("escondido");
  const numeroRandom = Math.floor(Math.random() * palabrasConPista.length - 1);
  palabraRandom = palabraGuardada || palabrasConPista[numeroRandom].palabra;
  pista = pistaGuardada || palabrasConPista[numeroRandom].pista;
  palabraEscondidaConGuiones = palabraRandom.replace(/./g, "_");
  palabraEscondidaEl.innerHTML = palabraEscondidaConGuiones;
  pistaEl.innerHTML = pista;
  contadorErrores = 0;
  dibujoEl.setAttribute("src", `imagenes/estados/es${contadorErrores}.png`);

  console.log({ palabraRandom, pista });

  for (let i = 0; i < teclas.length; i++) {
    teclas[i].classList.remove("deshabilitado");
  }
}
// Agregar nueva palabra a la lista

function btnAgregarPalabra() {
  console.log("btnAgregarPalabra");

  contenedorMenuPrincipal.classList.add("escondido");

  contenedorAgregarPalabra.classList.remove("escondido");
}

// Obtener la pabra que escribio el usuario

function btnguardarPalabra() {
 const palabrasConPista = inputTextoEl.value; 
 const pista = inputTextoPista.value;
  
  contenedorAgregarPalabra.classList.add("escondido");

  btnIniciarJuego(palabrasConPista, pista);
}

function btnCancelar() {
  mostrarMenu();
  contenedorAgregarPalabra.classList.add("escondido");
}

/*iniciar juego, elegir una letra y decir si es correcta o incorrecta mostrandolas y seleccionando o no el estado del 
    muñeco, ganar o perder, mostrar mensaje*/
function teclaIn(element) {
  const letra = element.getAttribute("data-tecla");
  console.log(letra);
  console.log(palabraRandom);
  const letraExiste = palabraRandom.includes(letra);
  if (!letraExiste) {
    // Si la letra no existe deshabilitamos la tecla y aumentamos el error
    element.classList.add("deshabilitado");
    aumentarError();
  } else {
    // Si la letra existe recorremos la palabra con guiones y reemplazamos el caracter correcto
    console.log("La letra existe: " + letra);

    for (let i = 0; i <= palabraRandom.length; i++) {
      if (palabraRandom[i] === letra) {
        // Reemplazamos la letra correcta por la letra en lugar del guion
        palabraEscondidaConGuiones =
          palabraEscondidaConGuiones.substring(0, i) +
          letra +
          palabraEscondidaConGuiones.substring(i + 1);
        // Escondemos la letra para que no se vuelva a usar  
        element.classList.add("deshabilitado");
        console.log(palabraEscondidaConGuiones);
      }
    }

    // Actualizamos la palabra en la UI
    palabraEscondidaEl.innerHTML = palabraEscondidaConGuiones;

    // Mostrar Ganaste si todas las letras fueron descubiertas
    console.log({
      palabraEscondidaConGuiones,
      palabraRandom
    })
    if ( palabraEscondidaConGuiones === palabraRandom ) {
      contenedorResultadoNegativo.classList.add("escondido");
      contenedorResultadoPositivo.classList.remove("escondido");
      contenedorJuego.classList.add("escondido");
      contadorErrores = 0;
      dibujoEl.setAttribute("src", `imagenes/estados/es${contadorErrores}.png`);
      
    }
  }
}
function btnVolverAjugar() {
  mostrarMenu();
  contadorErrores = 0;
  dibujoEl.setAttribute("src", `imagenes/estados/es${contadorErrores}.png`);
}