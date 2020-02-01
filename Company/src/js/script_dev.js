/*_____________________________гамбургер_____________________________*/
$(".burg").click(function(){
    $(".shapka .menu .left").toggleClass("active");
});


$(".shapka .menu .left").click(function(){

});



/*___________________выпадающее меню_____________________________*/

$('.shapka .menu .left .item').bind("click", function () {
    if ($(window).width() <= '1200'){
        $(this).toggleClass("naved");
    }
});



/*_____________________________поиск_____________________________*/
$(document).ready(function(){
    $('.menu .right li:nth-child(1)').click(function(){
        $('.menu-item').addClass('hide-item');
        $('.search-form').addClass('active');
        $('.search-form form div i').addClass('active');
        $('#search').hide();
    });

    $('.search-form form div i').click(function(){
        $('.menu-item').removeClass('hide-item');
        $('.search-form').removeClass('active');
        $('.search-form form div i').removeClass('active');
        $('#search').show();
    });
});



/*______________________________sidemenu______________________________*/

$(document).ready(function(){

    $("header .shapka .menu .right li:nth-child(3)").click(function(){
        $(".side_menu").toggleClass("show");
        $(".site_section").addClass("side_menu_show");
    });

    $(".side_menu_close").click(function(){
        $(".side_menu").removeClass("show");
        $(".site_section").removeClass("side_menu_show");
    });

    $(".side_menu .fill").click(function(){
        $(".side_menu").removeClass("show");
        $(".site_section").removeClass("side_menu_show");
    });



    $(window).on("scroll", function(){
        $(".side_menu").removeClass("show");
        $(".site_section").removeClass("side_menu_show");
    });


    $(window).resize(function(){
        if ($(window).width() <= '1200'){
            $(".side_menu").removeClass("show");
            $(".site_section").removeClass("side_menu_show");
        }
    });

});



/*_____________появление и скрытие шапки при скроллинге_____________*/

var zero = 0;

$(window).on("scroll", function(){
    if($(window).scrollTop()>180){
        $("header").toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    }
    else{
        $("header").removeClass("hide");
    }
});



/*________________уменьшение шапки при скроллинге___________________*/


$(document).ready(function(){
    
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 180){
            $("header").addClass("little");
        }
        else{
            $("header").removeClass("little");
        }
    });

    if($(window).scrollTop() > 180){
        $("header").addClass("little");
    }

});





/*__________________активный пункт меню_____________________________*/

$(document).ready(function () {
    $('.menu .left li a').each(function () {
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



/*______________________________аккордеон_____________________________*/

$(document).ready(function () {

    $('.section2_input_select').click(function () {
        $('.list').toggleClass('active');
        $('.section2_input_select').not(this).next().removeClass('active');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".section2_input_select"); // тут указываем класс элемента
        var div2 = $(".section2_input_select div");
        var div3 = $(".section2_input_select div i");

        /* если клик был не по нашему блоку*/
        if (!div.is(e.target) && !div2.is(e.target) && !div3.is(e.target)) {
            $(".list").removeClass('active');
        }
    });
});



/*________________________________counter________________________________*/

$(document).ready(function () {

    var show = true;
    var countbox = ".home_fifth .section .block";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home_fifth .section .block .number').css('opacity', '1');
            $('.home_fifth .section .block .number').spincrement({
                thousandSeparator: "",
                duration: 1500
            });

            show = false;
        }
    });

});


/*______________________________owl sliders______________________________*/

$(document).ready(function(){
    $("#slider_home").owlCarousel({
        items: 1, //количество слайдов
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"]
    });
});


$(document).ready(function(){
    $("#slider_comments").owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
});


$(document).ready(function(){
    $("#slider_company").owlCarousel({
        items: 5, //количество слайдов
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 300,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1100:{
                items:5
            }
        }
    });
});



/*______________________________particles__________________________*/

particlesJS('background', {
    "particles": {
        "number": {
            "value": 270,
            "density": {
                "enable": false,
                "value_area": 0
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 252.52724532232722,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});



/*_______________________________параллакс слайдера____________________________*/

$(window).scroll(function(){
    var sp = $(window).scrollTop();

    $(".image_sl").css({
        "background-position-y" : sp/2 + "px"
    });
});


/*_______________прозрачность контента слайдера при скроллинге__________________*/

$(window).scroll(function(){
    var top = $(window).scrollTop();
    val_opacity = 1 - top/400;

    $(".home_first .owl-carousel .owl-stage-outer .owl-stage .owl-item .slide .content").css({
        "opacity": val_opacity
    });
    $(".home_first .owl-carousel .owl-dots").css({
        "opacity": val_opacity
    });
    $(".home_first .owl-carousel .owl-nav").css({
        "opacity": val_opacity
    });
});


/*___________________кнопка вверх___________________*/

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
