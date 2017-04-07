
$(document).ready(function () {

//Build Board
  for (var i=0; i<16;i++) {
    for (var y=0; y<16; y++) {
    $('#canvas').append("<div class='square'> </div>");
}}

//Determine hover functionality
$('.square').on('mouseenter', function (){
  $(this).css('background-color','red');
})

});
