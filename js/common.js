
$(function() {

	$('.mobile-menu-switch').click(function() {
		$('.main-menu > ul').slideToggle();
	})

	$('.reviews-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		groupCells: true,
		arrowShape: 'M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM61 9H1V7H61V9ZZ',
		draggable: '>1',
		adaptiveHeight: true
	});
	$('head').append('<style id="fakeparralax-style"></style>');
	$(window).bind('scroll', function () {
		y = $(window).scrollTop();
		topSection = y/3;
		topSection = Math.floor(topSection);
		
		$('#fakeparralax-style').html('.sakura-1.sakura--fakeparralax::before{top:' + topSection/2 + 'px} .sakura-2.sakura--fakeparralax::after{top:calc(26% + ' + topSection/2 + 'px)} .sakura-3.sakura--fakeparralax::before{top:' + topSection/2 + 'px} .sakura-3.sakura--fakeparralax::after{top:calc(40% - ' + topSection/2 + 'px)} .sakura-5.sakura--fakeparralax::after{top:calc(50% - ' + topSection/2 + 'px)} .sakura-6.sakura--fakeparralax::before{top:calc(50% - ' + topSection + 'px)}');
		if(topSection < 80) {$('.move-up-section').css('margin-top', -topSection)}
		
    if (y > 122) {
        $('.header--dropdown').addClass('fixed animated fadeInDown');
        $('main').addClass('fixed-header');
    } else {
				$('.header--dropdown').removeClass('fixed animated fadeInDown');
				$('main').removeClass('fixed-header');
    }
	});

	$(".parallax").scroll(function(e) {
		console.log("parallax scrolled")
		y = $(".parallax").scrollTop();
		console.log("window:" + $(window).height() + "y:" + y);

		if (y > 122) {
			$('.header--dropdown').addClass('fixed animated fadeInDown');
			$('.main-screen__block').addClass('animated fadeOutUp slow');
			$('main').addClass('fixed-header');
		} else {
			$('.header--dropdown').removeClass('fixed animated fadeInDown');
			$('.main-screen__block').removeClass('fadeOutUp');
			$('.main-screen__block').addClass('fadeInDown');
			$('main').removeClass('fixed-header');
		}

		$(".page").each(function(e) {
			var t = $(this)
				, n = t.position().top - parseFloat(t.css("marginTop").replace(/auto/, 0));
			$(this).hasClass("anim") ? y >= n + 800 ? t.addClass("active") : t.removeClass("active") : y >= n ? t.addClass("active") : t.removeClass("active")
		});
		
	});
	/*$(".parallax").scroll(function(e) {
		if (console.log("parallax scrolled"),
		y = $(".parallax").scrollTop(),
		console.log("window:" + $(window).height() + "y:" + y),
		y > $(window).height()) {
				var t = $(this).scrollTop();
				console.log("st:" + t + "upper" + upper + "downer:" + downer + "lastscroll:" + lastScrollTop),
				t > lastScrollTop ? (upper++,
				upper > 20 && ($("header[role='banner']").fadeOut("slow"),
				upper = 0,
				downer = 0)) : (downer++,
				downer > 2 && ($("header[role='banner']").fadeIn("slow"),
				upper = 0,
				downer = 0)),
				0 === t && $("header[role='banner']").fadeIn("slow"),
				lastScrollTop = t
		} else
				y > 10 ? ($(".main-logo").addClass("animOut"),
				$("header[role='banner']").fadeIn("slow")) : ($(".main-logo").removeClass("animOut"),
				$("header[role='banner']").fadeOut("slow"));
		$(".page").each(function(e) {
				var t = $(this)
					, n = t.position().top - parseFloat(t.css("marginTop").replace(/auto/, 0));
				$(this).hasClass("anim") ? y >= n + 500 ? t.addClass("active") : t.removeClass("active") : y >= n ? t.addClass("active") : t.removeClass("active")
		}),
		$("footer").each(function(e) {
				var t = $(this)
					, n = t.position().top - parseFloat(t.css("marginTop").replace(/auto/, 0))
					, i = $(".parallax").scrollTop();
				i >= n + 1e3 ? t.addClass("active") : t.removeClass("active"),
				i >= n + 1600 ? t.find(".anim").addClass("active") : t.find(".anim").removeClass("active")
		})
	});*/


	// Tabs plugin source: https://codepen.io/Vikaspatel/pen/VJGYpv
	$('.tab-menu a').on('click', function(e){
		e.preventDefault();
		$('.tab-menu li').removeClass('active-tab');
		$(this).parent('li').addClass('active-tab');

		/*tab-data*/
		var hrefdata =$(this).attr('href');
		$('.tab-data .data-content').removeClass('active-data');
		$('.tab-data .data-content'+hrefdata+'').addClass('active-data');
		$('.active-data').prevAll('.data-content').addClass('prev').removeClass('next');
		$('.active-data').nextAll('.data-content').addClass('next').removeClass('prev');
	}); 	

});
