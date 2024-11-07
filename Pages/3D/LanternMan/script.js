var MainImage;
var MainVideo;
var MainVideoMedia;
var ImageSlide;
var currentImageIndex = 0;
var images = [];

document.addEventListener("DOMContentLoaded", function() {
    MainImage = document.querySelector("#image-holder img");
    MainVideo = document.querySelector("#image-holder video");
    MainVideoSource = document.querySelector("#image-holder video source");
    ImageSlide = document.querySelector(".image-slide");

    images = document.querySelectorAll(".image-galery img, .image-galery video");
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

    const currentElement = images[currentImageIndex];

    if (currentElement.tagName.toLowerCase() == "img"){
        MainVideo.style.display = "none";
        MainImage.style.display = "block";

        MainImage.src = images[currentImageIndex].src;
    } else {
        MainVideo.style.display = "block";
        MainImage.style.display = "none";

        MainVideoSource.src = images[currentImageIndex].src;
        MainVideo.play();
    }

}

function ClickImage(Image) {
    currentImageIndex = Array.prototype.indexOf.call(images, Image);

    const currentElement = images[currentImageIndex];

    if (currentElement.tagName.toLowerCase() == "img"){
        MainVideo.style.display = "none";
        MainImage.style.display = "block";

        MainImage.src = images[currentImageIndex].src;
    } else {
        MainVideo.style.display = "block";
        MainImage.style.display = "none";

        MainVideoSource.src = images[currentImageIndex].src;
        //MainVideo.play();
    }

    ImageSlide.style.opacity = "1";
    ImageSlide.style.pointerEvents = "auto";
}

function CloseImage() {
    ImageSlide.style.opacity = "0";
    ImageSlide.style.pointerEvents = "none";
}

