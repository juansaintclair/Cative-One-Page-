/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global  $, Pace */

$(function () {

    $("#sliderQuemSomos").owlCarousel({
        singleItem: true,
        pagination: false,
        transitionStyle: 'fade',
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,
        pagination:	true,
        autoPlay:5000
    });
    
      $("#container-sliderCuidarEmpresa").owlCarousel({
        singleItem: false,
        pagination: false,
        transitionStyle: 'fade',
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,
        pagination:	true,
        autoPlay:3000
    });
    
     $("#carousel-tecnologias").owlCarousel({
        singleItem: false,
        pagination: false,
        transitionStyle: 'fade',
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,
        pagination:	true,
        autoPlay:3000
    });



    //Parallax
    $('body').jKit();
    $('.parallax-container').jKit('parallax', { 'strength': '3', 'axis': 'both' });
    
    //Facebook
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3&appId=1490439691210886";
		fjs.parentNode.insertBefore(js, fjs);
	} (document, 'script', 'facebook-jssdk'));


    //Hover do "Não Perca Tempo"
    $('#NaoPercaTempo').mouseover(function(){
        $(this).addClass('container-nao-perca-tempo-hover');
        $(this).removeClass('container-nao-perca-tempo');
    });
    $('#NaoPercaTempo').mouseleave(function(){
        $(this).removeClass('container-nao-perca-tempo-hover');
        $(this).addClass('container-nao-perca-tempo');
    });

	//Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
      }
    });
   
   
    var targetOffset = $(".effect-Down").offset().top  ;

    var $w = $(window).scroll(function(){
        if ( $w.scrollTop() > targetOffset ) {   
          $('.gc-bg').css('background-position','right 100px top 100px');
        } 
        else {
          $('.gc-bg').css('background-position','right 80px top 100px');
        }
    });
    
    var targetOffset2 = $(".effectUp").offset().top  ;

    var $w2 = $(window).scroll(function(){
        if ( $w2.scrollTop() > targetOffset2 ) {   
          $('.gc-bg').css('background-position','right 80px top 100px');
        } 

    });
 
 

   //Scroll da logo para o topo
   $('.logo').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
   
   // Menu Scroll
   
	$(window).scroll(function () {
        if($(this).scrollTop() > 100)
        {
            if (!$('.menu-fixo').hasClass('menu-fixed'))
            {
                $('.menu-fixo').stop().addClass('menu-fixed').css('top', '-50px').animate(
                    {
                        'top': '0px'
                    }, 500);
            }
        }
        else
        {
            $('.menu-fixo').removeClass('menu-fixed');
        }
        
    });
	
   
   
});

