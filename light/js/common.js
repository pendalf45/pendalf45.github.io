$(function() {

  // $('.btns .control').on('click', function() {
  //   if(!$(this).hasClass('active')) {
  //     $('.btns .control').removeClass('active');
  //     $(this).addClass('active');
  //   }
  // });

  // $('.services__controls .services__button').on('click', function() {
  //   if(!$(this).hasClass('active')) {
  //     $('.services__controls .services__button').removeClass('active');
  //     $(this).addClass('active');
  //   }
  // });

  $('.preloader').fadeOut(500, function() {
    $('body').removeClass('loading');
  });

  let afterTime = new Date();
  let difference = afterTime - preloaderTime;


  // if(difference < 3000) {
  //   let addTime = 3000 - difference;
  //   setTimeout(function () {
  //     $('.preloader').fadeOut(500, function() {
  //       $('body').removeClass('loading');
  //     });
  //   }, addTime);
  // } else {
  //   $('.preloader').fadeOut(500, function() {
  //       $('body').removeClass('loading');
  //     });
  // }
  // console.log($('#stages .block__header').html());

  if (window.matchMedia("(max-width: 1024px)").matches) {
    $('#stages .block__header').html('Этапы <br> создания сайта');
    $('#form .block__header').html('Готовы <br> обсудить проект?');
  }

  if (window.matchMedia("(max-width: 576px)").matches) {
    $('.stages__list .stage .number__wrap').wrap("<div class='up'></div>");
    let headers = document.querySelectorAll('.stages__list .stage__header');
    let ups = document.querySelectorAll('#stages .up');

    for(let i = 0; i < headers.length; i++) {
      $(ups[i]).append(headers[i]);
    }
  }


  



  $(window).scroll(function() {
    var firstLamp = $('#about').offset().top;
    var secondLamp = $('#why').offset().top;
    var thirdLamp = $('#stages').offset().top;
    // var thirdLamp = $('#services').offset().top;
    if ($(this).scrollTop() > firstLamp) {
        $('.small__lamp1').addClass('active__lamp');
      }

    if ($(this).scrollTop() > secondLamp) {
      $('.small__lamp2').addClass('active__lamp');
    }

    
    if ($(this).scrollTop() > thirdLamp) {
      let stages = $('.stages__list').children();
      
      
      for(let i = 0; stages.length > i; i++) {
        let time = i + '000' ;
        setTimeout(function() {
          stages[i].classList.add("active");
          }, time);
      }
     
    }

    // if ($(this).scrollTop() > thirdLamp) {
    //   $('.side__lamp').addClass('active__lamp');
    // }
  });	



  // $('.stage').viewportChecker({
  //   classToAdd: 'active',
  //   // offset: 500
  //   });
  
  $('.main__menu .link').on('click', function(e) {
    e.preventDefault();

    var selector = $(this).attr('href');
    var h = $(selector);

    setTimeout(function() {
      $('html, body').animate({
        scrollTop: h.offset().top
      }, 400);
      }, 500);

  });

  $('.footer__nav .footer__link').on('click', function(e) {
    e.preventDefault();

    var selector = $(this).attr('href');
    var h = $(selector);

    setTimeout(function() {
      $('html, body').animate({
        scrollTop: h.offset().top
      }, 400);
      }, 0);

  });

  //tariffs
  $('.services__controls .control').on('click', function() {
      
    var id = $(this).attr('data-target');

    if(!$(this).hasClass('active')) {
      $('.services__controls .control').removeClass('active');
      $(this).addClass('active');

      $('#tariff .content__block-wrap').css("display", 'none');
      $('#tariff .content__block-wrap[data-target=' + id +']').fadeIn(600);
      
    }

  });

   //why 
   $('.btns .control').on('click', function() {
      
    var id = $(this).attr('data-target');

    if(!$(this).hasClass('active')) {
      $('.btns .control').removeClass('active');
      $(this).addClass('active');

      $('#why .text__wrap').css("display", 'none');
      $('#why .text__wrap[data-target=' + id +']').fadeIn(600);

      $('#why .big_number').text(id);
      
    }

  });

});
