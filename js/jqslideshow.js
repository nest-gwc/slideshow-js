(function($){
  
  $.fn.slideshow = function (){

  	var element = this;
  	var slides = element.children(".slide");

  	slides.css("display","none");


  	var currentslide = slides.first();

  	currentslide.css("display", "block")






	return this;
  }

})(jQuery);