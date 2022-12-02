import { importModule } from "./utilidades.js";

const mostrarError = importModule.qs(".datosIncorrectos");
const nombreUsuario = importModule.qs("[data-nombre]");
const passUsuario = importModule.qs("[data-pass]");

const verificarInputs = {
  inputIncorrecto() {
    nombreUsuario.classList.add("mostrar__inputIncorrectos");
    passUsuario.classList.add("mostrar__inputIncorrectos");

    nombreUsuario.classList.remove("mostrar__datosCorrectos");
    passUsuario.classList.remove("mostrar__datosCorrectos");
  },

  inputCorrecto() {
    nombreUsuario.classList.remove("mostrar__inputIncorrectos");
    passUsuario.classList.remove("mostrar__inputIncorrectos");

    nombreUsuario.classList.add("mostrar__datosCorrectos");
    passUsuario.classList.add("mostrar__datosCorrectos");
  },

  datosIncorrectos() {
    mostrarError.classList.add("datosIncorrectos");
    mostrarError.classList.remove("mostrar__datosIncorrectos");
  },

  mostrar__datosIncorrectos() {
    mostrarError.classList.remove("datosIncorrectos");
    mostrarError.classList.add("mostrar__datosIncorrectos");
  },

  quitarEstilos() {
    enviar.nombreUsuario.value = "";
    enviar.passUsuario.value = "";

    enviar.nombreUsuario.classList.remove("mostrar__inputIncorrectos");
    enviar.nombreUsuario.classList.remove("mostrar__datosCorrectos");

    enviar.passUsuario.classList.remove("mostrar__inputIncorrectos");
    enviar.passUsuario.classList.remove("mostrar__datosCorrectos");

    enviar.mostrarError.classList.add("datosIncorrectos");
    enviar.mostrarError.classList.remove("mostrar__datosIncorrectos");
  },
};

export const enviar = {
  mostrarError,
  nombreUsuario,
  passUsuario,
  verificarInputs,
};
