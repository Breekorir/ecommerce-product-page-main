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
    
function openlightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-img');
    
    // Set the source of the lightbox image to the clicked thumbnail
    lightboxImage.src = image.src.replace("-thumbnail", ""); // Remove "-thumbnail" from the image source
    lightbox.style.display = 'flex'; // Show the lightbox
  }
  
  // Close lightbox function
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
  }