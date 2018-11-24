(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();


        //inicialização carousel logos
        $('.carousel').carousel();

        //inicialização carousel principal superior
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });
        /*
                //inicialização carousel logos
                $('.carousel').carousel();
        */
        //set inteval para ambos carousel
        window.setInterval(function () {
            $('.carousel').carousel('next');
        }, 3000);

    }); // end of document ready
})(jQuery); // end of jQuery name space


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
