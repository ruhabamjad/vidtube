let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main-content");

menuIcon.addEventListener("click", function(){
    sideBar.classList.toggle("small-sidebar");
    mainContent.classList.toggle("main-increase");
});