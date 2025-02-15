import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suitArray = ["♦", "♥", "♠", "♣"];
  let cardArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "Q", "K"];
                //  0,    1,  2,   3,   4,   5,   6,   7,    8,   9,   10,  11,
  
  let suitIndex = Math.floor(Math.random() * 3);
  let randomSuit = suitArray[suitIndex]
  console.log(suitArray[suitIndex]); 
  
  let cardNumber = Math.floor(Math.random() * 12);
  let randomCard = cardArray[cardNumber]; 
  console.log(cardArray[cardNumber]);


    let topSuit = document.querySelector(".top-suit") 
     topSuit.innerHTML = randomSuit;
     topSuit[0].style.color = "red";
    console.log("topSuit",topSuit);

    let bottomSuit = document.querySelector(".bottom-suit")
      bottomSuit.innerHTML = randomSuit;
      console.log("bottomSuit",bottomSuit);

      let number = document.querySelector(".number")  
        number.innerHTML = randomCard;
        console.log("number",number);

      // select HTML element with JS 
      // use style.color="red"
      // if statement .. if heart = red .. else = black


  };

    

  
  
//  random number between 0 and 12 to pick a card number
// 1 and 4 to pick a suit (CREATE FUNCTION GENERATE)