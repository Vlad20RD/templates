$(".burg").click(function(){$(".shapka .menu .left").toggleClass("active")}),$(".shapka .menu .left").click(function(){}),$(".shapka .menu .left .item").bind("click",function(){$(window).width()<="1200"&&$(this).toggleClass("naved")}),$(document).ready(function(){$(".menu .right li:nth-child(1)").click(function(){$(".menu-item").addClass("hide-item"),$(".search-form").addClass("active"),$(".search-form form div i").addClass("active"),$("#search").hide()}),$(".search-form form div i").click(function(){$(".menu-item").removeClass("hide-item"),$(".search-form").removeClass("active"),$(".search-form form div i").removeClass("active"),$("#search").show()})}),$(document).ready(function(){$("header .shapka .menu .right li:nth-child(3)").click(function(){$(".side_menu").toggleClass("show"),$(".site_section").addClass("side_menu_show")}),$(".side_menu_close").click(function(){$(".side_menu").removeClass("show"),$(".site_section").removeClass("side_menu_show")}),$(".side_menu .fill").click(function(){$(".side_menu").removeClass("show"),$(".site_section").removeClass("side_menu_show")}),$(window).on("scroll",function(){$(".side_menu").removeClass("show"),$(".site_section").removeClass("side_menu_show")}),$(window).resize(function(){$(window).width()<="1200"&&($(".side_menu").removeClass("show"),$(".site_section").removeClass("side_menu_show"))})});var zero=0;$(window).on("scroll",function(){180<$(window).scrollTop()?($("header").toggleClass("hide",$(window).scrollTop()>zero),zero=$(window).scrollTop()):$("header").removeClass("hide")}),$(document).ready(function(){$(window).on("scroll",function(){180<$(window).scrollTop()?$("header").addClass("little"):$("header").removeClass("little")}),180<$(window).scrollTop()&&$("header").addClass("little")}),$(document).ready(function(){$(".menu .left li a").each(function(){window.location.href==this.href&&$(this).addClass("active")})}),document.body.onload=function(){setTimeout(function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")},0)},$(document).ready(function(){$(".section2_input_select").click(function(){$(".list").toggleClass("active"),$(".section2_input_select").not(this).next().removeClass("active")}),$(document).mouseup(function(e){var o=$(".section2_input_select"),i=$(".section2_input_select div"),t=$(".section2_input_select div i");o.is(e.target)||i.is(e.target)||t.is(e.target)||$(".list").removeClass("active")})}),$(document).ready(function(){var n=!0,a=".home_fifth .section .block";$(window).on("scroll load resize",function(){if(!n)return!1;var e=$(window).scrollTop(),o=$(a).offset().top,i=$(window).height(),t=$(document).height(),s=$(a).outerHeight();(o<=e+850||i+e==t||s+o<i)&&($(".home_fifth .section .block .number").css("opacity","1"),$(".home_fifth .section .block .number").spincrement({thousandSeparator:"",duration:1500}),n=!1)})}),$(document).ready(function(){$("#slider_home").owlCarousel({items:1,loop:!0,dots:!0,nav:!0,autoplay:!0,autoplayTimeout:7e3,smartSpeed:700,autoplayHoverPause:!0,navText:["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"]})}),$(document).ready(function(){$("#slider_comments").owlCarousel({loop:!0,dots:!0,nav:!1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:300,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},1024:{items:3}}})}),$(document).ready(function(){$("#slider_company").owlCarousel({items:5,loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:4500,smartSpeed:300,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:3},1100:{items:5}}})}),particlesJS("background",{particles:{number:{value:270,density:{enable:!1,value_area:0}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:0,opacity_min:0,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:252.52724532232722,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),$(window).scroll(function(){var e=$(window).scrollTop();$(".image_sl").css({"background-position-y":e/2+"px"})}),$(window).scroll(function(){var e=$(window).scrollTop();val_opacity=1-e/400,$(".home_first .owl-carousel .owl-stage-outer .owl-stage .owl-item .slide .content").css({opacity:val_opacity}),$(".home_first .owl-carousel .owl-dots").css({opacity:val_opacity}),$(".home_first .owl-carousel .owl-nav").css({opacity:val_opacity})}),$(document).ready(function(){$(window).scroll(function(){100<$(this).scrollTop()?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},600),!1})});