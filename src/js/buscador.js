const focud = document.querySelector(".inputBuscar__item");
const ti = document.querySelector(".titulo");
const tia = document.querySelectorAll(".li");
console.log(tia);

tia.forEach((v) => v.addEventListener("click", (a) => console.log(a.target)));

const fun = () => {
  const menu = ti.classList.toString();
  if (menu == "titulo") {
    ti.classList.remove("titulo");
    ti.classList.add("false");
  } else if (menu == "false") {
    ti.classList.add("titulo");
    ti.classList.remove("false");
  }
};

focud.addEventListener("focus", fun);
focud.addEventListener("blur", fun);
focud.addEventListener("mouseover", () => console.log("sobre el"));
