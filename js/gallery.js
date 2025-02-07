// Get the modal
var modal = document.getElementById("imageModal");

// Get all images in the gallery
var images = document.getElementsByClassName("gallery-img");

// Get the modal image and caption elements
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Loop through all gallery images
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// Close the modal when the user clicks on the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
};
  
