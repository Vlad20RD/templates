/*_____________________________гамбургер_____________________________*/
$(".shapka .burg").click(function(){
    $(".shapka .menu").toggleClass("active");
});


$(".shapka .menu .close").click(function(){
    $(".shapka .menu").removeClass("active");
});



/*__________________активный пункт меню_____________________________*/

$(function () {
    $('.menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});



/*______________________________прелоадер______________________________*/

document.body.onload = function(){
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 0);
};



/*______________________________owl sliders______________________________*/

$(document).ready(function(){
    $("#slider_home").owlCarousel({
        items: 1, //количество слайдов
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag: false,
        mouseDrag: false
    });
});


$(document).ready(function(){
    $("#slider_fourth_section").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 400,
        autoplayHoverPause: true
    });
});


$(document).ready(function(){
    $("#slider_eighth_section").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 400,
        autoplayHoverPause: true
    });
});

/*________________________________fancybox______________________________*/

$(function() {
    $("[data-fancybox]").fancybox({
        loop: true,
        infobar: false,
        thumbs: false,
        slideShow: false
    });
});



/*________________WOW______________*/
new WOW().init();


/*________________________________accordion______________________________*/

$(document).ready(function(){
    $('.accordion_title').click(function(){
        $(this).addClass('sign').next().slideDown();
        $('.accordion_title').not(this).removeClass('sign').next().slideUp();
    });
});


/*________________________________counter________________________________*/

$(document).ready(function() {
    $('.number').counterUp({
        delay: 10,
        time: 2000
    });
});


/*__________________________________calendar_____________________________*/

$(document).ready(function() {
    $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    });
});


