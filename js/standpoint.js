$(document).ready(function(){

    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -1
        }, 800);
        // $('.collapse').removeClass('in');
    });

    // Subtle fade-in animation for the mentioned elements
    ScrollReveal().reveal('.garry_image_holder', {delay: 450});
    ScrollReveal().reveal('.s_one', {delay: 300, duration: 1200});
    ScrollReveal().reveal('.s_two', {delay: 500, duration: 1600});
    ScrollReveal().reveal('.s_three', {delay: 700, duration: 2000});
    ScrollReveal().reveal('.list_wrapper', {delay: 450});
    ScrollReveal().reveal('.work_outerbox', {delay: 300});
    ScrollReveal().reveal('.contact_form_holder', {delay: 300});









});