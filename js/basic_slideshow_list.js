/**
*  
*  basic slideshow using jQuery and css classes to control display
*  
*  also uses an Array to manage jQuery objects
*   
*  @author: Weijian Zeng
*  
*/


  var slide1 = $("#slide1");
  var slide2 = $("#slide2");
  var slide3 = $("#slide3");
  var slide4 = $("#slide4");
  var slide5 = $("#slide5");


  // define an array of slides
  var slides = [slide1,slide2,slide3, slide4, slide5];

  var currentSlide = slides[0];

  changeToSlide(2);

  $("#nextButton").click( nextSlide );
  $("#prevButton").click( prevSlide );

  function nextSlide(){

    var slideIndex = slides.indexOf(currentSlide);

    // select the next slide in order
    slideIndex = slideIndex + 1;

    if( slideIndex > slides.length-1 ){
      slideIndex = 0 ;
    }

    changeToSlide(slideIndex);
  }

  function prevSlide(){

    var slideIndex = slides.indexOf(currentSlide);

    // select the next slide in order
    slideIndex = slideIndex - 1;

    if( slideIndex < 0 ){
      slideIndex = slides.length-1;
    }

    changeToSlide(slideIndex);
  }
   
  function changeToSlide( slideIndex )
  {
    // hide the current slide
    currentSlide.removeClass("active");
 
    //switch to new slide
    currentSlide = slides[slideIndex];
 
    //show new slide
    currentSlide.addClass("active");
    return
  }
