/*     
 * 简单弹窗插件
 * target  是弹窗id
 * callback 是显示隐藏的回调
 * fn   是显示还是隐藏
 * type 可以在具体指明需要显示那块内容
 */
;
(function($) {
    $.extend({
        xhmodal: function(option) {
            var param = $.extend({
                target: '',
                callback: function() {},
                type: 1
            }, option);

            var target = $(param.target);
            var types = target.find('[data-type]');
            if ((!param.fn) || (param.fn === 'show')) {
                types && types.each(function(index, el) {
                    if($(el).data('type') == param.type) {
                        $(el).show();
                    } else {
                        $(el).hide();
                    }
                });
                target.fadeIn("500", param.callback);
            } else if (param.fn === 'hide') {
                target.find('[data-type]').hide();
                target.fadeOut("500", param.callback);
            }
        }
    });
    /*   关闭操作   */
    $('[data-close]').click(function(e) {
        e.stopPropagation();
        $.xhmodal({
            fn: 'hide',
            target: '#' + $('[data-modaltarget]').attr('id')
        });
    });
})(window.jQuery);
