$(document).ready(function () {
    var headerHeight = $("header.hero").outerHeight();
    var $nav = $('nav.nav');

    $('body').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $(window).scroll(function () {
        console.log("scrollTop: " + $(window).scrollTop());
        console.log("headerHeight: " + headerHeight);
        if ($(window).scrollTop() > headerHeight) {
            $("body").addClass('nav-fixed-top');
            $nav.addClass('nav-fixed-top');
        } else {
            $("body").removeClass('nav-fixed-top');
            $nav.removeClass('nav-fixed-top')
        }
    });

})