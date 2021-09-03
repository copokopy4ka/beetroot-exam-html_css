$( document ).ready(function() {
    $('.js-burger-btn').on('click', function() {
        if($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
            $('body').removeClass('menu-opened');
        } else {
            $('.js-header').addClass('active');
            $('body').addClass('menu-opened');
        }
    });

    $(window).on('click', function(e) { 
        let target = $( e.target ); 
        if( target.hasClass('menu-opened') ) { 
            $('body').removeClass('menu-opened'); 
            $('.js-header').removeClass('active'); 
        } 
    });
});

$( document ).ready(function() {
    $('.js-header-link').on('click', function() {
        if($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
            $('body').removeClass('menu-opened');
        }
    });
});