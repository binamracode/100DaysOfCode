document.querySelector("#icon").addEventListener("click", () => {
  document.querySelector("#lol").classList.add("show");
});

window.onclick = function (event) {
  if (!event.target.classList.contains("fas")) {
    document.querySelector("#lol").classList.remove("show");
  }
};
