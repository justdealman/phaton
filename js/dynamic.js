﻿$(window).load(function() {
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
	/*$('.ctitle').each(function() {
		var w = 960 - $(this).children('h1').width() - 38;
		$(this).children('div').width(w);
		var d = w - $(this).find('h5').width() - 40;
		$(this).find('div > div.description > div').width(d);
	});*/
	$('.filter .price .range').each(function() {
		handle = $(this).find('.ui-slider-handle');    
		var start = $(this).parent().parent().find('.min').val();
		handle.eq(0).addClass('first').append('<span>'+start+'</span>');
		var end = $(this).parent().parent().find('.max').val();
		handle.eq(1).addClass('second').append('<span>'+end+'</span>');
	});
	$('.filter .rating .range').each(function() {
		handle = $(this).find('.ui-slider-handle');
		handle.eq(0).append('<span>3</span>');
		handle.eq(1).append('<span>9</span>');
	});
	$('.reviewu div#reviews, .reviewu div#tasks, .reviewu div#portfolio').each(function() {
		var rl = $(this).parent().find('.nav li').filter('.'+$(this).attr('id')).position();
		var rw = $(this).parent().find('.nav li').filter('.'+$(this).attr('id')).width();
		var rm = rl.left+(rw/2);
		$(this).children('span').css({'left': rm+'px'});
		$(this).children('span').fadeIn(150);
	});
	/*$('.reviewu .leave').each(function() {
		var rl = $(this).parent().find('.nav li').filter(':first').position();
		var rw = $(this).parent().find('.nav li').filter(':first').width();
		var rm = rl.left+(rw/2);
		$(this).children('span').css({'left': rm+'px'});
		$(this).children('span').fadeIn(150);
	});*/
    if(!$('.content .userform > div > div.performer p input[type="checkbox"]').is(':checked')) {
	    $('.content .userform > div.optional').delay(150).fadeOut(0);
    }
});
function float() {
	if ($('.header').hasClass('autorized')) {
		var headerheight = 115;
	}
	else {
		var headerheight = 67;
	}
	if ($(window).scrollTop() > headerheight) {
		$('.header').addClass('fixed');
		$('.wrapper').css({'padding-top': headerheight+18+'px'});
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
	/*$('.dialog > div').each(function() {
		if ( $(this).height() > 65 || $(this).hasClass('answer') ) {
			$(this).find('.photo, .name').css({'vertical-align': 'top'});
			var nh = (51 - $(this).find('.name').height() ) / 2;
			$(this).find('.name').css({'margin-top': nh+'px'});
		}
	});*/
});
$(document).ready(function() {
	$('.dialog h6 a').bind('click', function() {
        var tempForm = $(this).parent().parent().next('.answer.temporary');
        $('.answer').hide();
        tempForm.slideDown();
        $('.answer.temporary input[type="checkbox"]').uniform();

		return false;
	});
	$('.dialog > div textarea').keyup(function(e) {
		while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css('borderTopWidth')) + parseFloat($(this).css('borderBottomWidth'))) {
			$(this).height($(this).height()+1);
		};
	});
	/*$('.dialog > div').each(function() {
		var tw = 576-$(this).find('.data').width();
		if ( $(this).hasClass('response') ) {
			tw = tw - 20;
		}
		$(this).find('.text').css({'width': tw+'px'});
	});*/
	$('.dialog.message > div.new').each(function() {
		$(this).prev().css({'background': '#ffffff'});
	})
	$('.dialog.message > div:last-child').each(function() {
		$(this).css({'background': '#ffffff'});
	})
	$('.dialog.message > div').not(':last, .new').hover(
		function() {
			$(this).prev().css({'background': 'none'});
			$(this).css({'background': '#e8e8e8'});
		},
		function() {
			if ( $(this).next().attr('class') == 'new' ) {
				$(this).css({'background': 'none'});
				$(this).prev().css({'background': 'url("./img/dialog_line.png") no-repeat 110px bottom'});
			}
			else {
				$(this).css({'background': 'url("./img/dialog_line.png") no-repeat 110px bottom'});
				$(this).prev().css({'background': 'url("./img/dialog_line.png") no-repeat 110px bottom'});
			}
		}
	);
	$('.dialog.message > div').filter(':last').hover(
		function() {
			$(this).prev().css({'background': '#ffffff'});
			$(this).css({'background': '#e8e8e8'});
		},
		function() {
			if ( $(this).attr('class') == 'new' ) {
				$(this).css({'background': 'none'});
				$(this).prev().css({'background': 'none'});
			}
			else {
				$(this).css({'background': 'none'});
				$(this).prev().css({'background': 'url("./img/dialog_line.png") no-repeat 110px bottom'});
			}
		}
	);
	$('.infoblock .quote').append('<span></span>');
	$('.offers > div > .td .modal.absolute .quote').append('<span></span>');
	$('.offers > div > .td .modal.absolute .options .cancel a').click(function() {
		$(this).parents('.modal').fadeOut(150);
		return false;
	});
	$('.offers > div > .td > div.more > div .buttons button.accept').click(function() {
		$(this).parents('.td').find('.modal').fadeIn(150);
		return false;
	});
	$('.searchresult').each(function() {
		var marginmap = ( $(this).find('.taskc').height() - $(this).find('.map').height() ) / 2;
		$(this).find('.map').css({'margin-top': marginmap+'px'});
	});
	$('.col1 .faqnav li').append('<span></span>');
	$('.col3 .faq > div h3 span').click(function() {
		$(this).parent().parent().toggleClass('active');
		return false;
	}).filter(':first').click();
	$('.carousel').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutCubic'
	});
	var faq = $('.col3 .faq');
	$('.col1 .faqnav li a').click(function () {
		faq.hide();
		faq.filter(this.hash).stop(true, true).fadeIn(0);
		$('.col1 .faqnav li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('.categories > div > div > div p, .reviewu div.all, .reviewu div.tasksview, .reviewu div.portfolio').append('<span class="arrow"></span>');
	$('input[type="checkbox"], input[type="radio"], input[type="file"]').uniform();
	$('select').selectbox();
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
	$('.userc > div h5 span.like em, .taski h1 .like, .offers > div > .td > div.more h4 .like, .taskc > div .actions li .like').click(function() {
		$(this).toggleClass('active');
		return false;
	});
  	$('.filter .price .range').slider({
  		min: 0,
  		max: 10000,
  		step: 100,
  		values: [1000,7000],
  		range: true,
  		stop: function(event, ui) {
  			$(this).parent().parent().find('.min').val($(this).slider('values',0));
  			$(this).parent().parent().find('.max').val($(this).slider('values',1));
  			handle = $(this).find('.ui-slider-handle');
  			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
  			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
  		},
  		slide: function(event, ui){
  			$(this).parent().parent().find('.min').val($(this).slider('values',0));
  			$(this).parent().parent().find('.max').val($(this).slider('values',1));
  			handle = $(this).find('.ui-slider-handle');
  			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
  			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
  		}
  	});
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
		});
	});
  	$('.filter .rating .range').slider({
  		min: 0,
  		max: 10,
  		values: [3,9],
  		range: true,
  		stop: function(event, ui) {
  			handle = $(this).find('.ui-slider-handle');
  			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
  			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
  		},
  		slide: function(event, ui) {
  			handle = $(this).find('.ui-slider-handle');
  			handle.eq(0).empty().append('<span>'+$(this).slider("values",0)+'</span>');
  			handle.eq(1).empty().append('<span>'+$(this).slider("values",1)+'</span>');
  		}
  	});
  	/*var prepared = $('.reviewu .leave. prepared .templates div');
  	prepared.hide();
  	$('.reviewu .leave .prepared ul li a').click(function () {
  		prepared.hide();
  		prepared.filter(this.hash).stop(true, true).fadeIn(0);
  		$(this).parents('ul').find('li').removeClass('active');
  		$(this).parent().addClass('active');
  		return false;
  	});*/
	$('.reviewu .leave .prepared ul li a').click(function () {
		var pr = $(this).attr('href');
		$(this).parents('.prepared').find('ul li').removeClass('active');
		$(this).parent().addClass('active');
		var pt = $(this).parents('.prepared').find('div'+pr+' p').text();
		$(this).parents('.leave').find('.area textarea').empty().text(pt);
		return false;
	});
	$('.reviewu .all h5 .leave').click(function() {
		$(this).parents('.reviewu').children('.leave').fadeIn(0);
		return false;
	});
	$('.taski p.more .show a').toggle( 
		function() {
			$(this).parents('.taski').find('div.more').fadeIn(0);
			$(this).parent().addClass('active');
			$(this).empty().text('Свернуть');
			return false;
		},
		function() {
			$(this).parents('.taski').find('div.more').fadeOut(0);
			$(this).parent().removeClass('active');
			$(this).empty().text('Показать полностью');
			return false;
		}
	);
	$('.offers > div > .td p.more span').click(function() {
		$(this).parents('.td').addClass('active');
		$('.offers > div > .td .modal').fadeOut(150);
		return false;
	});
	$('.offers > div > .td p.less span').click(function() {
		$(this).parents('.td').removeClass('active');
		$('.offers > div > .td .modal').fadeOut(150);
		return false;
	});
	$('.ratingsmall').raty({
		number: 10,
		width: 222,
		readOnly: true,
		path: 'img/rate_small',
		score: function() {
			return $(this).attr('data-score');
		}
	});
	$('.ratingbig').raty({
		number: 10,
		width: 422,
		readOnly: false,
		path: 'img/rate_big',
		score: function() {
			return $(this).attr('data-score');
		}
	});
	$('.reviewu > div:last-child > div').filter(':last').children('div').css({'padding': '0', 'margin': '0 0 -9px', 'background': 'none'});
	$('.index .carousel .task > div ul li:last-child').css({'padding-right': '0', 'margin-right': '0', 'background': 'none'});
	$('.categories ul > li > ul  > li:last-child a').css({'text-decoration': 'underline'});
	$('.categories ul > li > ul  > li:last-child a:hover').css({'text-decoration': 'none'});
	$('.structure ul li:nth-child(2n)').css({'background-position': 'right 30px'});
	$('.structure ul li:nth-child(2n) > img').css({'left': 'auto', 'right': '96px'});
	$('.structure ul li:nth-child(2n) div').css({'padding': '0 642px 0 0', 'background': 'url("../img/structure_div_r.png") no-repeat 327px 98px'});
	$('.benefits ul li:nth-child(1)').css({'background': 'url("../img/benefits_li_first.png") no-repeat left 6px'});
	$('.benefits ul li:nth-child(2)').css({'background': 'url("../img/benefits_li_second.png") no-repeat left 6px'});
	$('.benefits ul li:nth-child(3)').css({'background': 'url("../img/benefits_li_third.png") no-repeat left 6px'});
	/* Added 09 Jan 2014 */
	$('.header .popup .options > div > div').append('<span></span>');
	$('.header .popup').append('<span class="close"></span>');
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
		return false;
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
    
	$('.taskadd > div > div p:first-child').each(function() {
		var ph = $(this).height();
		if (ph > 27) {
			$(this).css({'margin-top': '-8px'});
		}
	});
	$('.userform > div .files ul li').append('<em></em>');
	$('.taskadd > div.employer .tip p:last-child').css({'margin-bottom': '0 !important'});
	
	$('.userform div.legal').hide();
    $('.userform select.type').change(function() {
		if( $(this).val() == 'legal') {
            $('.userform div.legal').show();
		}
		if( $(this).val() == 'individual') {
            $('.userform div.legal').hide();
		}
    });	
    $('.content .userform > div > div.performer p input[type="checkbox"]').change(function() {
        if($(this).is(':checked')) {
            $('.content .userform > div.optional').show();
            google.maps.event.trigger(map, 'resize');
        }
        else {
            $('.content .userform > div.optional').hide();
		}		
    });
	$('.modal').append('<span class="close"></span>');
	$('.modal .close').click(function() {
		$(this).parent().stop(true, true).fadeOut(150);
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
//	$('.col1 .catspec > div > ul > li.sub > ul').hide();
//	$('.col1 .catspec > div > ul > li.sub > a').click(function() {
//		$(this).parent().children('ul').slideToggle(0);
//		return false;
//	}).filter(':first').click();
	$('.col1 .catspec .scroll').jScrollPane({
		verticalDragMinHeight: 45,
		verticalDragMaxHeight: 45,
		horizontalDragMinWidth: 45,
		horizontalDragMaxWidth: 45,
		autoReinitialise: true
	});
	$('.description .about .more').live('click', function() {
		$(this).parent().find('.hidden').show();
		$(this).empty().text('Скрыть...');
		$(this).removeClass('more').addClass('less');
		return false;
	});
	$('.about .less').live('click', function() {
		$(this).parent().find('.hidden').hide();
		$(this).empty().text('Подробнее...');
		$(this).removeClass('less').addClass('more');
		return false;
	});
	$('.dialog .read').filter(':last').css({'background': 'none'});

	function preview(img, selection) { 
		var jw = $('#crop').width();
		var jh = $('#crop').height();
		var fw = 320;
		var fh = fw/jw*jh;
	
		var scaleX = 134 / (selection.width || 1);
		var scaleY = 134 / (selection.height || 1);
  
		$('.photo .modal .preview img').css({
			width: Math.round(scaleX * fw) + 'px',
			height: Math.round(scaleY * fh) + 'px',
			marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
			marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
		});

        setCoords(selection);
	}

    function setCoords(selection) {
        $('input[name="crop_x"]').val(selection.x1);
        $('input[name="crop_y"]').val(selection.y1);
        $('input[name="crop_x2"]').val(selection.x2);
        $('input[name="crop_y2"]').val(selection.y2);
        $('input[name="crop_w"]').val(selection.width);
        $('input[name="crop_h"]').val(selection.height);
    }


    var ias;
	$('.photo span.edit a').bind('click', function() {
        var onSelectEnd = function(img, selection) {
            setCoords(selection);
        };

		$(this).parents('.photo').find('.modal').fadeIn(150);
		var jw = $('#crop').width();
		var jh = $('#crop').height();
		var fw = 320;
		var fh = fw/jw*jh;
		$('.photo .modal .crop #crop, .photo .modal .crop .preview img').css({'width': fw+'px', 'height': fh+'px'});
		$('#crop').css({'width': fw+'px', 'height': fh+'px'});
		$('#crop').imgAreaSelect({
			handles: true,
			aspectRatio: '1:1',
			minWidth: 80,
			minHeight: 80,
			x1: 0, y1: 0, x2: 134, y2: 134,
			onInit: preview,
			onSelectChange: preview,
            onSelectEnd: onSelectEnd
		});
		return false;
	});


	$('.photo .modal .close').bind('click', function() {
		$('#crop').imgAreaSelect({
			remove: true
		});
		return false;
	});

	if ( $('.ctitle .sort').length > 0 ) {
		$('.ctitle h1').css({'margin-top': '14px'});
	}
	
	$('.useri .information .description button.more').click(function() {
		$(this).parent().find('.modal').fadeIn(150);
		return false;
	});
	$('.useri .information .description .contacts').each(function() {
		var udc = 664-$(this).children().filter(':first').width()-158;
		$(this).find('.modal').css({'width': udc+'px'});
	});
	var reviewu = $('.reviewu > div');
	reviewu.hide();
	$('.reviewu .nav li a').bind('click', function () {
		reviewu.hide();
		var ra = $(this).parent().attr('class').split(' ')[0];
		reviewu.filter('#'+ra).stop(true, true).fadeIn(0);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.reviewu').find('div.leave').fadeOut(150);
		if ( reviewu.filter('#'+ra).find('.once').length || reviewu.filter('#'+ra).find('.tbody').length ) {}
		else {reviewu.filter('#'+ra).css({'display': 'none'});}
		return false;
	}).filter(':first').click();
	/*$('.reviewu > div.tasksview .thead').each(function() {
		var nw = $(this).width() - $(this).find('.price').width() - $(this).find('.status').width() - $(this).find('.review').width() - $(this).find('.data').width() - ( $(this).children().size() * 12) - 12;
		$(this).find('.title').css({'width': nw+'px'});
	});
	$('.reviewu > div.tasksview .tbody .preview').each(function() {
		var nw = $(this).width() - $(this).find('.price').width() - $(this).find('.status').width() - $(this).find('.review').width() - $(this).find('.data').width() - ( $(this).children().size() * 12) + 12;
		$(this).find('.title').css({'width': nw+'px'});
	});*/
	$('.reviewu > div.tasksview .tbody .preview .review .drop').toggle(
		function() {
			$(this).parents('.tbody').addClass('active');
			$(this).empty().text('Свернуть отзыв');
			return false;
		},
		function() {
			$(this).parents('.tbody').removeClass('active');
			$(this).empty().text('Смотреть отзыв');
			return false;
		}
	);
	$('.reviewu > div.tasksview .tbody').filter(':last').find('.preview').css({'border-bottom-width': '0'});
	$('.reviewu > div.tasksview .tbody').filter(':last').find('.message > div').css({'margin-bottom': '-18px', 'background': 'none'});
	$('.offers > div > .td > div.more > div.information').append('<span></span>');
	$('.dialog .answer .area').append('<span></span>');
	$('.offers h2 .add').click(function() {
		$(this).parents('.offers').find('.modal.addtask').fadeIn(150);
		return false;
	});
	$('.bubblesuccess').click(function() {
		$('.bubble.success').stop(true, true).fadeIn(150).delay(2000).fadeOut(150);
		return false;
	});
	$('.bubbleerror').click(function() {
		$('.bubble.error').stop(true, true).fadeIn(150).delay(2000).fadeOut(150);
		return false;
	});
	$('.useri .important .show').bind('click', function() {
		$(this).parent().find('.nav').slideToggle(150);
		return false;
	});
	$('.portfolio .photos ul').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutCubic'
	});
	$('.reviewu > div.portfolio > div .photos').each(function() {
		var preview = $(this).find('.main img');
		$(this).find('ul li a').click(function () {
			preview.hide();
			preview.filter(this.hash).stop(true, true).fadeIn(150);
			return false;
		}).filter(':first').click();
	});
	$('.specialization .modal.absolute, .filter .modal.absolute').append('<span class="arrow"></span>');
	$('.filter .select a').bind('click', function() {
		$(this).parents('.filter').find('.modal').fadeIn(150);
		return false;
	});
	$('.specialization .select a').bind('click', function() {
		$(this).parents('.specialization').find('.modal').fadeIn(150);
		return false;
	});
	$('.specselect ul li span').toggle(
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
	$('.header .logo .lang').bind('click', function() {
		$('.langsel').fadeIn(150);
		return false;
	});
	$('html').bind('click', function() {
		$('.langsel').fadeOut(150);
	});
	$('.langsel').click(function(e) {
		e.stopPropagation();
	});
	$('.userstatus').each(function() {
		var current = $(this);
		$(this).find('p').hide();
		$(this).find('h6.save').hide();	
		current.find('h6 a').bind('click', function() {
			if ( current.hasClass('editing') ) {
				var newstatus = current.find('p input').attr('value');
				current.removeClass('editing');
				current.find('p, h6.save').hide();
				current.find('h5, h6.edit').show();
				current.find('h5').empty().text(newstatus);
			}
			else {
				var currentstatus = current.find('h5').text();
				current.addClass('editing');
				current.find('h5, h6.edit').hide();
				current.find('p, h6.save').show();
				current.find('p input').val(currentstatus);
			}
			return false;
		});
	});
	$('.taski h3 strong a').bind('click', function() {
		$(this).parents('.taski').find('.modal.confirm').fadeIn(150);
		return false;
	});
});