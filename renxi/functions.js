var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).on("resize", function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    // only reload if dimension change is significant
    if (Math.abs(newWidth - clientWidth) > 50 || Math.abs(newHeight - clientHeight) > 50) {
        location.reload();
    }
});

// Typewriter effect fix
(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current === '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                // blinking cursor replaced with “|” instead of “_”
                $ele.html(str.substring(0, progress) + '<span class="cursor">|</span>');
                if (progress >= str.length) {
                    clearInterval(timer);
                    $(".cursor").remove();
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

// Time elapsed fix
function timeElapse(date) {
    var current = new Date();
    var seconds = Math.floor((current - date) / 1000);
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var result = `<span class="digit">${days}</span> ngày 
                  <span class="digit">${hours}</span> giờ 
                  <span class="digit">${minutes}</span> phút 
                  <span class="digit">${seconds}</span> giây`;
    $("#clock").html(result);
}
