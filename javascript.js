$(window).load(function () {
    $('.footer').width($(window).width());
    $(window).resize(function () {
        $('.footer').width($(window).width());
    });
});