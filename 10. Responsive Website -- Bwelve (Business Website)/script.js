document.querySelector(".menu-toggle").addEventListener("click", function () {
  const bar = document.querySelector(".fas");
  bar.classList.toggle("fa-bars");
  bar.classList.toggle("fa-times");
  document.querySelector("nav ul").classList.toggle("active");
});
