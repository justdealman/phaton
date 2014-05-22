(function( $ ) {
    $.fn.bubble = function(status, message) {
        $('.bubble div').html('<p>' + message + '</p>');
        $('.bubble').addClass(status).stop(true, true).fadeIn(150).delay(4000).fadeOut(150);
    };

})(jQuery);
