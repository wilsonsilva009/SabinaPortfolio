var MainImage;
var ImageSlide;
var currentImageIndex = 0;
var images = [];

document.addEventListener("DOMContentLoaded", function() {
    MainImage = document.querySelector("#image-holder img");
    ImageSlide = document.querySelector(".image-slide");

    images = document.querySelectorAll(".image-galery img");
});

function SwitchImage(Side) {
    if (Side == "l") {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
    } else {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
    }

    MainImage.src = images[currentImageIndex].src;
}

function ClickImage(Image) {
    currentImageIndex = Array.prototype.indexOf.call(images, Image);

    MainImage.src = Image.src;

    ImageSlide.style.opacity = "1";
    ImageSlide.style.pointerEvents = "auto";
}

function CloseImage() {
    ImageSlide.style.opacity = "0";
    ImageSlide.style.pointerEvents = "none";
}

