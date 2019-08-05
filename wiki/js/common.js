window.onload = function() {

  var btns = document.querySelectorAll('btn-slide');

  for(var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      this.classList.toggle('act');
    }
  }
}

// $(function() {

//   $("#btn-id").click(function(){
//     $("#btn-id").toggleClass("act");
//   });

//   $("#btn-id2").click(function(){
//     $("#btn-id2").toggleClass("act");
//   });

//   $("#btn-id3").click(function(){
//     $("#btn-id3").toggleClass("act");
//   });

//   $("#btn-id4").click(function(){
//     $("#btn-id4").toggleClass("act");
//   });

//   $("#btn-id5").click(function(){
//     $("#btn-id5").toggleClass("act");
//   });

//   $("#btn-id6").click(function(){
//     $("#btn-id6").toggleClass("act");
//   });

//   $("#btn-id7").click(function(){
//     $("#btn-id7").toggleClass("act");
//   });
  
  
	
// });

