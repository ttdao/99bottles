Assignment 1: 99 Bottles of Beer Function
function beer(num){
var plural = [" bottles of beer on the wall,", " bottles of beer.\nTake one down and pass it around,", " bottles of beer on the wall."];
var singular =  [" bottle of beer on the wall,", " bottle of beer.\nTake one down and pass it around,", " bottle of beer on the wall."];
var none = ("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more 99 bottles of beer on the wall.")
// var sing = lyrics.replace(/'bottles'/g, 'bottle');
// for (var num = 99; num > -1 ; num--){
  if (num === 1){
    return(num + singular[0] + num + singular[1] + num + singular[2]);
  }else if(num === 0){
    return(none); 
  }else if(num === 100){
    return ('Hey! That\'s a lot of beer!');
  }else
  return(num + plural[0] + num + plural[1] + num + plural[2]);
}         
