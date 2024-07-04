let nav = document.querySelector(".header_nav");
let burger = document.querySelector(".hamburger");
let burgerFirstline = document.querySelector(".hamburger_line:nth-child(1)");
let burgerSecondline = document.querySelector(".hamburger_line:nth-child(2)");
let burgerThirdline = document.querySelector(".hamburger_line:nth-child(3)");

burger.addEventListener("click", function (){
    burgerFirstline.classList.toggle("hamburger_line-1");
    burgerSecondline.classList.toggle("hamburger_line-2");
    burgerThirdline.classList.toggle("hamburger_line-3");

    nav.classList.toggle("display_nav");
});
