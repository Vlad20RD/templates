/*______________________________Гамбургер______________________________*/
$(".burg").click(function(){
    $(".burg div span").toggleClass("close");
    $(".menu").toggleClass("act");
});

$(".burg").click(function(){
    $(".menu").addClass("sdvig");
});

$(".burg_close").click(function(){
    $(".menu").removeClass("sdvig");
});


/*______________________________Появление бэкграунда шапки______________________________*/

$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop()>0){
            $("header").addClass("add_fon");
        }
        else{
            $("header").removeClass("add_fon");
        }
    });

    if($(window).scrollTop()>0){
        $("header").addClass("add_fon");
    }
});





/*______________________________Активный пункт меню______________________________*/
$(function() {
    $('.menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});




/*______________________________ПРЕЛОАДЕР______________________________*/

document.body.onload = function(){
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 0);
};


/*______________________________СЛАЙДЕР______________________________*/

$(document).ready(function(){
    $(".client_slider").slick({
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true,
        swipe: true
    });
});


/*______________________________АККАРДЕОН______________________________*/

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



/*______________________________параллакс______________________________*/

$(window).scroll(function(){
    var sp = $(window).scrollTop();

    $(".blog_first").css({
        "background-position-y" : sp/2 + "px"
    });
});
