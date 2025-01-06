var CurrentStyle3D = false;
var ClickedButton = false;
var Clicked = false;
let currentIndex = 0;
let startIndex = 0;
let endIndex = 9;


document.addEventListener('DOMContentLoaded', function() {


    const images = document.querySelectorAll('.site-content div');
    const button1 = document.querySelector('.ambient-selector button');
    const button2 = document.querySelector('.ambient-selector a');


    function MainButtonClicked(){
        Clicked = true;
        if (!CurrentStyle3D) {

            currentIndex = 0;
            startIndex = 0;
            endIndex = 9; 

            images.forEach(image => {
                if (image.classList.contains('_2D')) {
                    image.style.display = "none";
                } else if (image.classList.contains('_3D')) {
                    image.style.display = "inherit";
                }
            });
        } else {

            currentIndex = 10;
            startIndex = 10;
            endIndex = 20;

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
            button1.style.animation = "none";
            button2.style.animation = "none";
            void button1.offsetWidth;
            void button2.offsetWidth;
            button1.style.animation = "MainButton2D .7s ease-in-out backwards reverse";
            button2.style.animation = "MainButton2D .7s ease-in-out backwards reverse";

            button1.textContent = "3D";
            
        }else{
            button1.style.animation = "none";
            button2.style.animation = "none";
            void button1.offsetWidth;
            void button2.offsetWidth;
            button1.style.animation = "MainButton2D .7s ease-in-out forwards";
            button2.style.animation = "MainButton2D .7s ease-in-out forwards";

            button1.textContent = "2D";
            
        }

        images[currentIndex].scrollIntoView({ behavior: 'smooth' });
        CurrentStyle3D = !CurrentStyle3D;

    }

    button1.addEventListener('mouseenter', () => {
        ChangeStyle();
    });

    button1.addEventListener('mouseleave', () => {
        if (!Clicked){
            ChangeStyle();
        } else {
            Clicked = false;
        }
    });    

    button1.addEventListener('click', () => {
        MainButtonClicked();
    });

});


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

