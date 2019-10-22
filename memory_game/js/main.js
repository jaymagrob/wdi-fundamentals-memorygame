var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},	
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];
var wins = 0;
var loses = 0;




function checkForMatch() {
	if (cardsInPlay.length === 2) { 	

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!\nWins: "+ ++wins +"\nLoses: " + loses);

  } else {
    alert("Sorry, try again.\nWins: "+ wins +"\nLoses: " + ++loses);

  }
reset();
}
}

function reset() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.querySelectorAll('img');
		cardElement[i].setAttribute('src','images/back.png');	
	}
	console.log("reset");
	cardsInPlay = [];
	console.log(cardsInPlay);
}


function flipCard() {
var cardId = this.getAttribute('data-id')	
console.log(cardId);
this.setAttribute('src',cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}



function createBroad() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		document.getElementById("game-board").appendChild(cardElement);	
	}
	console.log("images created ");
}



createBroad();

var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click',flipCard);
}


