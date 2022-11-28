// me voy a dormir

//tenes que crear un ul con su nombre cuando el usuario pulse una tecla

const focud = document.querySelector(".inputBuscar__item");
const ti = document.querySelector(".titulo");
const tia = document.querySelectorAll("#list");
const tic = document.querySelectorAll(".obj");
const v = document.querySelector(".li");
const x = document.querySelector(".conteinerList");

const consolas = [
  {
    nombre: "play",
    nombre: "xbox",
    nombre: "nintendo",
    nombre: "movil",
  },
];

const crearElementos = () => {
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const divObj = document.createElement("div");
  const divNombre = document.createElement("div");

  for(let consola of consolas) {
    const a = consola.nombre.toLowerCase()
    console.log(a)
  }

  div.classList.add("li");
  div.appendChild(divObj);
  div.appendChild(divNombre);

  ul.appendChild(div);
  x.appendChild(ul);
};

crearElementos();

const a = () => {
  const menu = ti.classList.toString();
  if (menu == "titulo") {
    ti.classList.remove("titulo");
    ti.classList.add("false");
  }

  const valor = focud.value.toLowerCase();
  tic.forEach((c) => {
    const text = c.textContent.toLowerCase();
    if (text.includes(valor)) {
      v.innerHTML = `
      <div class="obj">${text}</div>
      <div class="nombre">100</div>
      `;
    }
  });
};

focud.addEventListener("keyup", a);

const fun = () => {
  const menu = ti.classList.toString();
  if (menu == "titulo") {
    ti.classList.remove("titulo");
    ti.classList.add("false");
  } /*else if (menu == "false") {
    ti.classList.add("titulo");
    ti.classList.remove("false");
  }*/
};

//focud.addEventListener("focus", fun);
//focud.addEventListener('blur', fun)
