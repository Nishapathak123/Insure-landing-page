var navItems = document.querySelector(".nav-items");
var burger = document.querySelector(".hamburger");


burger.addEventListener('click', function(){
    navItems.classList.toggle('open');
    burger.classList.toggle('isactive');
    document.body.classList.toggle('nav-open')
})