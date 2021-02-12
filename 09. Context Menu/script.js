const contextMenu = document.querySelector(".context-menu");

window.addEventListener("click", () => {
  contextMenu.classList.remove("show");
});

window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let left = event.pageX;
  let top = event.pageY;

  contextMenu.style.left = `${left}px`;
  contextMenu.style.top = `${top}px`;
  contextMenu.classList.add("show");
});
