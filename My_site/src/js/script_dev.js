/*_____________________________гамбургер_____________________________*/

$(".main_section .header .wrapper .burg .burg_wrapper").click(function(){
    $(".main_section .header").toggleClass("active");
});

/*________________________якорные ссылки____________________________*/

$(".main_section .header .menu, .main_section .content .services_section .services_section_wrapper .right_section div:nth-child(5)").on("click","a", function () {
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
});


/*__________________прогрессбар в хедере_____________________________*/

$(window).scroll(function () {
    var wTop = $(window).scrollTop(),
    dHeight = $(document).height(),
    wHeight = $(window).height(),
    scrolled = wTop / (dHeight - wHeight)*100;

    $('.progress_bar').css("width", scrolled+"%");
});

/*_________________фильтрация портфолио__________________________*/

$(document).ready(function () {
    var btn_toggle = $('.main_section .content .portfolio_section .portfolio_section_wrapper .filters .btn_toggle_filter');
    var btn_item = $('.main_section .content .portfolio_section .portfolio_section_wrapper .filters .filters_item .button');

    btn_toggle.click(function () {
        $(this).toggleClass('active');
        $('.filters_item').slideToggle(200);
    });

    btn_item.click(function () {
        var val = $(this).attr("data-filter");

        if(val == "all"){
            $('.blfil').show("100");
        }
        else{
            $('.blfil').not("."+val).hide("1000");
            $('.blfil').filter("."+val).show("1000");
        }

        $(this).addClass('active').siblings().removeClass('active');

    });
});


/*_____________________________skills_______________________________*/


$(document).ready(function () {

    var show = true;
    var countbox = ".main_section .content .skills_section .skills_section_wrapper";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            var sectLR = $('.main_section .content .skills_section .skills_section_wrapper .skills_line .left_section .skillbar .skill-bar-percent .number, .main_section .content .skills_section .skills_section_wrapper .skills_line .right_section .skillbar .skill-bar-percent .number');
            var numbCir = $('.main_section .content .skills_section .skills_section_wrapper .skills_circle .circle-container .number span:nth-child(1)');

            $(sectLR).css('opacity', '1');
            $(sectLR).spincrement({
                thousandSeparator: "",
                duration: 1500
            });

            $(numbCir).css('opacity', '1');
            $(numbCir).spincrement({
                thousandSeparator: "",
                duration: 1500
            });

            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                },1000);
            });

            $(document).ready(function () {
                var circleBar1 = new ProgressBar.Circle('#circle-container1', {
                    color: '#f37b83',
                    strokeWidth: 17,
                    trailWidth: 7,
                    trailColor: '#1c1718',
                    easing: 'easeInOut'
                });

                circleBar1.animate(0.70, {
                    duration: 1000
                });

                var circleBar2 = new ProgressBar.Circle('#circle-container2', {
                    color: '#f37b83',
                    strokeWidth: 17,
                    trailWidth: 7,
                    trailColor: '#1c1718',
                    easing: 'easeInOut'
                });

                circleBar2.animate(0.80, {
                    duration: 1000
                });

                var circleBar3 = new ProgressBar.Circle('#circle-container3', {
                    color: '#f37b83',
                    strokeWidth: 17,
                    trailWidth: 7,
                    trailColor: '#1c1718',
                    easing: 'easeInOut'
                });

                circleBar3.animate(0.60, {
                    duration: 1000
                });

                var circleBar4 = new ProgressBar.Circle('#circle-container4', {
                    color: '#f37b83',
                    strokeWidth: 17,
                    trailWidth: 7,
                    trailColor: '#1c1718',
                    easing: 'easeInOut'
                });

                circleBar4.animate(0.45, {
                    duration: 1000
                });
            });

            show = false;
        }
    });

});




/*____________________________counters___________________________________*/


$(window).ready(function () {
    $(window).on("scroll load resize", function () {
        var counter = 1;

        var countbox1 = "#home";
        var countbox2 = "#service";
        var countbox3 = "#portfolio";
        var countbox4 = "#resume";
        var countbox5 = "#skills";
        var countbox6 = "#contact";

        var smallCount = $('.main_section .header .wrapper .current_page .current_num span:nth-child(2)');
        var bigCount = $('.main_section .header .wrapper .current_page_big .current span:nth-child(2)');

        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

        var e_height1 = $(countbox1).outerHeight(); // Полная высота блока со счетчиками
        var e_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками
        var e_height3 = $(countbox3).outerHeight(); // Полная высота блока со счетчиками
        var e_height4 = $(countbox4).outerHeight(); // Полная высота блока со счетчиками
        var e_height5 = $(countbox5).outerHeight(); // Полная высота блока со счетчиками
        var e_height6 = $(countbox6).outerHeight(); // Полная высота блока со счетчиками

        var e_top1 = $(countbox1).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var e_top2 = $(countbox2).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var e_top3 = $(countbox3).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var e_top4 = $(countbox4).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var e_top5 = $(countbox5).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var e_top6 = $(countbox6).offset().top; // Расстояние от блока со счетчиками до верха всего документа

        if(w_top + e_height1 >= e_top1 + e_height1){
            counter = 1;
        }

        if(w_top + e_height2 >= e_top2 + e_height2){
            counter = 2;
        }

        if((w_top + e_height3)+100 >= e_top3 + e_height3){
            counter = 3;
        }

        if((w_top + e_height4)+100 >= e_top4 + e_height4){
            counter = 4;
        }

        if((w_top + e_height5)+100 >= e_top5 + e_height5){
            counter = 5;
        }

        if((w_top + e_height6)+200 >= e_top6 + e_height6){
            counter = 6;
        }

        $(smallCount).html(counter);
        $(bigCount).html(counter);
    });
});






/*__________________активный пункт меню_____________________________*/
/*
$(function () {
    $('.menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});

*/

/*______________________________прелоадер______________________________*/


$(window).on('load', function() { // makes sure the whole site is loaded
    $('.loader').fadeOut(); // will first fade out the loading animation
    $('.preloader').addClass('done'); // will fade out the white DIV that covers the website.
    $('body').css({'overflow':'visible'});
});

