document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.site-content div');
    let zIndex = 0;

    images.forEach((img, index) => {
        img.style.zIndex = ++zIndex;
    });
});

let MenuOpen = false;
function ToggleMenu(){
    menu = document.querySelector("#menu");

    if (!MenuOpen)
    {
        menu.style.pointerEvents = "auto";
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(8rem)';
    }
    else
    {
        menu.style.pointerEvents = "none";
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(6.5rem)';
    }

    MenuOpen = !MenuOpen;
}

window.onscroll = function() {
    const phone_button = document.querySelector("#phone-scroll-button");
    if (window.scrollY > 100) {
        phone_button.style.display = "inherit";
    }else{
        phone_button.style.display = "none";
    }
};

var IsScrolling = false

let currentIndex = 0;

function detectScrollDirection(event) {
    if (IsScrolling) return

    IsScrolling = true

    const delta = event.deltaY || event.detail || event.wheelDelta;

    const images = ["#img1", "#img2", "#img3", "#img4"];

    if (delta > 0) {
        currentIndex++;
    } else {
        currentIndex--;
    }
    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.querySelector(images[currentIndex]).scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        IsScrolling = false
    }, 500);
    
}

window.addEventListener('wheel', detectScrollDirection);
