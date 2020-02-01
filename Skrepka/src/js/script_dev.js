/*---------------Якорные ссылки------------*/
  $(".menu").on("click","a", function () {
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

/*------------------Бургер-------------------*/
$(".burg").on("click", function() {
  $(".menu").toggleClass("act");
  $(".burg").toggleClass("act");
});


/*------------Слайдер---------------------*/


$(document).ready(function(){

     $(".slider").slick({
        autoplay: true,
        autoplaySpeen: 100,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        cssEase: 'linear'
      });

    $('.slider_all').slick({
        autoplay: true,
        autoplaySpeen: 100,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });

});






document.body.onload = function(){
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 0);
}