const images = document.querySelectorAll(".images img");
const mainImg = document.querySelector("#main");

images.forEach((img) =>{
    img.addEventListener("click", () => {
        mainImg.setAttribute('src', img.getAttribute("src"));
    })
})

document.querySelector("#backBtn").addEventListener("click", () => {
    let activeImage = getActiveImage();
    if (activeImage ===  0) activeImage = images.length;
    mainImg.setAttribute("src", images[activeImage - 1].getAttribute("src"))
})

document.querySelector("#forwardBtn").addEventListener("click", () => {
    let activeImage = getActiveImage();
    if (activeImage ===  images.length - 1) activeImage = -1;
    mainImg.setAttribute("src", images[activeImage + 1].getAttribute("src"))
})

function getActiveImage() {
    let activeImage = 1;
    images.forEach((img, index) =>{
        if (mainImg.getAttribute("src") === img.getAttribute("src")){
            activeImage = index;
        }
    })
    
    return activeImage;
}