var CurrentStyle3D = false;
let currentIndex = 0;
let startIndex = 0;
let endIndex = 6;

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.site-content div');
    let zIndex = 0;

    images.forEach((img, index) => {
        img.style.zIndex = ++zIndex;
    });

    const button = document.querySelector('.ambient-selector button');

    function ChangeStyle(){

        if (CurrentStyle3D){
            button.style.boxShadow = "0px 10px #0b0b0b";
            button.style.transform = "translateY(-5px)"
            button.textContent = "3D";
            currentIndex = 0;
            startIndex = 0;
            endIndex = 6; 
        }else{
            button.style.boxShadow = "0px 0px #0b0b0b";
            button.style.transform = "translateY(0px)"
            button.textContent = "2D";
            currentIndex = 7;
            startIndex = 7;
            endIndex = 17;
        }



        if (CurrentStyle3D) {
            images.forEach(image => {
                if (image.classList.contains('_2D')) {
                    image.style.display = "none";
                } else if (image.classList.contains('_3D')) {
                    image.style.display = "inherit";
                }
            });
        } else {
            images.forEach(image => {
                if (image.classList.contains('_2D')) {
                    image.style.display = "inherit";
                } else if (image.classList.contains('_3D')) {
                    image.style.display = "none";
                }
            });
        }



        images[currentIndex].scrollIntoView({ behavior: 'smooth' });
        CurrentStyle3D = !CurrentStyle3D;

    }

    button.addEventListener('mouseenter', () => {
        ChangeStyle();
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

let isScrolling = false;

function detectScrollDirection(event) {
    if (isScrolling) return;

    isScrolling = true;

    const delta = event.deltaY || event.detail || event.wheelDelta;
    const images = Array.from(document.querySelectorAll('.site-content .image-container'));

    currentIndex += delta > 0 ? 1 : -1;

    if (currentIndex > endIndex) {
        currentIndex = startIndex;
    } else if (currentIndex < startIndex) {
        currentIndex = endIndex;
    }

    images[currentIndex].scrollIntoView({ behavior: 'smooth' });
    console.log(currentIndex);

    setTimeout(function() {
        isScrolling = false;
    }, 500);
}

window.addEventListener('wheel', detectScrollDirection);

