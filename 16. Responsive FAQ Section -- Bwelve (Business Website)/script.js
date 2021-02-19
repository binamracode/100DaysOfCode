document.querySelector(".menu-toggle").addEventListener("click", function () {
  const bar = document.querySelector(".fas");
  bar.classList.toggle("fa-bars");
  bar.classList.toggle("fa-times");
  document.querySelector("nav ul").classList.toggle("active");
});

window.onscroll = function () {
  const yScroll = window.scrollY;
  const scrollToTop = document.querySelector(".scrollToTop");
  if (yScroll > 100) {
    scrollToTop.classList.remove("hide");
    scrollToTop.classList.add("move-top");
  } else {
    scrollToTop.classList.remove("move-top");
    scrollToTop.classList.add("hide");
  }
};
