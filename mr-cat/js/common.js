$(function() {

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

  $('.carousel').slick({
    slidesToShow: 3, // толкьо 1 слайд показывать одновременно
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 8000, // медленная смена слайдов - скорость бегущей строки
    autoplay: true, // устанавливаем автозапуск слайдера
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
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
  $('#price .first__block').on('click', function() {
    $(this).toggleClass("act").next().next().slideToggle(400);
  });

  //price icons
  // $('#price .control__icon').on('click', function() {
  //   var id = $(this).attr('data-target');

  //   if(!$(this).hasClass('active__icon')) {

  //   $('#price .control__icon').removeClass('active__icon');
  //   $(this).addClass('active__icon');

  //   $('#price .control__icon[data-target=cat]').children('img').attr("src","img/icons/cat.png");
  //   $('#price .control__icon[data-target=dog]').children('img').attr("src","img/icons/dog.png");
  //   $(this).children('img').attr("src","img/icons/active_"+ id +".png");

  //   $('#price .cat__block').css('display', 'none');
  //   $('#price .dog__block').css('display', 'none');
  //   $('#price .' + id +'__block').fadeIn();
  //   }
    

    
  // });

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
  $('#comments .text__angle').on('click', function() {
    var id = $(this).attr('data-target');

    $(this).removeClass('show__icon');
    $('#comments .hidden__block[data-target=' + id +']').slideDown();
    $('#comments .text__angle2[data-target=' + id +']').addClass('show__icon');
  });

  $('#comments .text__angle2').on('click', function() {
    var id = $(this).attr('data-target');

    $(this).removeClass('show__icon');
    $('#comments .hidden__block[data-target=' + id +']').slideUp();
    $('#comments .text__angle[data-target=' + id +']').addClass('show__icon');
  });


  //faq
  $('#faq .question__block').on('click', function() {
    if(!$(this).hasClass('act')) {
      $('#faq .question__block').removeClass('act');
      $(this).addClass('act');
      var answer = $(this).next();
      $('#faq .answer__block').not(answer).slideUp(400);
      answer.slideDown(400);
    }
    
  });

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

  // $('.popup_wrap').on('click', function() {
  //   $('.popup_wrap').fadeOut();
  // });

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
  $('.navbar-nav a').on('click', function(e) {
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
      url: "mail/feedback_form.php", 
      type: "post", 
      data: str,
      // после получения ответа сервера
      success: function(msg){
          $('.feedback__form .result').html(msg); // выводим ответ сервера
      }
  });

  });

  //gallery-slider
  // $('.str').liMarquee();





  

});
