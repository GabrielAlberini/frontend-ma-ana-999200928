const $container = document.querySelector(".container");

$container.style.height = "1000px";

const analizarEvento = (e) => {
  console.log(e)
  console.log("Hiciste scroll!");
};

window.addEventListener("scroll", analizarEvento);
