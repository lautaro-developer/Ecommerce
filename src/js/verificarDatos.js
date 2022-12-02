import { enviar } from "./pintarInputs.js";
import { importModule } from "./utilidades.js";

const formulario = importModule.qs("#form");
let obtenerDatos = JSON.parse(localStorage.getItem("datos"));

const extraerDatos = () => {
  const nombre = enviar.nombreUsuario.value;
  const pass = enviar.passUsuario.value;

  const nombreVerdadero = obtenerDatos.nombre;
  const passVerdadero = obtenerDatos.pass;

  verificarDatos({ nombre, pass, nombreVerdadero, passVerdadero });
};

const verificarDatos = ({ nombre, nombreVerdadero, pass, passVerdadero }) => {
  if (nombre == nombreVerdadero && pass == passVerdadero) {
    enviar.verificarInputs.datosIncorrectos();
    enviar.verificarInputs.inputCorrecto();
    window.location.replace("../../index.html");
  }

  if (nombre != nombreVerdadero || pass != passVerdadero) {
    enviar.verificarInputs.mostrar__datosIncorrectos();
    enviar.verificarInputs.inputIncorrecto();
  }
};

formulario.addEventListener("submit", extraerDatos);
