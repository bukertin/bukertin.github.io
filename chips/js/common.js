$(function(){var scrollTop;var windowWidth=$(window).width();var ingredientsBlock=$('.ingredients').offset().top;$(window).on('resize',function(){windowWidth=$(window).width();});$(window).on('scroll',function(){scrollTop=$(this).scrollTop();if(scrollTop>5){$('.navLogo').addClass('navFixed');$('.nav__item').addClass('navFixedLinks');$('.logo').addClass('logoMin');}else{$('.navLogo').removeClass('navFixed');$('.nav__item').removeClass('navFixedLinks');$('.logo').removeClass('logoMin');}if(scrollTop>1&&windowWidth<992){$('.logo').hide();}else{$('.logo').show();}if(scrollTop>ingredientsBlock+200){$('.barra-nivel').each(function(){var valorLargura=$(this).data('nivel');$(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");$(this).animate({width:valorLargura},2000);});}if($(window).scrollTop()>305){$('.up').addClass('up-toggle')}else{$('.up').removeClass('up-toggle')}});$('.up').on('click',function(e){$('body, html').animate({scrollTop:0},1000)});$('.hiddenMenu').on('click',function(){$('.hiddenMenu ul').slideToggle(150);})
$(".slider").owlCarousel({items:1,dots:false,nav:true,autoplay:true,loop:true,navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]});$(".customersWrap").owlCarousel({items:1,margin:0,responsive:{992:{items:2,margin:20,dots:true,autoplay:true,loop:true}}});$('a[data-rel^=lightcase]').lightcase();var show=true
$(window).on('scroll',function(){if(!show)return false;var w_top=$(window).scrollTop();var e_top=$('.counters').offset().top;if(w_top+360>e_top){$('.counter__nums').spincrement({duration:2000,thousandSeparator:','});show=false}});google.maps.event.addDomListener(window,'load',init);function init(){var mapOptions={zoom:11,center:new google.maps.LatLng(40.6700,-73.9400),styles:[{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]};var mapElement=document.getElementById('map');var map=new google.maps.Map(mapElement,mapOptions);var marker=new google.maps.Marker({position:new google.maps.LatLng(40.6700,-73.9400),map:map,title:'Snazzy!',icon:'img/spotlight-poi2.png',animation:google.maps.Animation.BOUNCE});}$('.nav__list a').mPageScroll2id({scrollSpeed:700,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",keepHighlightUntilNext:true});});