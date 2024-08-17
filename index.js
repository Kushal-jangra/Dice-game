var a = Math.random();
var n = Math.floor(6*a)+1;
var random1 = "./images/dice"+n+ ".png";
var random2 = Math.floor(6*Math.random())+1;

 if (n > random2){
    result = "🚩 Player 1 win";
 }else if( n < random2){
    result = "Player 2 win 🚩";
 }else{
    result = "Draw";
 }


document.querySelector(".img1").setAttribute("src",random1);
document.querySelector(".img2").setAttribute("src","./images/dice"+random2+".png");
document.querySelector("h1").textContent = result;


jQuery("document").ready(function($){
    var flakes = '',
    randomColor;
    for(var i = 0, len = 400; i < len; i++) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    flakes += '<div class="ball" style="background: #'+randomColor;
    flakes += '; animation-duration: '+(Math.random() * 9 + 2)+'s; animation-delay: ';
    flakes += (Math.random() * 2 + 0)+'s;"></div>';
    }
    document.getElementById('confetti').innerHTML = flakes;
   });