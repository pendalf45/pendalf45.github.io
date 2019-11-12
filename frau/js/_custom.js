document.addEventListener("DOMContentLoaded", function() {

	$('header .dropdown-control').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(400);
    });

	$('header .order-table').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(400);
    });


    //scrollTo
    $('header .menu-item .menu-link, .single-page-header-link').on('click', function(e) {

        let pattern = /^[#]/;
        let selector = $(this).attr('href');
        if(pattern.test(selector)) {
            e.preventDefault(e);

            let h = $(selector);

            $('html, body').animate({
                scrollTop: h.offset().top
            }, 400);
        }
    });

    //scroll to next block
    $('.next-block-btn').on('click', function(e) {
        e.preventDefault(e);

        let target = $(this).closest('header').next();


        // let target = $('#beer');
        //
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 400);
    });

    //to up
    $('.up-btn').click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    //beer btn
    $('#beer .block-btn').on('click', function (e) {
        e.preventDefault();
        let goToBlock = $('#menu');
        $('#menu .menu-page[data-target=sochi] .category').removeClass('active');
        $('#menu .menu-page[data-target=sochi] .category:last-child').addClass('active');
        let beerBlock = $('#menu .menu-page[data-target=sochi] .category:last-child').attr('data-target');
        $('#menu .menu-page[data-target=sochi] .menu-list').removeClass('active');
        $('#menu .menu-page[data-target=sochi] .menu-list[data-target=' + beerBlock +']').addClass('active');

        $('html, body').animate({
            scrollTop: goToBlock.offset().top
        }, 400);

    });

    //promo slider
    let promoSlider = $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        nav: false,
        dots: true,

    });

    $('#promo .promo-control').on('click', function () {
        if(!$(this).hasClass('active')) {
            let id = $(this).attr('data-target');
            promoSlider.trigger('to.owl.carousel', [id]);
            $('#promo .promo-control').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Listen to owl events:
    promoSlider.owlCarousel();

    promoSlider.on('changed.owl.carousel', function(event) {
        $('#promo .promo-control').removeClass('active');
        $('#promo .promo-control[data-target=' + event.page.index +']').addClass('active');
    });

    // init Masonry
    let $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',

    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });

    //map block
    $('#map .map-control').on('click', function () {
        if (!$(this).hasClass('active')) {
            $('#map .map-control').removeClass('active');
            $(this).addClass('active');

            let id = $(this).attr('data-target');
            $('#map .map-target').removeClass('active');
            $('#map .map-target[data-target=' + id +']').addClass('active');
        }
    });

    //blocks animation
    new WOW().init();

    //mobile menu
    $('header .mobile-menu-icon').on('click', function () {
        $(this).next().slideToggle(400);
    });

    //menu block control
    $('#menu .menu-control').on('click', function() {

        let id = $(this).attr('data-target');

        if(!$(this).hasClass('active')) {
            $('#menu .menu-control').removeClass('active');
            $(this).addClass('active');

            $('#menu .menu-page').removeClass('active');
            $('#menu .menu-page[data-target=' + id +']').addClass('active');
        }

    });

    $('#menu .category').on('click', function() {

        let id = $(this).attr('data-target');
        let category = $(this).parent().parent().parent().attr('data-target');

        if(!$(this).hasClass('active')) {
            $('#menu .menu-page[data-target=' + category +'] .category').removeClass('active');
            $(this).addClass('active');

            $('#menu .menu-page[data-target=' + category +'] .menu-list').removeClass('active');
            $('#menu .menu-page[data-target=' + category +'] .menu-list[data-target=' + id +']').addClass('active');
        }

    });


    //mobile menu block
    if (window.matchMedia("(max-width: 1024px)").matches) {

        $('#menu .mobile-menu-categories').on('click', function(){
            let category = $(this).closest('.row').attr('data-target');
            let controlDownIcon = $('#menu .menu-page[data-target=' + category +'] .down-icon');
            if(!controlDownIcon.hasClass('active')) {
                controlDownIcon.addClass('active');
            } else {
                controlDownIcon.removeClass('active');
            }
            $(this).next().slideToggle(400);
        });

        $('#menu .category').on('click', function() {
            let category = $(this).closest('.row').attr('data-target');
            let questionText = $(this).html();
            // let id = $(this).attr('data-target');

            $('#menu .menu-page[data-target=' + category +'] .mobile-category-name').html(questionText);

            $('#menu .menu-page[data-target=' + category +'] .category').css('display', 'block');
            $(this).css('display', 'none');

            // $('.mobile-desc .category-text').css('display', 'none');
            // $('.mobile-desc .category-text[data-target=' + id +']').fadeIn(400);

            // $('#menu .menu-page').removeClass('active');
            // $('#menu .menu-page[data-target=' + id +']').addClass('active');

            $(this).parent().slideUp(400);
            $('#menu .menu-page[data-target=' + category +'] .down-icon').removeClass('active');
        });

    }



});
