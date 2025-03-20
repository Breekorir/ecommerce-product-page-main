document.addEventListener("DOMContentLoaded", (event)  => {
    const mainImg = document.getElementById("main-img")
    const thumbnails = document.querySelectorAll(".thumb")

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click",()=>{
            mainImg.src = thumb.src
        })
    })
     
    document.querySelector(".add-to-cart").addEventListener("click", ()=>{
        alert("Item added to cart")
    })
})
function openLightbox(imgElement) {
    document.getElementById("lightbox").style.display="block"
    document.getElementById("lightbox-img").src=imgElement.src

    
}
function closeLightbox() {
    document.getElementById("lightbox").style.display="none"

    
}