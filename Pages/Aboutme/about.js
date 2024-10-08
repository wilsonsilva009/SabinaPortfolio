let currentIndex = 0;

var IsScrolling = false

function detectScrollDirection(event) {
    if (IsScrolling) return

    IsScrolling = true

    const delta = event.deltaY || event.detail || event.wheelDelta;

    const pages = ["#page1", "#page2", "#page3"];

    if (delta > 0) {
        currentIndex++;
    } else {
        currentIndex--;
    }

    if (currentIndex == 1){
        document.querySelector("#main-image").style.top = "131vh";
        document.querySelector("#main-image").style.left = "10%";
        document.querySelector("#main-image").style.transform = "translateX(0px)";
    }else{
        document.querySelector("#main-image").style.top = "40vh";
        document.querySelector("#main-image").style.left = "50%";
        document.querySelector("#main-image").style.transform = "translateX(-50%)";
    }
    
    
    if (currentIndex >= pages.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = pages.length - 1;
    }

    document.querySelector(pages[currentIndex]).scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        IsScrolling = false
    }, 500);
    
}



window.addEventListener('wheel', detectScrollDirection);
