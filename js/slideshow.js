  var slide1 = $("#slide1");
  var slide2 = $("#slide2");
  var slide3 = $("#slide3");
  var slide4 = $("#slide4");
  var slide5 = $("#slide5");

  var currentSlide = slide1;

  function prevSlide(){

    currentSlide.toggleClass("active")

    if ( currentSlide == slide1 ) {
      currentSlide = slide5;
    }
    else if ( currentSlide == slide5 ){
      currentSlide = slide4;
    }

    currentSlide.toggleClass("active")
    return
  }


  function nextSlide(){

    currentSlide.removeClass('animated slideInLeft');
    currentSlide.addClass('animated slideOutRight');

    currentSlide.toggleClass("active")

    if ( currentSlide == slide1 ) {
      currentSlide = slide2;
    }
    else if ( currentSlide == slide2 ){
      currentSlide = slide3;
    }
    else if ( currentSlide == slide3 ){
      currentSlide = slide4;
    }
    else if ( currentSlide == slide4){
      currentSlide = slide5;
    }
    else if ( currentSlide == slide5){
      currentSlide = slide1;
    }


    currentSlide.addClass('animated slideInLeft');
    currentSlide.removeClass('animated slideOutRight');
    currentSlide.toggleClass("active")    


    return
  }

function bounce(elem){
    var banner = $(elem);
    banner.replaceWith(banner.clone());
    banner.addClass('animated bounce');
}

function bounce() {

    var banner = $("#banner");
    banner.replaceWith(banner.clone());
    $('#banner').addClass('animated bounce');

    
}


