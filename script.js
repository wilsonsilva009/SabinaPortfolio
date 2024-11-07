var CurrentStyle3D = false;
var ClickedButton = false;
var Clicked = false;
let currentIndex = 0;
let startIndex = 0;
let endIndex = 7;


document.addEventListener('DOMContentLoaded', function() {


    const images = document.querySelectorAll('.site-content div');
    const button = document.querySelector('.ambient-selector button');
    const ambientselector = document.querySelector('.ambient-selector');

    function MainButtonClicked(){
        Clicked = true;
        if (!CurrentStyle3D) {

            currentIndex = 0;
            startIndex = 0;
            endIndex = 7; 

            images.forEach(image => {
                if (image.classList.contains('_2D')) {
                    image.style.display = "none";
                } else if (image.classList.contains('_3D')) {
                    image.style.display = "inherit";
                }
            });
        } else {

            currentIndex = 8;
            startIndex = 8;
            endIndex = 18;

            images.forEach(image => {
                if (image.classList.contains('_2D')) {
                    image.style.display = "inherit";
                } else if (image.classList.contains('_3D')) {
                    image.style.display = "none";
                }
            });
        }
    }

    function ChangeStyle(){

        if (CurrentStyle3D){
            button.style.animation = "none";
            void button.offsetWidth;
            button.style.animation = "MainButton2D .7s ease-in-out backwards reverse";

            button.textContent = "3D";
            
        }else{
            button.style.animation = "none";
            void button.offsetWidth;
            button.style.animation = "MainButton2D .7s ease-in-out forwards";

            button.textContent = "2D";
            
        }

        images[currentIndex].scrollIntoView({ behavior: 'smooth' });
        CurrentStyle3D = !CurrentStyle3D;

    }

    ambientselector.addEventListener('mouseenter', () => {
        ChangeStyle();
    });

    ambientselector.addEventListener('mouseleave', () => {
        if (!Clicked){
            ChangeStyle();
        } else {
            Clicked = false;
        }
    });    

    button.addEventListener('click', () => {
        MainButtonClicked();
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

