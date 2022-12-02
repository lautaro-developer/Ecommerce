import { importModule } from "./utilidades.js";
import { enviar } from "./pintarInputs.js";

const formulario = importModule.qs("form");
let obtenerDatos = JSON.parse(localStorage.getItem("datos"));

const extraerDatos = () => {
  const nombre = enviar.nombreUsuario;
  const pass = enviar.passUsuario;

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

formulario.addEventListener("submit", extraerDatos)

export const datos = {extraerDatos, verificarDatos}