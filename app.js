let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rst");
let newBtn = document.querySelector("#newBtn");
let msg_cont = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let rstScore = document.querySelector(".rstScore");

let xScore = 0;
let oScore = 0;
let count = 0;
let turn0 = true;

let patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

rstScore.addEventListener("click", () => {
  xScore = 0;
  oScore = 0;
  updateScore();
});

newBtn.addEventListener("click", () => {
  let turn0 = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msg_cont.classList.add("hide");
});

rstBtn.addEventListener("click", () => {
  let turn0 = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      count++;
      turn0 = false;
    } else {
      box.innerText = "O";
      count++;
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const dissableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};

const updateScore = () => {
  x.innerHTML = `<h3>Score of "X" : ${xScore}</h3>`;
  o.innerHTML = `<h3>Score of "O" : ${oScore}</h3>`;
};

const showWinner = (winner) => {
  if (winner === "X") {
    xScore++;
  } else {
    oScore++;
  }
  updateScore();
  dissableBoxes();
  msg_cont.classList.remove("hide");
  msg.innerText = `Winner is : "${winner}"`;
};

const checkWinner = () => {
  for (let pattern of patterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
