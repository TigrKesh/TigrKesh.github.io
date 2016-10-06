/**
 * Created by Tigran on 10/6/16.
 */
$(function () {
    var skillbars = $('.skillbar'),
        cont = 0;

    function _addSkills() {
        var showSkills = setInterval(function () {
            $(skillbars[cont]).animate({
                left: 0
            }, 600);
            $(skillbars[cont]).find('.skill-bar-percent').animate({
                opacity: 1
            });
            cont++;
            if (cont > skillbars.length) {
                clearInterval(showSkills);
            }

        }, 500);

        $(skillbars).each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2500);
        });
    }

    if (window.innerHeight > 900) {
        _addSkills();
    }


    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            _addSkills();
        }
        if ($(window).scrollTop() > 0) {
            $('header').css({
                'background-position-y': -50 + -($(window).scrollTop())
            })
        } else {
            $('header').css({
                'background-position-y': -50
            })
        }
    });
});