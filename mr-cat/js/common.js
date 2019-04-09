//   $('.owl-carousel').owlCarousel({
//     // items: 3,
//     // loop: true,
//     // autoplay: true,
//     // autoplayTimeout: 1000,
//     // smartSpeed:1000,
//     // autoplayHoverPause: true,
//     // slideTransition: 'linear',
//     // responsive:{
//     //     0:{
//     //         items:1
//     //     },
//     //     600:{
//     //         items:3
//     //     },
//     //     1000:{
//     //         items:3
//     //     }
//     // }
// })



    //header move child
    if (window.matchMedia("(max-width: 575.98px)").matches) {
      var kid1 = $('nav .phone__wrap');
      var kid2 = $('nav .social__wrap');
  
  
      $('.media__block').append(kid1, kid2);
      $('.welcome__img img').attr("src", "img/welcome_mobile.png");
      $('#form .logo img').attr("src", "img/white_logo.png");
      // $('#table .include__icon .table__icon').attr('src', 'img/icons/good_small.png');
    }

    if (window.matchMedia("(max-width: 372.98px)").matches) {
      $('#table .include__icon .table__icon').css('margin-top', '-27px');
    }

    if (window.matchMedia("(max-width: 1198px)").matches) {
      $('.small__menu .navbar a img:first').attr('src', 'img/small_logo.png');

    }
  
    $('.preloader').fadeOut(500, function() {
      $('body').removeClass('loading');
    });
    
  
    
  
    $('.carousel').slick({
      slidesToShow: 5, // толкьо 1 слайд показывать одновременно
      slidesToScroll: 1, // по 1-му слайду проскролливать
      speed: 8000, // медленная смена слайдов - скорость бегущей строки
      autoplay: true, // устанавливаем автозапуск слайдера
      autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
      cssEase: 'linear', // делаем анимацию однотонной при смене слайда
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  
    //gallery
  
    // var $grid = $('.grid').masonry({
    //   itemSelector: '.grid-item',
    //   columnWidth: '.grid-sizer',
    //   // gutter: 10,
    //   percentPosition: true
    // });
  
  //   var container = $('.grid');
  //   // console.log(container);
  //   container.imagesLoaded( function() {
  //     var mas = $('.grid');
  //     var msnry = new Masonry( mas, {
  //     itemSelector: '.grid-item',
  //     columnWidth: '.grid-sizer',
  //     // gutter: 10,
  //     percentPosition: true
      
  //   });
  
    
  
    
  
  //   // msnry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
  //   //   $('#gallery .grid').css("display", "none");
  //   // });
  
  //   // msnry.layout();
  
  // });
  
    var $container = $('.grid');
    $container.imagesLoaded( function() {
        $container.masonry({
          itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            // gutter: 10,
            percentPosition: true
        });
       
    });
  
    $('[data-fancybox="gallery"]').fancybox({
      // Options will go here
    });
  
    // var container = document.querySelector('.grid');
    // var msnry = new Masonry( container, {
    //   itemSelector: '.grid-item',
    //   columnWidth: '.grid-sizer',
    //   // gutter: 10,
    //   percentPosition: true
    // });
  
    // msnry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
    //   $('#gallery .grid').css("display", "none");
    // });
  
    // msnry.layout();
  
  
    // var $grid = $('.grid').imagesLoaded( function() {
    //     // init Masonry after all images have loaded
    //     var $mas = $grid.masonry({
    //       itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     // gutter: 10,
    //     percentPosition: true
    //     });
  
    
  
  //   $grid.masonry( 'on', 'layoutComplete', function() {
  //     alert('layout is complete');
  // });
  
  //   $grid.masonry('on', 'layoutComplete', function(){
  //     alert('got here');
  //   });
  
    // var $grid = $('.grid').imagesLoaded( function() {
    //   // init Masonry after all images have loaded
    //   var $mas = $grid.masonry({
    //     itemSelector: '.grid-item',
    //   columnWidth: '.grid-sizer',
    //   // gutter: 10,
    //   percentPosition: true
    //   });
  
    //   $mas.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
    //     $('#gallery .grid').css("display", "none");
    //   });
    
    //   $mas.layout();
    //   // $('#gallery .grid').css("display", "none");
    //   });
  
    // $('.grid').masonry().on( 'layoutComplete', function( event, laidOutItems ) {
    //   alert(10);
    // } );
  
  
    
    //gallery btn
    $('#gallery .gallery__btn').on('click', function() {
      $('#gallery .grid').slideToggle(500);
    })
  
  
  
  
    //more__info info__btn
    $('#more__info .info__btn').on('click', function() {
      
      var id = $(this).attr('data-target');
  
      if(!$(this).hasClass('active')) {
        $('#more__info .info__btn').removeClass('active');
        $(this).addClass('active');
  
        $('#more__info .info_wrap').css("display", 'none');
        $('#more__info .info_wrap[data-target=' + id +']').fadeIn(600);
        
      }
  
    });
  
  
    //price
    $('.cat__block .first__block:first').addClass('act');
    $('.cat__block .second__block:first').addClass('active');
    $('.dog__block .first__block:first').addClass('act');
    $('.dog__block .second__block:first').addClass('active');
    $('#price .first__block').on('click', function() {
      $(this).toggleClass("act").next().next().slideToggle(400);
    });
  
  
  
    $('#price .control__icon').on('click', function() {
      var id = $(this).attr('data-target');
  
      if(!$(this).hasClass('act__icon')) {
  
      $('#price .control__icon').removeClass('act__icon');
      $(this).addClass('act__icon');
  
      $('#price .cat__block').css('display', 'none');
      $('#price .dog__block').css('display', 'none');
      $('#price .' + id +'__block').fadeIn();
      }
  
    });
  
  
    //more__info text__angle
    $('#more__info .btns__block .info__btn:first').addClass('active');
    $('#more__info .info_wrap:first').addClass('show');
    $('#more__info .text__angle').on('click', function() {
      $(this).removeClass('show__icon');
      $('#more__info .hidden__block').slideDown();
      $('#more__info .text__angle2').addClass('show__icon');
    });
  
    $('#more__info .text__angle2').on('click', function() {
      $(this).removeClass('show__icon');
      $('#more__info .hidden__block').slideUp();
      $('#more__info .text__angle').addClass('show__icon');
    });
  
  
    //comments
    $('#comments .angle').on('click', function() {
      var id = $(this).attr('data-target');
  
      $(this).toggleClass('active__icon');  //removeClass('show__icon')
      $(this).next().slideToggle();
      // $('#comments .hidden__block[data-target=' + id +']').slideDown(1000);
      // $('#comments .text__angle2[data-target=' + id +']').fadeIn(1000);  //addClass('show__icon');
    });
  
    
  
  
    //faq
    $('#faq .question__block:nth-child(3)').addClass('act');
    $('#faq .answer__block:nth-child(4)').addClass('active');
    $('#faq .question__block:nth-child(7)').css('margin-bottom', '0');
    $('#faq .question__block').on('click', function() {
      var answer = $(this).next();
      if(!$(this).hasClass('act')) {
        $('#faq .question__block').removeClass('act');
        $(this).addClass('act');
        $('#faq .answer__block').not(answer).slideUp(400);
        answer.slideDown(400);
      } else {
        answer.slideUp(400);
        $(this).removeClass('act');
      }
      
    });
  
    if (window.matchMedia("(max-width: 575.98px)").matches) {
      $('#faq .question__block').removeClass('act');
      $('#faq .answer__block').removeClass('active');
    }
  
    //service
    
    $('#service .table__header').on('click', function() {
      $(this).toggleClass("active__table").next().slideToggle(400);
    });
  
    //popup
    $('.btn').on('click', function() {
      $('.popup_wrap').fadeIn();
      $('.popup').fadeIn();
    });
  
    $('.tarif__btn').on('click', function() {
      $('.popup_wrap').fadeIn();
      $('.popup').fadeIn();
    });
  
    $('.close__btn').on('click', function() {
      $('.popup_wrap').fadeOut();
      $('.popup').fadeOut();
    });
  
      
    $('.popup_wrap').on('click', function() {
      $('.popup_wrap').fadeOut();
      $('.popup').fadeOut();
    });

  
    //popup form
    $('.popup__form').on('submit', function(e) {
      e.preventDefault(e);
      var str = $(this).serialize();
      // var name = $('.popup__form input[name=name]').val();
      // var tel = $('.popup__form input[name=tel]').val();
  
      $.ajax({
        url: "mail/popup.php", // куда отправляем
        type: "post", // метод передачи
        // dataType: "json", // тип передачи данных
        data: str,
        // после получения ответа сервера
        success: function(msg){
            $('.popup .result').html(msg); // выводим ответ сервера
        }
    });
  
    });
  
    //service form
    $('#service__form').on('submit', function(e) {
      e.preventDefault(e);
      var str = $(this).serialize();
  
      // console.log(str);
  
      $.ajax({
        url: "mail/service_form.php", 
        type: "post", 
        data: str,
        // после получения ответа сервера
        success: function(msg){
            $('#service__form .result').html(msg); // выводим ответ сервера
        }
    });
  
    });
  
    //scroll
    $('.header .navbar-nav .work__link').on('click', function(e) {
      e.preventDefault(e);
  
      var selector = $(this).attr('href');
      var h = $(selector);
  
      $('html, body').animate({
        scrollTop: h.offset().top
      }, 400);
    });

    $('.grooming .btn__wrap .link').on('click', function(e) {
      e.preventDefault(e);
  
      var selector = $(this).attr('href');
      var h = $(selector);
  
      $('html, body').animate({
        scrollTop: h.offset().top
      }, 400);
    });
    
    
    //feedack__form
    $('.second__form').on('submit', function(e) {
      e.preventDefault(e);
      var str = $(this).serialize();
  
      // console.log(str);
  
      $.ajax({
        url: "wp-content/themes/mrcat/mail/feedback_form.php", 
        type: "post", 
        data: str,
        // после получения ответа сервера
        success: function(msg){
            $('.feedback__form .result').html(msg); // выводим ответ сервера
        }
    });
  
    });

