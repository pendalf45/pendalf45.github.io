$(function() {

  $('.top-line').after('<div class="mobile-menu d-lg-none">');
  $('.top-menu').clone().appendTo('.mobile-menu');
  $('.mobile-menu-button').click(function() {
    $('.mobile-menu').stop().slideToggle();
  });

	$("#owl").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    lazyLoad:true,
    // pagination:true,
    // navText : ["Igor","Pigor"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
});

document.getElementById('don').onclick=function(){ alert("Дон ценит вашу преданность!") }
