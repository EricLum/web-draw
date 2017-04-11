//Variables
const defaultPixels = 16;
const canvasSize = 800;
var square;
//Functions
//Build Board -- Builds the basic board to be used for the drawing project
function buildBoard(pixels){
  for (var i=0; i<pixels;i++) {
    for (var y=0; y<pixels; y++) {
    $('#canvas').append("<div class='square'> </div>");
}}
};

function resizeBoard(pixels) {
  if (pixels > 0 && pixels < 31) {
    //Gives the original canvas size divided by pixels to yield
    //the maximum # of pixels per side.
    var maxPixels = canvasSize/pixels;
    $('.square').css('height', maxPixels);
    $('.square').css('width', maxPixels);

  } else {
    window.alert('You must specify between 1 and 30 pixels inclusive.');
  }
};

function resetBoard(){
  //Delete Squares in board
  $('.square').detach();
};

function validPixels(pixels){
  if(pixels > 0 && pixels < 31){
    return true;
  } else{
    return false;
  }
};
//

//Document ready Ready
$(document).ready(function () {

//Build Board
//Technically don't even need the i and y's if you just do 16*16 and
//adjust board size to fit.
buildBoard(defaultPixels);

//Determine Trace functionality

//Event handlers have to exist at the time they're called so don't use
// ('.square').on(...) instead use this
$(document).on('mouseenter','.square',function (){
  $(this).css('background-color','red');
})

//Board Size button

$('#boardSize').on('click', function (){
  //Ask how many pixels
  var pixels = window.prompt("How many pixels should each side be?");
  if (validPixels(pixels)) {

    //reset board
    resetBoard();
    //resize the board
    buildBoard(pixels);
    resizeBoard(pixels);
  }
})

//Reset Button Behavior
$('#reset').on('click', function () {
  $('.square').css("background-color",'')
})

//Reset buttons hover view
$('.buttons').mouseenter( function () {
  $(this).css('background-color', 'grey');
})
$('.buttons').mouseleave(function(){
  $(this).css('background-color', 'white')
})


});
