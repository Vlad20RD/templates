function divination(){var e=$(".divination_block").attr("data-accordion");$(".divination_block_title").bind("click",function(){"close"==e?($(".divination_block_text").slideUp(),$(".divination_block_text").hasClass("active")?$(".divination_block_text").toggleClass("active"):".divination_block_text".removeClass("active")):$(e).toggleClass("active"),$(this).next(".divination_block_text").not(":animated").slideToggle()})}$(".burg").click(function(){$(".burg div span").toggleClass("close"),$(".menu").toggleClass("act")}),$(".burg").click(function(){$(".menu").addClass("sdvig")}),$(".burg_close").click(function(){$(".menu").removeClass("sdvig")}),$(window).on("scroll",function(){0<$(window).scrollTop()?$("header").addClass("add_fon"):$("header").removeClass("add_fon")}),$(".menu").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),i=$(o).offset().top-50+"px";$("body,html").animate({scrollTop:i},1e3)}),$(".text_kolena").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),i=$(o).offset().top-50+"px";$("body,html").animate({scrollTop:i},1e3)}),divination(),$(".img-slide").slick({autoplay:!0,autoplaySpeed:7e3,arrows:!1,dots:!1,fade:!0,speed:2e3,infinite:!0,cssEase:"ease-in-out",loop:!0,pauseOnFocus:!1,pauseOnHover:!1}),$(".slider-reviews").slick({infinite:!0,pauseOnFocus:!1,pauseOnHover:!1,slidesToShow:1,slidesToScroll:1,arrow:!0,dots:!1,swipe:!1}),$(function(){$(".menu ul li a").each(function(){window.location.href==this.href&&$(this).addClass("active")})}),document.body.onload=function(){setTimeout(function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")},0)};