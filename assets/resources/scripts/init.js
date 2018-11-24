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
