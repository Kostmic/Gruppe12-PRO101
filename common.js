const sidenavSlide = () => {
    const burger = document.querySelector(".burger");
    const sidenav = document.querySelector(".sidenav");
    const sidenavLinks = document.querySelectorAll(".sidenav li");
    


    burger.addEventListener('click', ()=>{
        //Toogle nav 
        sidenav.classList.toggle('sidenavActive');

        //Animate Links
        sidenavLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `sidenavLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toogle');
    });


}

sidenavSlide();

//Change background
var color = ["#F1F1F1","#51d0de", "#ff3a22","#c2dde6","#bccbde"];
var i = 0;
document.querySelector(".background").addEventListener("click",
function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
})

//Adding dark mode
var darkMode = ["#303030", "#F1F1F1"];
var y = 0;
document.querySelector(".darkMode").addEventListener("click",
function(){
    y = y < darkMode.length ? ++y : 0;
    document.querySelector("body").style.background = darkMode[y];
})
