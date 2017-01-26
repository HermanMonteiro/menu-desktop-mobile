$(function () {
    //CONTROLE DO MENU MOBILE
    $('.mobile_menu_text').click(function () {
        if (!$('.mobile_menu').hasClass('menu_active')) {
            $('.mobile_menu').addClass('menu_active');
            $('.main_nav').animate({
                'left': '0px'
            }, 300);
        } else {
            $('.mobile_menu').removeClass('menu_active');
            $('.main_nav').animate({
                'left': '-100%'
            }, 300);
        }
    });



});