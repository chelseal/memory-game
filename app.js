const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const button = document.querySelector("button");
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

const restartButton = () => {
  //set styles
  button.classList.add("btn");
  button.setAttribute("type", "button");
  //remove pop alert() modal
  window.alert = function () { return false };
  //execute restartGame function when clicked
  button.addEventListener("click", restartGame);
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
  // if (true) {
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
  let game_end_message = document.querySelector("#game_end_message");
  let modal_message = document.querySelector("#game_end_message h2");
  modal_message.textContent = text;
  game_end_message.classList.add('show');
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
  // setTimeout(() => window.alert(text), 100);
};

// window.addEventListener("scroll", function () {
//   let gameInfo = this.document.querySelector("game_info");
//   gameInfo.classList.toggle("sticky", this.window.scrollY > 0);
// });

generateHTMLCard();
restartButton();


//=======================================================
// LIGHT and DARK THEME 
//=======================================================

const darkBtn = document.querySelector('.fas');
const bodyDark = document.querySelector('body');
const darkMode = ()=>{
  bodyDark.classList.toggle('dark');
  // console.log("Change to dark", bodyDark);
}

darkBtn.addEventListener('click', ()=>{
  // On every click, get value of dark item from the local storage 
  setDarkMode = localStorage.getItem('dark');
  if(setDarkMode !== 'on'){
    darkMode();
    setDarkMode = localStorage.setItem('dark', 'on');
  }else{
    darkMode();
    setDarkMode = localStorage.setItem('dark', null);
  }
});
// darkBtn.addEventListener('click',()=>{
//   console.log("Clicked");
// });

// get value of the dark item from the local storage
let setDarkMode = localStorage.getItem('dark');
if(setDarkMode === 'on'){
  darkMode();
}
