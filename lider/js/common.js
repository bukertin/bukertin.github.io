$(function(){

	$('.slider1').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});

	$('.teachers__blocks').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

  
});

// var prev = document.querySelector('.prev');
// var next = document.querySelector('.next');

// var images = document.querySelectorAll('.photos img');

// var i = 0;
// next.onclick = function() {
// 	images[i].className = '';
// 	i++;
// 	if( i >= images.length ){
// 		i = 0
// 	}
// 	images[i].className = 'showed';
// }

// prev.onclick = function() {
// 	images[i].className = '';
// 	i--;
// 	if( i < 0 ){
// 		i = images.length - 1
// 	}
// 	images[i].className = 'showed';
// }

// var q;
//   $('.d').on('click', function(){
// 	var that = $(this);
// 	if(q == that) {
// 		$('.d').removeClass('cls');
// 		return;
// 	}
// 	$('.d').removeClass('cls');
	
// 	$(that).addClass('cls');
// 	q = that;
//   })












