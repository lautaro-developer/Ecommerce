import { importModule } from "./utilidades.js";
import { enviar } from "./pintarInputs.js";

const input = importModule.qs(".verCampos");
const cuenta = importModule.qs(".cuenta");

const mostrarCampos = () => {
  const verClase = cuenta.classList;
  if (verClase == "cuenta") {
    verClase.remove("cuenta");
    verClase.add("cuenta2");
  } else if (verClase == "cuenta2") {
    verClase.add("cuenta");
    verClase.remove("cuenta2");

    enviar.verificarInputs.quitarEstilos()
  }
};

input.addEventListener("click", mostrarCampos);
