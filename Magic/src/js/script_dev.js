/*------------------Гамбургер----------------*/
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


/*----------------Появление бэкграунда шапки-----------------------*/
$(window).on("scroll", function(){
    if($(window).scrollTop()>0){
        $("header").addClass("add_fon");
    }
    else{
        $("header").removeClass("add_fon");
    }
})


/*---------------Якорные ссылки------------*/
  $(".menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = ($(id).offset().top) - 50 +'px'; 
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });


$(".text_kolena").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = ($(id).offset().top) - 50 +'px';
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
});
/*---------------------Уход----------------*/
function divination(){
	var data = $(".divination_block").attr("data-accordion");

	$(".divination_block_title").bind("click", function(){
		if(data == "close"){
			$(".divination_block_text").slideUp();
			if($(".divination_block_text").hasClass("active")){
				$(".divination_block_text").toggleClass("active");
			}
			else{
				(".divination_block_text").removeClass("active");
			}
		}
		else{
			$(data).toggleClass("active");
		}
		$(this).next(".divination_block_text").not(":animated").slideToggle();
	})
}
divination();




$(".img-slide").slick({
	autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 2000,
    infinite: true,
    cssEase: 'ease-in-out',
    loop: true,
    pauseOnFocus: false,
    pauseOnHover: false
});


$(".slider-reviews").slick({
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots: false,
    swipe: false
});



/*-------------------------Активный пункт меню---------------------*/
$(function () {
    $('.menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
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