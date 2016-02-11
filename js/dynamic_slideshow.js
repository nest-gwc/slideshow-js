/**
*  
*  dynamic slideshow using jQuery and css classes to control display
*  
*  also uses an Array to manage jQuery objects
*   
*  @author: Weijian Zeng
*  
*/

  // define an array of slides
  var slides = []

  $(".slide").each( function (){
    slides.push(this)
  });

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
    currentSlide.style.display = 'none';
 
    //switch to new slide
    currentSlide = slides[slideIndex];
 
    //show new slide
    currentSlide.style.display = 'flex';
    return
  }
