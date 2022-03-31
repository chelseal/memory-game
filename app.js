const section = document.querySelector("section");

const playerLivesCount = document.querySelector("span");

let playerLives = 16;

playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
  {
    imgSrc: "./img/bit.png",
    // methodName: "Math.abs(x)",
    explanation: "bits",
  },
  {
    imgSrc: "./img/lights.png",
    explanation: "lights",
  },
  {
    imgSrc: "./img/link.png",
    explanation: "link",
  },
  {
    imgSrc: "./img/pin.png",
    explanation: "pin",
  },
  {
    imgSrc: "./img/set_up.png",
    explanation: "set-up",
  },
  {
    imgSrc: "./img/sushi.png",
    explanation: "sushi",
  },
  {
    imgSrc: "./img/tree.png",
    explanation: "tree",
  },
  {
    imgSrc: "./img/voting.png",
    explanation: "voting",
  },
  {
    imgSrc: "./img/bit.png",
    // methodName: "Math.abs(x)",
    explanation: "bits",
  },
  {
    imgSrc: "./img/lights.png",
    explanation: "lights",
  },
  {
    imgSrc: "./img/link.png",
    explanation: "link",
  },
  {
    imgSrc: "./img/pin.png",
    explanation: "pin",
  },
  {
    imgSrc: "./img/set_up.png",
    explanation: "set-up",
  },
  {
    imgSrc: "./img/sushi.png",
    explanation: "sushi",
  },
  {
    imgSrc: "./img/tree.png",
    explanation: "tree",
  },
  {
    imgSrc: "./img/voting.png",
    explanation: "voting",
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
  // console.log(cardData);
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
    // back = item.explanation;

    card.setAttribute("name", item.explanation);

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
  // console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");
  // console.log(flippedCards);
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
      // console.log("wrong");
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
        }, 1000);
      }
    }
  }
  // Run a check to see if we won the game
  // if all are toggledcards
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
  // while the cards are flipping back and game is restarting,make cards unable to be clicked until the game is completely reset
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.explanation);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  //reset playerLives
  playerLives = 16;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

generateHTMLCard();

// const getData = () => [
//   {
//     imgSrc: "./img/developer.png",
//     // methodName: "Math.abs(x)",
//     explanation: "Returns the absolute value of x.",
//   },
//   {
//     methodName: "Math.ceil(x)",
//     explanation: "Returns the smallest integer greater than or equal to x.",
//   },
//   {
//     methodName: "Math.exp(x)",
//     explanation:
//       "Returns e^x, where x is the argument, and e is Euler's constant - 2.718…",
//   },
//   {
//     methodName: "Math.floor(x)",
//     explanation: "Returns the largest integer less than or equal to x.",
//   },
//   {
//     methodName: "Math.fround(x)",
//     explanation:
//       "Returns the nearest single precision float representation of x.",
//   },
//   {
//     methodName: "Math.imul(x, y)",
//     explanation:
//       "Returns the result of the 32-bit integer multiplication of x and y.",
//   },
//   {
//     methodName: "Math.log10(x)",
//     explanation: "Returns the base-10 logarithm of x.",
//   },
//   {
//     methodName: "Math.log2(x)",
//     explanation: "Returns the base-2 logarithm of x.",
//   },
//   {
//     methodName: "Math.max([x[, y[, …]]])",
//     explanation: "Returns the largest of zero or more numbers.",
//   },
//   {
//     methodName: "Math.min([x[, y[, …]]])",
//     explanation: "Returns the smallest of zero or more numbers.",
//   },
//   {
//     methodName: "Math.pow(x, y)",
//     explanation: "Returns base x to the exponent power y (that is, x^y).",
//   },
//   {
//     methodName: "Math.random()",
//     explanation: "Returns a pseudo-random number between 0 and 1.",
//   },
//   {
//     methodName: "Math.round(x)",
//     explanation:
//       "Returns the value of the number x rounded to the nearest integer.",
//   },
//   {
//     methodName: "Math.sign(x)",
//     explanation:
//       "Returns the sign of the x, indicating whether x is positive, negative, or zero.",
//   },
//   {
//     methodName: "Math.sqrt(x)",
//     explanation: "Returns the positive square root of x.",
//   },
//   {
//     methodName: "Math.trunc(x)",
//     explanation:
//       "Returns the integer portion of x, removing any fractional digits.",
//   },
// ];
