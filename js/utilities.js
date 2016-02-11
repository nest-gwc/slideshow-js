
function bounce(elem){
    var banner = $(elem);
    banner.replaceWith(banner.clone());
    banner.addClass('animated bounce');
}

function bounce() {

    var banner = $("#banner");
    banner.replaceWith(banner.clone());
    $('#banner').addClass('animated bounce');
