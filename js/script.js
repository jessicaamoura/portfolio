$(document).ready(function () {

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

    if($ ('body').hasClass ('slider')){
        $('.project-image').slick({
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 1500
        });  
    }


    

    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
});