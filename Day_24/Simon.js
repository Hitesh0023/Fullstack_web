let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// Start game when key is pressed
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

// Flash effect
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 300);
}

// Next Level
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log("Game Sequence:", gameSeq);

  btnFlash(randBtn);
}

// Button Press by User
function btnPress() {
  let btn = this;
  let userColor = btn.classList[1];
  userSeq.push(userColor);
  console.log("User Sequence:", userSeq);

  btnFlash(btn);

  checkAnswer(userSeq.length - 1);
}

// Check Answer
function checkAnswer(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game Over! Press any key to restart`;
    resetGame();
  }
}

// Reset Game
function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

// Add click listeners
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(btn => btn.addEventListener("click", btnPress));
