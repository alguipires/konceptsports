(function ($) {
    $(function () {
        $("#menu").load("menu.html");
        $("#footer").load("footer.html");
        //$('.sidenav').sidenav();  // ja esta sendo carregado no menu.html com uma tag <script>
        $('.parallax').parallax();

        //inicialização carousel secundario logos
        $('.carousel').carousel();

        //inicialização carousel principal superior
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });

        //set inteval
        window.setInterval(function () {
            $('.carousel').carousel('next', 1);
        }, 4000);

        $('.modal').modal();
        $('.modal').modal('open');



    }); // end of document ready
})(jQuery); // end of jQuery name space

/*
document.addEventListener('DOMContentLoaded', function () {
    var Modalelem = document.querySelector('.modal');
    var instance = M.Modal.init(Modalelem);
    instance.open();
});
*/
/*

M.AutoInit();

//window.onload
$(document).ready(function () {
    //SIDENAV COM HAMBURGER ICON MOBILE 
    $('.sidenav').sidenav();
    //CAROUSEL

    $('.carousel.carousel-slider').carousel();

    $('.carousel.carousel-slider').carousel();
    window.setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, 3000);

});
*/



// biblioteca SLICK CAROUSEL http://kenwheeler.github.io/slick/
