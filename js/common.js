$(document).ready(function() {

	//глав слайдер
	if ($(".main-slider").length > 0) {
		var swiper = new Swiper('.main-slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			loop: false,
			observer: true, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
		    breakpoints: {
		        1200: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}

	// слайдер текстмоб
	if ($(".slider-txt").length > 0) {
		var swiper = new Swiper('.slider-txt', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			pagination: {
		        el: '.slider-txt-pagination',
		        clickable: true,
		        // type: 'progressbar', //прогрессивная полоса
		    },
		    breakpoints: {
		        1200: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	//кейсы слайдер
	if ($(".cases-slider").length > 0) {
		var swiper = new Swiper('.cases-slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: -200,
			loop: false,
			observer: true, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			centeredSlides: true,
			initialSlide: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			pagination: {
		        el: '.cases-slider-pagination',
		        clickable: true,
		        // type: 'progressbar', //прогрессивная полоса
		    },
		    breakpoints: {
		        1200: {
		          slidesPerView: 1,
		        },
		        1000: {
		          slidesPerView: 1,
		          spaceBetween: 50,
		        },
		        640: {
		          slidesPerView: 1,
		          spaceBetween: 50,
		        }
	      	}
	    });
	}


	// Конпка help
    $(window).scroll(function() {
	    if($(this).scrollTop() > 350) {
	    $('.help-knob').addClass('active');
	    } else {
	    $('.help-knob').removeClass('active');
	    }
	});


	// аккордеон
	$(".open-faq-questions").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(".toggle-faq-questions").slideUp(200);
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".open-faq-questions").removeClass("active");
            $(this).addClass("active");
        }
    });





	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask
 //    $("input[type='tel']").inputmask({
	//   mask: '+7 (999) 999 99-99',
	//   showMaskOnHover: false,
	//   autoUnmask: true,
	// });


	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});



    // Боковое меню
    $('.menuToggle').on('click', function() {
        $('body').toggleClass('none-scroll');
        $('.menu-nav').toggleClass('active');
        $('.overlay-page').toggleClass('active');
    });

    $('.close-menu-js').on('click', function() {
       $('.menu-nav').removeClass('active');
       $('body').removeClass('none-scroll');
       $('.overlay-page').removeClass('active');
    });

    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.menu-nav').removeClass('active');
        $('.menuToggle').removeClass('active');
        $(this).removeClass('active');
    });

     $('.main-nav ul li a[data-target="anchor"]').on('click', function(e) {
    	$('.menu-nav').removeClass('active');
    	$('.menuToggle').removeClass('active');
    	$('body').removeClass('none-scroll');
    	$('.overlay-page').removeClass('active');
    });


     $('.click_pop').on('click', function(){
     	$('.tariff-txt').html(
     		$(this).attr('data-header')
     		);
  	});




});




