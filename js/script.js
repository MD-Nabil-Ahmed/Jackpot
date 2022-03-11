$(function () {
    'use strict'


    //menu fix part start 
    let menuOff = $('.menu').offset().top

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 10) {
            $('.menu').addClass('fix_menu')
        } else {
            $('.menu').removeClass('fix_menu')
        };
    });
    //menu fix part end 




    // game slider part start 
    $('.ready_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // game slider part end 



    //couter down part start
    $('#hours').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('#minute').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('#second').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });
    //couter down part end




    //menu fix part start 
    $(".scroll_list").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        scrollspeed: 40,
        cursorfixedheight: '50px',
        cursorborder: "transparent",
        autohidemode: false,
        cursorfixedheight: true,
        railwidth: '3px',
        background: "#000",
        cursorborderradius: "10px",
        iframeautoresize: true,
        smoothscroll: true,
    });
    //menu fix part end




    //card part start 
    $('.card').on('click', function () {
        $('.add_border').removeClass('add_border');
        $(this).toggleClass('add_border');
    });
    //card part end




    //about part video part start 
    new VenoBox({
        selector: '.about_video',
    });
    //about part video part end



    //about slider part start 
    $('.about_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        dots: true,
    });
    //about slider part end

    //menu fix part start 
    //menu fix part end

    //menu fix part start 
    //menu fix part end

    //menu fix part start 
    //menu fix part end

    //menu fix part start 
    //menu fix part end

    //menu fix part start 
    //menu fix part end
});