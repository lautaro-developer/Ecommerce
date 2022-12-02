import { importModule } from "./utilidades.js"
let btn = importModule.qs("form");
let input = () => {
  const nombre = importModule.qs("[data-nombre]").value;
  const apellido = importModule.qs("[data-apellido]").value;
  const pass = importModule.qs("[data-pass]").value;
  const passValidar = importModule.qs("[data-validarPass]").value;
  const tarjeta = importModule.qs("[data-tarjeta]").value;
  const tarjetaOpcion = importModule.qs("[data-tarjetaOpcion]").value;

  let objetoDeDatos = {
    nombre,
    apellido,
    pass,
    passValidar,
    tarjeta,
    tarjetaOpcion,
  };
  let guardarDatos = localStorage.setItem("datos", JSON.stringify(objetoDeDatos))
  window.location.replace('../html/verProducto.html')
};

btn.addEventListener("submit", input);
