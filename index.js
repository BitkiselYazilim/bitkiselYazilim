const hamburgerOpen = document.getElementById("menu-open");
const hamburgerClose = document.getElementById("menu-close");
const hamburgerMenu = document.getElementById("hamburger-back");

hamburgerOpen.addEventListener("click", function(){
    hamburgerMenu.classList.remove("on-off-button")
});

hamburgerClose.addEventListener("click", function(){
    hamburgerMenu.classList.add("on-off-button")
});