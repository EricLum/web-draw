//Variables
const defaultPixels = 16;
const canvasSize = 800;

//Functions
//Build Board -- Builds the basic board to be used for the drawing project
function buildBoard(pixels){
  for (var i=0; i<pixels;i++) {
    for (var y=0; y<pixels; y++) {
    $('#canvas').append("<div class='square'> </div>");
}}
};

//Resize Board -- determines the size of each pixel when resizing the board.
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

//Removes all of the current squares on the board by the square class.
function resetBoard(){
  //Delete Squares in board
  $('.square').detach();
};

//Validates whether there is a functional number of pixels on the board.
function validPixels(pixels){
  if(pixels > 0 && pixels < 31){
    return true;
  } else{
    return false;
  }
};
//

//Document Ready
$(document).ready(function () {

//Build Board
buildBoard(defaultPixels);

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
  } else {
    window.alert("This is an improper amount of pixels per side. Please choose a number between 1 and 30");
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
