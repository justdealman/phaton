(function( $ ) {
    $.fn.bubble = function(status, message) {
        $('div.notice > div[data-alert='+status+']').html(message).stop(true,true).fadeIn(500).delay(5000).fadeOut(500);
    };

})(jQuery);
