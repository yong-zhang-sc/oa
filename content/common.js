(function ($) {
    $.extend( {
        notice:  function (message) {
            var options = { text: message, type: 'notice' };
            return $().toastmessage('showToast', options);
        },
        success : function (message) {
            var options = { text: message, type: 'success' };
            return $().toastmessage('showToast', options);
        },

        error : function (message) {
            var options = { text: message, type: 'error' };
            return $().toastmessage('showToast', options);
        },

        warning : function (message) {
            var options = { text: message, type: 'warning' };
            return $().toastmessage('showToast', options);
        }
    })
})(jQuery);