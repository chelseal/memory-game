const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 16;
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
  {
    imgSrc: "./img/bit.png",
    name: "bits",
  },
  {
    imgSrc: "./img/lights.png",
    name: "lights",
  },
  {
    imgSrc: "./img/link.png",
    name: "link",
  },
  {
    imgSrc: "./img/pin.png",
    name: "pin",
  },
  {
    imgSrc: "./img/set_up.png",
    name: "set-up",
  },
  {
    imgSrc: "./img/sushi.png",
    name: "sushi",
  },
  {
    imgSrc: "./img/tree.png",
    name: "tree",
  },
  {
    imgSrc: "./img/voting.png",
    name: "voting",
  },
  {
    imgSrc: "./img/bit.png",
    // methodName: "Math.abs(x)",
    name: "bits",
  },
  {
    imgSrc: "./img/lights.png",
    name: "lights",
  },
  {
    imgSrc: "./img/link.png",
    name: "link",
  },
  {
    imgSrc: "./img/pin.png",
    name: "pin",
  },
  {
    imgSrc: "./img/set_up.png",
    name: "set-up",
  },
  {
    imgSrc: "./img/sushi.png",
    name: "sushi",
  },
  {
    imgSrc: "./img/tree.png",
    name: "tree",
  },
  {
    imgSrc: "./img/voting.png",
    name: "voting",
  },
];

// randomise cards - Shuffle cards randomly with Fisher-Yates algorithm
const randomiseCards = () => {
  // This is not recommended since it is inefficient and strongly biased
  // cardData.sort(()=> Math.random() - 0.5);
  let cardData = getData();
  for (let i = cardData.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // let temp = cardData[i];
    // cardData[i] = cardData[j];
    // cardData[j] = temp;
    // destructuring
    [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
  }
  return cardData;
};

// Generate HTML card
const generateHTMLCard = () => {
  // Get the shuffled version of cards
  const cardData = randomiseCards();

  // Generate HTML - To generate 16 cards, need loop
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach the information to the cards
    face.src = item.imgSrc;
    // back = item.name;

    card.setAttribute("name", item.name);

    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        // After matching two cards, they need to remain flipped.
        // Make the cards unclickable
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        setTimeout(() => {
          restartGame("Try better next time! Don't give up.");
          //
        }, 1000);
      }
    }
  }
  // Run a check to see if the game was won
  if (toggleCards.length === 16) {
    setTimeout(() => {
      restartGame("You have won!");
    }, 1000);
  }
};

// restart
const restartGame = (text) => {
  let cardData = randomiseCards();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  // while the cards are flipping back and game is restarting
  // make cards unable to be clicked until the game is completely reset
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  //reset playerLives
  playerLives = 16;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

generateHTMLCard();

//==================================================================
// Pop up message
// let tailoredMessage = `
//     <div class="modal-container">
//       <div class="modal">
//         <h1>🧠 Memory Game Over!</h1>
//         <h2 > Message : ${game.restartGameMessage} </h2>
//         <button class="game-reset">
//           <a href="index.html">Restart Memory Game</a>
//         </button>
//       </div>
//     </div>
//   `;

//   let gameEndElement = document.getElementById("game");
//   gameEndElement.innerHTML = tailoredMessage;

//   // 
//   const close = document.getElementById("close");
//   close.addEventListener('click', ()=>{
//     modal-container.classList.remove('show');
//   })
//=======================================================


// LIGHT and DARK THEME 

// let icon = document.getElementById("#icon");
// icon.onclick= function(){
//   document.body.classList.toggle("dark-theme");
//   if(document.body.classList.contains("dark-theme")){
//     icon.src = "./img/sun.png";
//   }else{
//     icon.src = "./img/moon.png";
//   }
// }
