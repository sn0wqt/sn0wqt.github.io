(function ($) {

    $.fn.fitText = function (kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY,
            }, options);

        return this.each(function () {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function () {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})(jQuery);

(function ($) {

    $.yslider = function (el, list, options) {
        var self = this,
            $el = $(el);

        self.options = $.extend({}, $.yslider.defaults, options);

        self.list = list;
        self.ul;
        self.items = [];
        self.int = 0;

        // Slide
        function slide() {
            self.ul.css({
                transition: '',
                top: '-100%'
            });

            setTimeout(function () {

                self.ul.css({
                    transition: 'none',
                    top: ''
                });

                var first = self.ul.children().first();
                first.remove();
                self.ul.append(first);

            }, self.options.speed + 10);
        }

        // Init
        function init() {
            $el.addClass('y-slider');
            $el.empty();

            var div = $('<div>'),
                maxLen = 0;

            self.ul = $('<ul>');

            for (var i = 0; i < list.length; i++) {
                var word = list[i],
                    item = $('<li>').html(word);

                self.items.push(item);
                self.ul.append(item);

                maxLen = Math.max(maxLen, word.length);
            }

            $el.text(Array(maxLen + 1).join('M'))
               .append(div.append(self.ul));

            setTimeout(function () {
                self.int = setInterval(slide, self.options.speed + self.options.pause + 10);
            }, self.options.delay);
        };
        init();
    };

    $.yslider.defaults = {
        speed: 100,
        pause: 300,
        delay: 0,
    };

    $.fn.yslider = function (list, options) {
        return this.each(function () {
            new $.yslider(this, list, options);
        });
    };

})(jQuery);


(function () {
    function InitIntro() {
        setTimeout(function () {
            $('#animated-text').yslider(['iOS Cheater!', 'iOS Developer!', 'Intro Maker!'], { speed: 150, pause: 2000, delay: 2600 });
        }, 300);
    }
    $(document).ready(function() {
        InitIntro();
    });
})();