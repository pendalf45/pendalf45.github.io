$(function() {

  $('#mission .btn').on('click', function() {
    
    var id = $(this).attr('data-target');

    if(!$(this).hasClass('active')) {
      $('#mission .btn').removeClass('active');
      $(this).addClass('active');

      $('#mission .text').removeClass('show');
      

      $('#mission .text[data-target=' + id +']').addClass('show');
      
      
    }

    
  });

});
