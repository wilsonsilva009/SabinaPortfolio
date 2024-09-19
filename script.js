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
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(8rem)';
    }
    else
    {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(6.5rem)';
    }

    MenuOpen = !MenuOpen;
}