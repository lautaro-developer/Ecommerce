let inputs = document.querySelectorAll("input");
inputs.forEach((i) => {
  i.addEventListener("blur", (i) => validar(i.target));
});

let regex = /([A-Z])\w+/;

function validar(v) {
  const inputValor = v.dataset.input;

  let ok = regex.exec(v[a]);

  if (!ok) {
    console.log("nose");
  } else {
    console.log("piola");
  }
}
