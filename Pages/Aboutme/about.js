let currentIndex = 0;

var IsScrolling = false

function detectScrollDirection(event) {
    if (IsScrolling) return

    IsScrolling = true

    const delta = event.deltaY || event.detail || event.wheelDelta;

    const pages = ["#page1", "#page2"];

    if (delta > 0) {
        currentIndex++;
    } else {
        currentIndex--;
    }
    
    if (currentIndex >= pages.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = pages.length - 1;
    }

    
    if (currentIndex == 0){
        document.getElementById("pagesdisplay1").style.backgroundColor = "white";
        document.getElementById("pagesdisplay1").style.transform = "scale(1.1)";

        document.getElementById("pagesdisplay2").style.backgroundColor = "transparent";
        document.getElementById("pagesdisplay2").style.transform = "scale(1)";
    }else{
        document.getElementById("pagesdisplay1").style.backgroundColor = "transparent";
        document.getElementById("pagesdisplay1").style.transform = "scale(1)"
        ;
        document.getElementById("pagesdisplay2").style.backgroundColor = "white";
        document.getElementById("pagesdisplay2").style.transform = "scale(1.1)";
    }

    document.querySelector(pages[currentIndex]).scrollIntoView({ behavior: 'smooth' });

    setTimeout(function() {
        IsScrolling = false
    }, 500);
    
}

window.addEventListener('wheel', detectScrollDirection);


function ClickButton(buttonClicked) {


    buttonClicked.style.setProperty('--left-position', '125%');

    switch (buttonClicked.id){

        case "button1":
            document.getElementById("description").innerHTML = "Hello! My name is Sabina, and I’m a passionate 3D Character Artist with a degree in Creative Media.<br><br>I thrive on crafting unique and immersive characters that bring stories to life. I specialize in creating high-quality assets optimized for video games.<br><br>I’m constantly seeking new challenges that push my artistic and technical boundaries. When I’m not creating characters, you’ll likely find me drawing inspiration from movies, gaming, or sketching ideas for my next project.";
            break;
        
        case "button2":
            document.getElementById("description").innerHTML = `
            I am dedicated to continuously improving the quality and creativity of my work through intensive learning and practice. My core expertise lies in the entire character creation pipeline. This includes:<br><br>
            
                <ul>
                    <li>Sculpting & Modeling: Mastery in creating detailed, high-poly sculpts and optimizing them into efficient low-poly models suitable for real-time applications</li>
                    <li>Retopology & UV Mapping: Proficient in creating clean, production-ready topology and efficient UV layouts for seamless texturing</li>
                    <li>Texturing & Baking: Skilled in generating realistic and stylized textures using advanced techniques, as well as baking maps for high-quality results</li>
                    <li>Rigging & Animation Prep: Experienced in rigging characters for animation, ensuring functionality and adaptability</li>
                    <li>Rendering: Capable of producing stunning renders to showcase characters in diverse settings, from concept showcases to in-engine previews</li>
                </ul><br>

            
            I am also proficient in multiple game engines, including Unreal Engine 5 (UE5), Unity, and Godot, enabling seamless integration of assets into interactive environments. I am proficient in using version control systems like GitHub to collaborate with team members effectively. My adaptability allows me to tailor my work to meet specific project requirements, whether working independently or within a collaborative team.
                `;
            break;

        case "button3":
            document.getElementById("description").innerHTML = `
            Find out more about me:<br><br>

            <div class="contact-links"><img src="Images/Github.png" width="50px"><a href="https://github.com/kenonash" target="_blank">https://github.com/kenonash</a></div>
            <div class="contact-links"><img src="Images/sketchfab.svg" width="50px"><a href="https://sketchfab.com/sabinapawlow" target="_blank">https://sketchfab.com/sabinapawlow</a></div>
            <div class="contact-links"><img src="Images/artstation.webp" width="50px"><a href="https://www.artstation.com/kenonahs" target="_blank">https://www.artstation.com/kenonahs</a></div>
            `;
            break;
        
    }


    setTimeout(function() {
        buttonClicked.style.setProperty('--opacity', '0');
        buttonClicked.style.setProperty('--left-position', '-25%');
    }, 500);


    setTimeout(function() {
        buttonClicked.style.setProperty('--opacity', '1');
    }, 1000);
    
}

function ShowPollaroid(){
    const pollaroid = document.getElementById("polaroid-holder");
    const skills_caroussel = document.getElementById("skills-caroussel");

    pollaroid.style.display = "flex";
    skills_caroussel.style.display = "none";
}

function ShowSkills(){
    const pollaroid = document.getElementById("polaroid-holder");
    const skills_caroussel = document.getElementById("skills-caroussel");

    pollaroid.style.display = "none";
    skills_caroussel.style.display = "flex";
}

/*

var holder1_val = 0;
var holder2_val = 0;
var holder3_val = 0;
var holder1_index = 1;
var holder2_index = 1;
var holder3_index = 1;
function ArrowClicked(arrowClicked) {
    var holder = arrowClicked.parentElement.parentElement.id;
    var direction = arrowClicked.id;
    var imgcontainer = document.querySelector("#" + holder + ">.holder-imgs");
    var size = imgcontainer.children.length;


    if (direction == "right"){
        if (holder3_index == size - 2) return;
        holder3_index += 1;
        holder3_val -= 190;
    }else{
        if (holder3_index == 1) return;
        holder3_index -= 1;
        holder3_val += 190;
    }

    imgcontainer.style.transform = `translateX(${holder3_val}px)`;
}
    
*/



