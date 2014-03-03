$(window).load(function() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.home').stop(true, true).fadeIn(500);
		} else {
			$('.home').stop(true, true).fadeOut(500);
		}
	});
	$('.home').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$('.ctitle').each(function() {
		var w = 960 - $(this).children('h1').width() - 38;
		$(this).children('div').width(w);
		var d = w - $(this).find('h5').width() - 40;
		$(this).find('div > div > div').width(d);
	});
	$('.filter .price .range').each(function() {
		handle = $(this).find('.ui-slider-handle');    
		var start = $(this).parent().parent().find('.min').val();
		handle.eq(0).addClass('first').append('<span>'+start+'</span>');
		var mf = handle.eq(0).find('span').width() / 2 + 4;
		handle.eq(0).find('span').css({'margin-left': -mf+'px'});
		var end = $(this).parent().parent().find('.max').val();
		handle.eq(1).addClass('second').append('<span>'+end+'</span>');
		var ms = handle.eq(1).find('span').width() / 2 + 4;
		handle.eq(1).find('span').css({'margin-left': -ms+'px'});
	});
	$('.filter .rating .range').each(function() {
		handle = $(this).find('.ui-slider-handle');
		handle.eq(0).append('<span>3</span>');
		handle.eq(1).append('<span>9</span>');
	});
	var rl = $('.reviewu .nav li.active').position();
	var rw = $('.reviewu .nav li.active').width();
	if(rm) {
        var rm = rl.left+(rw/2);
	    $('.reviewu > div > span').css({'left': rm+'px'});
    }
	$('.content .registration > div.optional').delay(150).fadeOut(0);
});
function float() {
	if ($('.header').hasClass('autorized')) {
		var headerheight = 116;
	}
	else {
		var headerheight = 79;
	}
	if ($(window).scrollTop() > headerheight) {
		$('.header').addClass('fixed');
		$('.wrapper').css({'padding-top': headerheight+'px'});
	}
	else {
		$('.header').removeClass('fixed');
		$('.wrapper').css({'padding-top': '0'});
	}
}
$(window).scroll(function(){
	float();
});
$(window).load(function(){
	float();
});
$(document).ready(function() {
	$('.index .carousel').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutCubic'
	});
	$('.categories > div > div > div p, .useri .information .description .about > div, .reviewu > div, .reviewu > .leave > div > .prepared > div').append('<span></span>');
	$('.reviewu > .leave').append('<button class="close"></button>');
	$('select, input[type="checkbox"], input[type="file"]').uniform();
	$('.filter p.list span em').click(function() {
		$(this).parent().fadeOut(0);
		return false;
	});
	$('.sort .view ul li').click(function() {
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.pagination .quantity li a').click(function() {
		$(this).parents('.quantity').children().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	$('.userc > div h5 span.like, .taski h1 .like, .offers > div > .td > div.more h4 .like').click(function() {
		$(this).toggleClass('active');
		return false;
	});
//	$('.filter .price .range').slider({
//		min: 0,
//		max: 10000,
//		step: 100,
//		values: [1000,7000],
//		range: true,
//		stop: function(event, ui) {
//			$(this).parent().parent().find('.min').val($(this).slider('values',0));
//			$(this).parent().parent().find('.max').val($(this).slider('values',1));
//			handle = $(this).find('.ui-slider-handle');
//			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
//			var mf = handle.eq(0).find('span').width() / 2 + 4;
//			handle.eq(0).find('span').css({'margin-left': -mf+'px'});
//			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
//			var ms = handle.eq(1).find('span').width() / 2 + 4;
//			handle.eq(1).find('span').css({'margin-left': -ms+'px'});
//		},
//		slide: function(event, ui){
//			$(this).parent().parent().find('.min').val($(this).slider('values',0));
//			$(this).parent().parent().find('.max').val($(this).slider('values',1));
//			handle = $(this).find('.ui-slider-handle');
//			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
//			var mf = handle.eq(0).find('span').width() / 2 + 4;
//			handle.eq(0).find('span').css({'margin-left': -mf+'px'});
//			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
//			var ms = handle.eq(1).find('span').width() / 2 + 4;
//			handle.eq(1).find('span').css({'margin-left': -ms+'px'});
//		}
//	});
	$('.filter .price').each(function() {
		$(this).find('.min').change(function(){
			var value1 = $(this).parents('.price').find('.min').val();
			var value2 = $(this).parents('.price').find('.max').val();
			if(parseInt(value1) > parseInt(value2)){
				value1 = value2;
				$(this).parents('.price').find('.min').val(value1);
			}
			$(this).parents('.price').find('.range').slider('values',0,value1);
			handle = $(this).parents('.price').find('.ui-slider-handle');    
			handle.eq(0).empty().append('<span>'+$(this).parents('.price').find('.range').slider("values",0)+'</span>');
			var mf = handle.eq(0).find('span').width() / 2 + 4;
			handle.eq(0).find('span').css({'margin-left': -mf+'px'});
		});
		$(this).find('.max').change(function(){
			var value1 = $(this).parents('.price').find('.min').val();
			var value2 = $(this).parents('.price').find('.max').val();
			if (value2 > 10000) { value2 = 10000; $(this).parents('.price').find('.max').val(10000)}
			if(parseInt(value1) > parseInt(value2)){
				value2 = value1;
				$(this).parents('.price').find('.max').val(value2);
			}
			$(this).parents('.price').find('.range').slider('values',1,value2);
			handle = $(this).parents('.price').find('.ui-slider-handle');    
			handle.eq(1).empty().append('<span>'+$(this).parents('.price').find('.range').slider("values",1)+'</span>');
			var ms = handle.eq(1).find('span').width() / 2 + 4;
			handle.eq(1).find('span').css({'margin-left': -ms+'px'});
		});
	});
//	$('.filter .rating .range').slider({
//		min: 0,
//		max: 10,
//		values: [3,9],
//		range: true,
//		stop: function(event, ui) {
//			handle = $(this).find('.ui-slider-handle');
//			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
//			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
//		},
//		slide: function(event, ui) {
//			handle = $(this).find('.ui-slider-handle');
//			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
//			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
//		}
//	});
	var prepared = $('.reviewu > .leave > div > .prepared > div > div');
	prepared.hide();
	$('.reviewu > .leave > div > .prepared ul li a').click(function () {
		prepared.hide();
		prepared.filter(this.hash).stop(true, true).fadeIn(0);
		$(this).parents('ul').find('li').removeClass('active');
		$(this).parent().addClass('active');
		var pl = $(this).parent('li').position();
		var pw = $(this).parent('li').width();
		var pm = pl.left+(pw/2)-12;
		$(this).parents('.prepared').children('div').children('span').css({'left': pm+'px'});
		return false;
	});
	$('.reviewu > .leave > div > .prepared > div > div').filter(':first').fadeIn(0);
	$('.reviewu > .leave > div > .prepared ul li:first-child').addClass('active');
	$('.reviewu > .leave > .close').click(function() {
		$(this).parent().fadeOut(0);
		return false;
	});
	$('.reviewu > div h5 .leave').click(function() {
		$(this).parents('.reviewu').children('.leave').fadeIn(0);
		return false;
	});
	$('.taski p.more .show a').toggle( 
		function() {
			$(this).parents('.taski').find('div.more').fadeIn(0);
			$(this).empty().text('Свернуть');
			return false;
		},
		function() {
			$(this).parents('.taski').find('div.more').fadeOut(0);
			$(this).empty().text('Показать полностью');
			return false;
		}
	);
	$('.offers > div > .td p.more span').click(function() {
		$(this).parents('.td').addClass('active');
		return false;
	});
	$('.offers > div > .td p.less span').click(function() {
		$(this).parents('.td').removeClass('active');
		return false;
	});
//	$('.ratingsmall').raty({
//		number: 10,
//		width: 222,
//		readOnly: true,
//		path: 'img/rate_small',
//		score: function() {
//			return $(this).attr('data-score');
//		}
//	});
//	$('.ratingbig').raty({
//		number: 10,
//		width: 422,
//		readOnly: false,
//		path: 'img/rate_big',
//		score: function() {
//			return $(this).attr('data-score');
//		}
//	});
	$('.reviewu > div:last-child > div').filter(':last').children('div').css({'padding': '0', 'margin': '0 0 -9px', 'background': 'none'});
	$('.taskc > div .information ul li:last-child, .index .carousel .task > div ul li:last-child').css({'padding-right': '0', 'margin-right': '0', 'background': 'none'});
	$('.categories ul > li > ul  > li:last-child a').css({'text-decoration': 'underline'});
	$('.categories ul > li > ul  > li:last-child a:hover').css({'text-decoration': 'none'});
	$('.structure ul li:nth-child(2n)').css({'background-position': 'right 30px'});
	$('.structure ul li:nth-child(2n) > img').css({'left': 'auto', 'right': '96px'});
	$('.structure ul li:nth-child(2n) div').css({'padding': '0 642px 0 0', 'background': 'url("../img/structure_div_r.png") no-repeat 327px 98px'});
	$('.benefits ul li:nth-child(1)').css({'background': 'url("../img/benefits_li_first.png") no-repeat left 6px'});
	$('.benefits ul li:nth-child(2)').css({'background': 'url("../img/benefits_li_second.png") no-repeat left 6px'});
	$('.benefits ul li:nth-child(3)').css({'background': 'url("../img/benefits_li_third.png") no-repeat left 6px'});
	/* Added 09 Jan 2014 */
	$('.header .popup .form .tip, .header .popup .options > div > div').append('<span></span>');
	$('.header .popup').append('<span class="arrow"></span><span class="close"></span>');
	$('.header .user .login a').click(function(event) {
		$('.header .popup.registration').slideUp(0);
		$('.header .popup.login').slideToggle(0);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
		//$('html').one('click',function() {
		//	$('.header .popup').slideUp(0);
		//	$('.header .user li').removeClass('active');
		//});
		//event.stopPropagation();
		//return false;
	});
	$('.header .user .registration a').click(function(event) {
		$('.header .popup.login').slideUp(0);
		$('.header .popup.registration').slideToggle(0);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
		//$('html').one('click',function() {
		//	$('.header .popup').slideUp(0);
		//	$('.header .user li').removeClass('active');
		//});
		//event.stopPropagation();
		//return false;
	});
	$('.header .popup .close').click(function() {
		$(this).parent().slideUp(0);
		$('.header .user li').removeClass('active');
		return false;
	});
	$('.header .popup .options h3').click(function() {
		var current = $(this).attr('class');
		$(this).parents('.options').fadeOut(0);
		$(this).parents('.popup').children('.form.'+current).fadeIn(0);
		return false;
	});
	$('.header .popup .form .another a').click(function() {
		$(this).parents('.form').fadeOut(0);
		$(this).parents('.form').siblings('.form').fadeIn(0);
		return false;
	});
	$('.taskadd > div > div p.list span em, .registration > div > div p.list span em').bind('click', function() {
		$(this).parent().fadeOut(0);
		return false;
	});
	$('.taskadd > div > div .files li').append('<em></em>');
	$('.taskadd > div > div .files li em').click(function() {
		$(this).parent().fadeOut(0);
		return false;
	});
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть', 
		prevText: '&#x3c;Пред', 
		nextText: 'След&#x3e;', 
		currentText: 'Сегодня', 
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
		'Июл','Авг','Сен','Окт','Ноя','Дек'], 
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
		dateFormat: 'dd.mm.yy', 
		firstDay: 1, 
		isRTL: false 
	}; 
	$.datepicker.setDefaults($.datepicker.regional['ru']); 
	$('div.calendar input.data').datepicker();
	$('.taskadd > div > div p:first-child').each(function() {
		var ph = $(this).height();
		if (ph > 27) {
			$(this).css({'margin-top': '-8px'});
		}
	});
	$('.registration > div > div .description, .registration > div .files ul li').append('<em></em>');
	$('.taskadd > div.employer .tip p:last-child').css({'margin-bottom': '0 !important'});
	
	$('.registration div.legal').hide();
    $('.registration select.type').change(function() {
		if( $(this).val() == 'legal') {
            $('.registration div.legal').show();
		}
		if( $(this).val() == 'individual') {
            $('.registration div.legal').hide();
		}
    });	
    $('.content .registration > div > div.performer p input[type="checkbox"]').change(function() {
        if($(this).is(':checked')) {
            $('.content .registration > div.optional').show();
        }
        else {
            $('.content .registration > div.optional').hide();
		}		
    });
	$('.content .registration > div.optional').filter(':first').css({'margin-top': '-43px', 'background': 'none'});
	$('.modal').append('<span class="close"></span>');
	$('.modal').append('<span class="arrow"></span>');
	$('.modal .close').click(function() {
		$(this).parent().stop(true, true).fadeOut(150);
		return false;
	});
	$('.specialization > p > a').bind('click', function() {
		$(this).parents('.specialization').find('.modal').fadeIn(150);
		/*$(this).parents('.specialization').find('p.list span').each(function() {
			var addedspec = $(this).text();
			$(this).parents('.specialization').find('.specselect > ul > li > ul > li:contains("'+addedspec+'")').find('input[type="checkbox"]').prop('checked', true);
			$(this).parents('.specialization').find('.specselect > ul > li > ul > li:contains("'+addedspec+'")').find('.checker span').addClass('checked');
		});*/
		return false;
	});
	$('.specselect > ul > li > ul > li > span').toggle(
		function() {
			$(this).parent().find('input[type="checkbox"]').prop('checked', true);
			$(this).parent().find('.checker span').addClass('checked');
			return false;
		},
		function() {
			$(this).parent().find('input[type="checkbox"]').prop('checked', false);
			$(this).parent().find('.checker span').removeClass('checked');
			return false;
		}
	);
	$('.specselect > div button.select').bind('click', function() {
		$(this).parents('.specselect').find('h6').remove();
		var specmax = 10;
		var specnum = $(this).parents('.specselect').find('input[type="checkbox"]:checked').size();
		if (specnum > specmax) {
			var specdiff = specnum-specmax;
			$(this).parents('.specselect').append('<h6>Вы превысили максимальное допустимое число специализаций! Для продолжения избавьтесь по меньшей мере от '+specdiff+' шт.</h6>');
		}
		else {
			$(this).parents('.specialization').find('p.list').empty();
			$(this).parents('.specselect').find('input[type="checkbox"]:checked').each(function() {
				var selspec = $(this).parent().parent().parent().text();
				$(this).parents('.specialization').find('p.list').append('<span>'+selspec+'<em></em></span>');
			});
			$(this).parents('.modal').stop(true, true).fadeOut(150);
			$(this).parents('.specialization').find('p.list span em').bind('click', function() {
				$(this).parent().fadeOut(0);
				return false;
			});
		}
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.col1 .catspec > div > ul > li.sub > ul').hide();
	$('.col1 .catspec > div > ul > li.sub > a').click(function() {
		$(this).parent().children('ul').slideToggle(0);
		return false;
	}).filter(':first').click();
	$('.col1 .catspec > div').jScrollPane({
		verticalDragMinHeight: 45,
		verticalDragMaxHeight: 45,
		horizontalDragMinWidth: 45,
		horizontalDragMaxWidth: 45,
		autoReinitialise: true
	});
});