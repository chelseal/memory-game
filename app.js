const section = document.querySelector("section");

const playerLivesCount = document.querySelector("span");

const playerLives = 6;

playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
  {
    imgSrc: "./img/developer.png",
    // methodName: "Math.abs(x)",
    explanation: "Returns the absolute value of x.",
  },
  {
    methodName: "Math.ceil(x)",
    explanation: "Returns the smallest integer greater than or equal to x.",
  },
  {
    methodName: "Math.exp(x)",
    explanation:
      "Returns e^x, where x is the argument, and e is Euler's constant - 2.718…",
  },
  {
    methodName: "Math.floor(x)",
    explanation: "Returns the largest integer less than or equal to x.",
  },
  {
    methodName: "Math.fround(x)",
    explanation:
      "Returns the nearest single precision float representation of x.",
  },
  {
    methodName: "Math.imul(x, y)",
    explanation:
      "Returns the result of the 32-bit integer multiplication of x and y.",
  },
  {
    methodName: "Math.log10(x)",
    explanation: "Returns the base-10 logarithm of x.",
  },
  {
    methodName: "Math.log2(x)",
    explanation: "Returns the base-2 logarithm of x.",
  },
  {
    methodName: "Math.max([x[, y[, …]]])",
    explanation: "Returns the largest of zero or more numbers.",
  },
  {
    methodName: "Math.min([x[, y[, …]]])",
    explanation: "Returns the smallest of zero or more numbers.",
  },
  {
    methodName: "Math.pow(x, y)",
    explanation: "Returns base x to the exponent power y (that is, x^y).",
  },
  {
    methodName: "Math.random()",
    explanation: "Returns a pseudo-random number between 0 and 1.",
  },
  {
    methodName: "Math.round(x)",
    explanation:
      "Returns the value of the number x rounded to the nearest integer.",
  },
  {
    methodName: "Math.sign(x)",
    explanation:
      "Returns the sign of the x, indicating whether x is positive, negative, or zero.",
  },
  {
    methodName: "Math.sqrt(x)",
    explanation: "Returns the positive square root of x.",
  },
  {
    methodName: "Math.trunc(x)",
    explanation:
      "Returns the integer portion of x, removing any fractional digits.",
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


const shuffleCards = (arr) => {};
// Generate HTML card
const generateHTMLCard = () => {
  // Get the shuffled version of cards
  const cardData = randomiseCards();
  // Generate HTML - To generate 16 cards, need loop
  cardData.forEach((item) =>{ 

    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Attach the information to the cards
    face.src = item.imgSrc;
    // back = item.explanation;

    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  })
};

generateHTMLCard();