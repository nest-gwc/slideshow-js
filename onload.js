$(function(){
    
 var card = Card({
    el: 'card' ,
    data: { name: 'Weijian' }
 });

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



function showMonsterQuotes() {
    $(".quote").addClass("active");
    bounce(".quote");
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


$(document).ready(function () {
    
    function showSideBar(){
        $("#sidebar").css("display",'block');
        Materialize.showStaggeredList('#sidebar');
        return false;
    }

setTimeout( showSideBar, 1000 );


var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

function submitName(){
    var name = document.getElementById("nameInput").value;    
    document.getElementById('nameTag').innerHTML = name;
    showDiv('div3');
    showConfetti();
}

var current_div = 'div1';

function showDiv(divId){
    document.getElementById(current_div).classList.remove('active');     
    document.getElementById(divId).classList.add('active');        
    current_div = divId;
    
}



//document.getElementById("clickMe").addEventListener('click', showDiv, false );


//myButton.addEventListener('click', doSomething, false)
//function doSomething() {
//	myText.textContent = "hello, world!";
//}

function showConfetti(){
var confetti = new confetti.Context('confetti');
  confetti.start();
  window.addEventListener('resize', function(event){
    confetti.resize();
  });
}

  //your code here
});

