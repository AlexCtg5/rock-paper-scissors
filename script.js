const score = {
  wins: 0,
  loses: 0,
  ties: 0,
};

const tiesScore = document.querySelector(".scr-tie");
tiesScore.innerHTML = `Ties: ${score.ties}`;
const winsScore = document.querySelector(".scr-win");
winsScore.innerHTML = `Wins: ${score.wins}`;
const losesScore = document.querySelector(".scr-lose");
losesScore.innerHTML = `Loses: ${score.loses}`;

function change(choice) {
  const myChoice = document.querySelector(".my-choice");
  myChoice.innerHTML = choice;

  let computerChoice = document.querySelector(".computer-choice");
  const cmpChoice = Math.random();

  if (cmpChoice < 1 / 3 && cmpChoice >= 0) {
    computerChoice.innerHTML = "🖐️";
  } else if (cmpChoice >= 2 / 3 && cmpChoice < 1) {
    computerChoice.innerHTML = "👊";
  } else {
    computerChoice.innerHTML = "✌️";
  }

  computerChoice = document.querySelector(".computer-choice");

  if (myChoice.innerText === computerChoice.innerText) {
    score.ties = score.ties + 1;
    tiesScore.innerHTML = `Ties: ${score.ties}`;
  } else if (
    (myChoice.innerText === "👊" && computerChoice.innerText === "✌️") ||
    (myChoice.innerText === "🖐️" && computerChoice.innerText === "👊") ||
    (myChoice.innerText === "✌️" && computerChoice.innerText === "🖐️")
  ) {
    score.wins++;
    winsScore.innerHTML = `Wins: ${score.wins}`;
  } else {
    score.loses++;
    losesScore.innerHTML = `Loses: ${score.loses}`;
  }
}

function reseting() {
  score.wins = 0;
  score.ties = 0;
  score.loses = 0;
  tiesScore.innerHTML = `Ties: ${score.ties}`;
  winsScore.innerHTML = `Wins: ${score.wins}`;
  losesScore.innerHTML = `Loses: ${score.loses}`;
}
