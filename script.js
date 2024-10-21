var CurrentStyle3D = true;

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.site-content div');
    let zIndex = 0;

    images.forEach((img, index) => {
        img.style.zIndex = ++zIndex;
    });

    const button = document.querySelector('.ambient-selector button');

    function ChangeStyle(){
        if (CurrentStyle3D){
            button.textContent = "2D";
            button.style.boxShadow = "0px 0px #0b0b0b";
            button.style.transform = "translateY(0px)"
        }else{
            button.style.boxShadow = "0px 10px #0b0b0b";
            button.style.transform = "translateY(-5px)"
            button.textContent = "3D";
        }
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

var IsScrolling = false

let currentIndex = 0;

function detectScrollDirection(event) {
    if (IsScrolling) return

    IsScrolling = true

    const delta = event.deltaY || event.detail || event.wheelDelta;
    const images = document.querySelectorAll('.site-content div');
    
    if (CurrentStyle3D){

        //images = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6"];

        images.forEach(image => {
            if (image.classList.contains('_2D')) {
                image.style.display = "none";
            } else if (image.classList.contains('_3D')){
                image.style.display = "inherit";
            }
        });

        
    } else {

        //images = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8", "#img9", "#img10", "#img11", "#img12"];

        images.forEach(image => {
            if (image.classList.contains('_2D')) {
                image.style.display = "inherit";
            } else if (image.classList.contains('_3D')){
                image.style.display = "none";
            }
        });

        
    }
    

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
