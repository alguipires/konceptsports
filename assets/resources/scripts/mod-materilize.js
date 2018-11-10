M.AutoInit();

//SIDENAV COM HAMBURGER ICON MOBILE 
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//CAROUSEL
$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        transition: 200,
        shift: 50
    });
});
