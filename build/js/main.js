wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,       
    live:         true        
})
wow.init();

function sliders() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true  
    });
    $('.clients-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ] 
    });
    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ] 
    });
    $('.news-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ] 
    });

    $('.cat--unit__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cat--unit__nav'
    });
    $('.cat--unit__nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cat--unit__for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}

sliders();

$(function(){
    $('.open--modal').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('.col--phone .more--btn').on('click', function(){
        if ($('.col--phone ul').is(':visible')) {
            $('.col--phone ul').slideUp();
            $(this).removeClass('open');
        } else {
            $('.col--phone ul').slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('.langs span, .langs .more--btn').on('click', function(){
        if ($('.langs ul').is(':visible')) {
            $('.langs ul').slideUp();
            $('.langs .more--btn').removeClass('open');
        } else {
            $('.langs ul').slideDown();
            $('.langs .more--btn').addClass('open');
        }
        return false;
    });
    $('.phone--btn').on('click', function(){
        if ($('header .col--phone').is(':visible')) {
            $('header .col--phone').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .col--phone').slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('.tel').inputmask('+7 (999) 999-99-99');
});

$(window).on("load",function(e){
    if ($(window).width() <= '1024'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            return false;
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().slideDown(250);
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp(250);
        });
    }
});

$(window).on('scroll', function(){
    var top = $(window).scrollTop();
    if(top > 0){
        console.log('scroll')
        $('header').addClass('fixed');
    }
    else{
        $('header').removeClass('fixed');
    }
});
// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });
