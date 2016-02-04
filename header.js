$(function(){

 var shrinkHeader = 50;
  $('#main').scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
           $("#main").css("padding-top", '100px')
        }
        else {
            $('.header').removeClass('shrink');
            $("#main").css("padding-top", '0px')

        }
  });
  
function getCurrentScroll() {
    return document.getElementById('main').scrollTop;
//    return window.pageYOffset || document.documentElement.scrollTop;
    }
});