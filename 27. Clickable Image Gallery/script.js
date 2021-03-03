document.querySelectorAll(".images img").forEach((img) =>{
    img.addEventListener("click", () => {
        document.querySelector("#main").setAttribute('src', img.getAttribute("src"));
    })
})