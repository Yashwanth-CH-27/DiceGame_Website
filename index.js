var randNum1 = Math.floor(Math.random() * 6 + 1);
var randDice1 = "dice"+randNum1+".png";
var image1Path = "images/"+randDice1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", image1Path);

var randNum2 = Math.floor(Math.random() * 6 + 1);
var randDice2 = "dice"+randNum2+".png";
var image2Path = "images/"+randDice2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", image2Path);

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randNum2 > randNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Tie";
}
