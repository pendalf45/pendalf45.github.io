document.addEventListener("DOMContentLoaded", function() {

    let iconPrev = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.29 15.14"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect fill="currentColor" x="-1.42" y="3.43" width="11.13" height="1.43" rx="0.71" transform="translate(-1.72 4.14) rotate(-45)"/><rect fill="currentColor" x="3.43" y="5.44" width="1.43" height="11.13" rx="0.71" transform="translate(-6.57 6.15) rotate(-45)"/></g></g></svg>';
    let iconNext = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.29 15.14"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect fill="currentColor" x="3.43" y="-1.42" width="1.43" height="11.13" rx="0.71" transform="translate(-1.72 4.14) rotate(-45)"/><rect fill="currentColor" x="-1.42" y="10.29" width="11.13" height="1.43" rx="0.71" transform="translate(-6.57 6.15) rotate(-45)"/></g></g></svg>';
    let mobileIconPrev = `<div class="icon-wrap-mobile">
        <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.29 15.14"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect fill="currentColor" x="-1.42" y="3.43" width="11.13" height="1.43" rx="0.71" transform="translate(-1.72 4.14) rotate(-45)"/><rect fill="currentColor" x="3.43" y="5.44" width="1.43" height="11.13" rx="0.71" transform="translate(-6.57 6.15) rotate(-45)"/></g></g></svg>
        </div>
        <p class="icon-text">предыдущий</p>
        </div> `;
    let mobileIconNext = `<div class="icon-wrap-mobile">
        <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.29 15.14"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect fill="currentColor" x="3.43" y="-1.42" width="1.43" height="11.13" rx="0.71" transform="translate(-1.72 4.14) rotate(-45)"/><rect fill="currentColor" x="-1.42" y="10.29" width="11.13" height="1.43" rx="0.71" transform="translate(-6.57 6.15) rotate(-45)"/></g></g></svg>
        </div>
        <p class="icon-text">следующий</p>
    </div> `;

   
   

    $(".header-slider").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1,
        lazyLoad: true,
        nav: true,
        dots: true,
        // autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        navText: [iconPrev, iconNext]
    });



    $(".text-slider").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1,
        nav: true,
        dots: true,
        autoHeight:true,
        // autoplayHoverPause: true,
        navText: [iconPrev, iconNext]
    });



    $(".desc-slider").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1,
        nav: true,
        dots: true,
        navText: [iconPrev, iconNext]
    });

    $(".comment-slider").owlCarousel({
        loop: true,
        autoplay: false,
        items: 3,
        margin: 100,
        nav: true,
        dots: false,
        navText: [iconPrev, iconNext],
        responsive: {
            0: {
                items: 1,
                // navText: [mobileIconPrev, mobileIconNext]
            },
            600: {
                items: 2,
                margin: 50
            },
            1366: {
                items: 3,
                margin: 50
            },
            1400: {
                margin: 100
            }
        }
    });

    $('#comments .comment .read-more').on('click', function () {
        $(this).parent().find('.comment-text2').slideToggle(400);
        $(this).find('.icon').toggleClass('active');
    });

    //to up

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    //scroll
    $('.header .navbar-nav .work__link').on('click', function(e) {
        e.preventDefault(e);

        let selector = $(this).attr('href');
        let h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 400);
    });

    //scroll to next block
    $('.btn-next-block').on('click', function(e) {
        e.preventDefault(e);

        let target = $('#philosophy');

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 400);
    });

    //form
    $(".dates").datepicker($.datepicker.regional["ru"]);
    $(".phone").mask("+7(999) 999-9999");
    // $('.timepicker').timepicker({
    //     timeFormat: 'HH:mm',
    //     interval: 30,
    //     minTime: '11',
    //     maxTime: '11:00pm',
    //     defaultTime: '11',
    //     startTime: '11:00',
    //     dynamic: false,
    //     dropdown: true,
    //     scrollbar: true
    // });

    $('.reserve-table').on('click', function(e) {
        e.preventDefault();
        $('.popup-wrap').fadeIn(400);
        $('#reserve-popup').fadeIn(400);
    });

    $('.popup-wrap, .close-btn').on('click', function(){
        $('.popup-wrap').fadeOut(400);
        $('#reserve-popup').fadeOut(400);
        $('#comment-popup').fadeOut(400);
    });

    $('.add-comment, .add-comment-mobile').on('click', function(e) {
        e.preventDefault();
        $('.popup-wrap').fadeIn(400);
        $('#comment-popup').fadeIn(400);
    });

    //menu control
    $('.menu-nav .menu-item').on('click', function() {
      
        let id = $(this).attr('data-target');

        let header = $(this).html();

        console.log(header);
    
        if(!$(this).hasClass('active')) {
          $('.menu-nav .menu-item').removeClass('active');
          $(this).addClass('active');
    
          $('#menu .menu-page').removeClass('active');
          $('#menu .menu-page[data-target=' + id +']').addClass('active');
          
        }
    
      });


    //menu hidden-img
    $('#menu .dish-down-side .right-text').on('click', function(){
        $('.popup-wrap').fadeIn(400);
        $(this).parent().find('.hidden-img-wrap').fadeIn(400);

    });

    $('#menu .dish-down-side .right .close-hidden-img, .popup-wrap').on('click', function(e){
        
        $('.popup-wrap').fadeOut(400);
        $('.hidden-img-wrap').fadeOut(400);
    });


    //menu mobile control

    if (window.matchMedia("(max-width: 576px)").matches) {
        $('#menu .mobile-control .control-text').html($('#menu .menu-nav .menu-item:first-child').removeClass('active').html());

        $('#menu .mobile-control').on('click', function(){
            if(!$('.mobile-control .icon').hasClass('active')) {
                $('.mobile-control .icon').addClass('active');
              } else {
                $('.mobile-control .icon').removeClass('active');
              }
            $('#menu .menu-nav').slideToggle(400);
        });

        $('#menu .menu-item').on('click', function() {
            let questionText = $(this).html();
            let id = $(this).attr('data-target');
            $('#menu .mobile-control .control-text').html(questionText);
            $('#menu .menu-item').css('display', 'block');
            $(this).css('display', 'none');
      
            $('#menu .menu-page').removeClass('active');
            $('#menu .menu-page[data-target=' + id +']').addClass('active');
      
            $('#menu .menu-nav').slideUp(400);
            $('.mobile-control .icon').removeClass('active');
          });

    }


    //blocks animation
    new WOW().init();

    // $('section').animated("zoomInUp");

    


});