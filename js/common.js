$(function() {

  // browser detect
var BrowserDetect = {
  init: function() {
this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
this.OS = this.searchString(this.dataOS) || "an unknown OS";
},
searchString: function(data) {
for (var i = 0; i < data.length; i++) {
var dataString = data[i].string;
var dataProp = data[i].prop;
this.versionSearchString = data[i].versionSearch || data[i].identity;
if (dataString) {
  if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
} else if (dataProp) return data[i].identity;
}
},
searchVersion: function(dataString) {
var index = dataString.indexOf(this.versionSearchString);
if (index == -1) return;
return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
},
dataBrowser: [{
string: navigator.userAgent,
subString: "Chrome",
identity: "Chrome"
}, {
string: navigator.userAgent,
subString: "OmniWeb",
versionSearch: "OmniWeb/",
identity: "OmniWeb"
}, {
string: navigator.vendor,
subString: "Apple",
identity: "Safari",
versionSearch: "Version"
}, {
prop: window.opera,
identity: "Opera",
versionSearch: "Version"
}, {
string: navigator.vendor,
subString: "iCab",
identity: "iCab"
}, {
string: navigator.vendor,
subString: "KDE",
identity: "Konqueror"
}, {
string: navigator.userAgent,
subString: "Firefox",
identity: "Firefox"
}, {
string: navigator.vendor,
subString: "Camino",
identity: "Camino"
}, { // for newer Netscapes (6+)
string: navigator.userAgent,
subString: "Netscape",
identity: "Netscape"
}, {
string: navigator.userAgent,
subString: "MSIE",
identity: "Explorer",
versionSearch: "MSIE"
}, {
string: navigator.userAgent,
subString: "Gecko",
identity: "Mozilla",
versionSearch: "rv"
}, { // for older Netscapes (4-)
string: navigator.userAgent,
subString: "Mozilla",
identity: "Netscape",
versionSearch: "Mozilla"
}],
dataOS: [{
string: navigator.platform,
subString: "Win",
identity: "Windows"
}, {
string: navigator.platform,
subString: "Mac",
identity: "Mac"
}, {
string: navigator.userAgent,
subString: "iPhone",
identity: "iPhone/iPod"
}, {
string: navigator.platform,
subString: "Linux",
identity: "Linux"
}]

};
BrowserDetect.init();


  //firefox fix text color
  if (BrowserDetect.browser === 'Firefox') {

    $('#about .block__text').css({'background': 'none',
                                '-webkit-text-fill-color': 'currentcolor'
    });
    $('#why .text__wrap').css('transform-style', 'flat');

  }


  let stopScrolling = $('.first__scene');
  scrollLock.disablePageScroll();

  // $('.preloader').fadeOut(500, function() {
  //   $('body').removeClass('loading');
  //   scrollLock.enablePageScroll();
  // });
  let afterTime = new Date();
  let difference = afterTime - preloaderTime;

  if(difference < 3000) {
    let addTime = 3000 - difference;
    setTimeout(function () {
      $('.preloader').fadeOut(500, function() {
        // $('body').removeClass('loading');
      });
    }, addTime);
  } else {
    $('.preloader').fadeOut(500, function() {
        // $('body').removeClass('loading');
      });
  }

  

  $('.first__scene .language').on('click', function() {
    if(!$(this).hasClass('active')) {
    $('.first__scene .language').removeClass('active');
    $(this).addClass('active');
    language = $(this).attr('data-language');
    if(language == 'english') {
      $('.first__scene .comment').html('click to start');
    } else {
      $('.first__scene .comment').html('нажмите чтоб начать');
    }
    }
  });

  

  $('.first__scene .click, .first__scene .comment ').on('click', function() {   
    $('.first__scene .move').addClass('active');
    $('.first__scene .st0, .first__scene .stz0').addClass('active');
    $('.first__scene .first__mobile, .first__scene .first__desktop').addClass('active');
    setTimeout(function () {
          $('.first__scene .st30, .first__scene .st31, .first__scene .stz31, .first__scene .stz32').addClass('active');
        }, 2000);
    scrollLock.enablePageScroll();
    setTimeout(function () {
      $('.first__scene').fadeOut(500, function() {
        $('body').removeClass('loading');
      })
        }, 3500);

    if(language == 'english') {
      setTimeout(() => {
        document.location.href = 'en.html';
      }, 3500);
    }
    setTimeout(function () {
      $('.big__lamp .lamp').addClass('active');
        }, 6500);
  });

  




  

  
  //header
  $('header').on('mousemove', function(e) {
    let lampLogo = document.querySelector('header .lamp__logo');
    let halfHeight = lampLogo.offsetHeight / 2;
    let halfWidth = lampLogo.offsetHeight / 3;
    lampLogo.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 10 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 100 + 'deg)';
  });
  $('header').on('mouseout', function(e) {
    let lampLogo = document.querySelector('header .lamp__logo');
    lampLogo.style.transform = 'rotate(0)';
  });

  //about
  if (!(document.documentMode || /Edge/.test(navigator.userAgent) || BrowserDetect.browser === 'Firefox')) {
    $('#about .block__text').on('mousemove', function(e) {
      let targetBlock = document.querySelector('#about .block__text');
      let halfHeight = targetBlock.offsetHeight / 4;
      let halfWidth = targetBlock.offsetHeight / 2;
      targetBlock.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 20 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 50 + 'deg)';
    });
    $('#about .block__text').on('mouseout', function(e) {
      let targetBlock = document.querySelector('#about .block__text');
      targetBlock.style.transform = 'rotate(0)';
    });
  }

  
  

  //stages
  $('#stages').on('mousemove', function(e) {
    let targetBlock = document.querySelector('#stages .stages__list');
    let halfHeight = targetBlock.offsetHeight / 3;
    let halfWidth = targetBlock.offsetHeight / 2;
    targetBlock.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 160 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 300 + 'deg)';
  });
  $('#stages').on('mouseout', function(e) {
    let targetBlock = document.querySelector('#stages .stages__list');
    targetBlock.style.transform = 'rotate(0)';
  });

  
  //why
  if (window.matchMedia("(min-width: 577px)").matches) {
    $('#why .text__wrap').on('mousemove', function(e) {
      let targetBlock = $('#why .block__text');
      let height = $('#why .block__text').outerHeight();
      let halfHeight = height / 3;
      let halfWidth = height / 2;
      // targetBlock.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 20 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 50 + 'deg)';
      targetBlock.css({"-webkit-transform":'rotateX(' + -(e.offsetY - halfHeight) / 20 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 50 + 'deg)'});
    });
    $('#why .text__wrap').on('mouseout', function(e) {
      let targetBlock = $('#why .block__text');
      // targetBlock.style.transform = 'rotate(0)';
      targetBlock.css("transform","rotate(0)");
    });
  
  }
  

  if (window.matchMedia("(max-width: 1024px)").matches) {
    if(language == 'russian') {
      $('#stages .block__header').html('Этапы <br> создания сайта');
      $('#form .block__header').html('Готовы <br> обсудить проект?');
    } 
    
  }

  if (window.matchMedia("(max-width: 576px)").matches) {

    //header
    let name = $('.big__lamp .header');
    let slogan = $('.big__lamp .small__header');
    let nav = $('.header__bottom .main__menu');
    let contacts = $('.big__lamp .contacts');

    $('header .lamp').append(name);
    $('header .mobile__header').append(nav, slogan, contacts);

    $('header .nav__icon').on('click', function() {
      $('.mobile__header .main__menu').slideToggle(500);
    });

    //why
    $('#why .text__wrap').prepend("<div class='up'></div>");
    $('#why .text__wrap').append("<div class='down'></div>");

    let slides = document.querySelectorAll('#why .text__wrap');
    let count = 0;

    $('#why .arrow__wrap').on('click', function() {
      

      if($(this).hasClass('right')) {
        $('#why .text__wrap').css("display", 'none');
        count++;

        if(count >= slides.length) {
          count = 0;
        }

        $(slides[count]).fadeIn(1000);
        let id = $(slides[count]).attr('data-target');
        $('#why .btns .control').removeClass('active');
        $('#why .btns .control[data-target=' + id +']').addClass('active');
        console.log(id);

      } else {
        $('#why .text__wrap').css("display", 'none');
        count--;

        if(count < 0) {
          count = slides.length - 1;
        }

        $(slides[count]).fadeIn(1000);
        let id = $(slides[count]).attr('data-target');
        $('#why .btns .control').removeClass('active');
        $('#why .btns .control[data-target=' + id +']').addClass('active');

      }

    });

    $('#why .btns .control').on('click', function() {
      
      var id = $(this).attr('data-target');
  
      if(!$(this).hasClass('active')) {
        $('.btns .control').removeClass('active');
        $(this).addClass('active');
  
        $('#why .text__wrap').css("display", 'none');
        $('#why .text__wrap[data-target=' + id +']').fadeIn(600);

        count = id - 1;
  
        // $('#why .big_number').text(id);
        
      }
  
    });

    //why end

    //tariff
    $('#tariff .block__text, #tariff .price').unwrap();
    let leftBlocks = document.querySelectorAll('#tariff .left__block');
    let prices = document.querySelectorAll('#tariff .price');

    for(let i = 0; i < prices.length; i++) {
      $(leftBlocks[i]).append(prices[i]);
    }

    //stages
    $('.stages__list .stage .number__wrap').wrap("<div class='up'></div>");
    let headers = document.querySelectorAll('.stages__list .stage__header');
    let ups = document.querySelectorAll('#stages .up');

    for(let i = 0; i < headers.length; i++) {
      $(ups[i]).append(headers[i]);
    }

    //form
    if(language == 'russian') {
      $('#form .block__header').html('Готовы обсудить проект?');
    }
    
  }


  $(window).scroll(function() {
    var firstLamp = $('#about').offset().top;
    var secondLamp = $('#why').offset().top;
    var thirdLamp = $('#stages').offset().top;
    var fourthLamp = $('#form').offset().top;
    if ($(this).scrollTop() > firstLamp) {
        $('.small__lamp1').addClass('active__lamp');
      }

    if ($(this).scrollTop() > secondLamp) {
      $('.lamp__wrap-first, .lamp__wrap-second').addClass('active');
    }

    
    if ($(this).scrollTop() > thirdLamp) {
      let stages = $('.stages__list').children();
      
      
      for(let i = 0; stages.length > i; i++) {
        let time = i + '000' - 200;
        setTimeout(function() {
          stages[i].classList.add("active");
          }, time);
      }
     
    }

    if ($(this).scrollTop() > fourthLamp) {
      $('.lamp__wrap').addClass('active');
    }
  });	



  
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

  //goform links
  $('.goform').on('click', function() {
    var x = $('#form');
    $('html, body').animate({
      scrollTop: x.offset().top
    }, 400);
  });

  

  //form
  $(".input__phone").mask("+7(999) 999-9999");

  $('#form .main__form').on('submit', function(e) {
    e.preventDefault(e);
    let in__mail = $('.main__form .input__mail').val();
    let in__phone = $('.main__form .input__phone').val();
    let upFile = $('#upload__input');

    if(in__mail == '' && in__phone == '') {
      $('#form .message').slideDown(400, function() {
        $('#form .message').addClass('active');
      });
    } 
    else if((upFile[0].files[0] != undefined) && (upFile[0].files[0].size / 1024 > 10240)) {
        if(language == 'russian') {
          $('#form .message').html('вес файла не должен превышать 10мб!');
        } else {
          $('#form .message').html('file is no more than 10mb!');
        }
        
        $('#form .message').slideDown(400, function() {
        $('#form .message').addClass('active');
      });
 
    }
     else {
      let formData = new FormData(this);
      $('#form .message').slideUp(400);
      $('#form input[type="submit"]').attr("disabled", true);
      $('#form .button__confirm').addClass('sending');
      $.ajax({
        url: "mail/form.php", 
        type: "post", 
        data: formData,
        // после получения ответа сервера
        success: function(msg){
            $('#form .message').html(msg);
            $('#form .button__confirm').removeClass('sending');
            $('#form .message').slideDown(400, function() {
              $('#form .message').addClass('active');
            }); 
        },
        cache: false,
        contentType: false,
        processData: false,
    });

    }

  });


});
