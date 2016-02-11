(function(root){
  
  Ractive.load.baseUrl = 'templates/';
  
  Ractive.load( 'card.html' ).then( function (Card) {
    window.Card = Card
   });


})(this);