(function( $ ) {
    $.fn.clearForm = function(prefix) {
        var s = prefix;
        $('input', $(this)).filter(function() {
            if(this.name.match(s)) {
                switch(this.type) {
                    case 'hidden':
                        $(this).val('');
                        break;
                    case 'text':
                        $(this).val('');
                        $(this).trigger('change');
                        break;
                    case 'checkbox':
                        this.checked = false;
                        $.uniform.update($(this));
                        break;
                }
            }
        })
    };

})(jQuery);
