let p1Name = "";
let p2Name = "";
let p1Points = 0;
let p2Points = 0;
let goalNum;
let playMode = "";
let p1Decision;
let p2Decision;
let p1NumTurn;
let p2NumTurn;

document.querySelector("#singleplayerButton").onclick = function () {
  playMode = "singleplayer";
  playGame(playMode);
};

document.querySelector("#multiplayerButton").onclick = function () {
  playMode = "multiplayer";
  playGame(playMode);
};

document.querySelector("#restartButton").onclick = function () {
  document.querySelector("#singleplayerButton").style.display = "inline-block";
  document.querySelector("#multiplayerButton").style.display = "inline-block";
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#images").style.display = "none";
};

document.querySelector("#continueButton").onclick = function () {
  if (p1NumTurn) {
    p1NumTurn = false;
    p2NumTurn = true;
  } else {
    p1NumTurn = true;
    p2NumTurn = false;
  }
  document.querySelector("#continueButtonSpan").style.display = "none";
  document.querySelector("#pickNumberText").style.display = "block";
  document.querySelector("#images").style.display = "block";
  document.querySelector("#selections").style.display = "none";
};

function playGame(mode) {
  while (true) {
    goalNum = Number(prompt("Enter a goal number between 2 and 10."));
    if (
      goalNum >= 2 &&
      goalNum <= 10 &&
      goalNum != null &&
      goalNum != undefined
    ) {
      alert("The goal number is " + goalNum + ".");
      break;
    } else {
      alert("Please enter a valid number between 2 and 10.");
    }
  }

  p1Points = 0;
  p2Points = 0;
  document.querySelector("#p1PointsSpan").textContent = p1Points;
  document.querySelector("#p2PointsSpan").textContent = p2Points;

  p1NumTurn = true;
  p2NumTurn = false;

  document.querySelector("#singleplayerButton").style.display = "none";
  document.querySelector("#multiplayerButton").style.display = "none";
  document.querySelector("#continueButtonSpan").style.display = "none";
  document.querySelector("#selections").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
  document.querySelector("#pickNumberText").style.display = "block";
  document.querySelector("#images").style.display = "block";
  document.querySelector("#restartButton").style.display = "inline-block";

  switch (mode) {
    case "singleplayer":
      p1Name = "You";
      p2Name = "Bot";
      document.querySelector("#p1Name").textContent = p1Name;
      document.querySelector("#p2Name").textContent = p2Name;
      document.querySelector("#playerNamePick").textContent = p1Name;
      document.querySelector("#playerGuessPick").textContent = "the " + p2Name;

      break;

    case "multiplayer":
      //loop for Player 1 Name:
      while (true) {
        p1Name = prompt(
          "Enter Player 1 Name, it is only used for this match only."
        );
        if (p1Name != null && p1Name != "" && p1Name != undefined) {
          p1Name = p1Name.trim();
          document.querySelector("#p1Name").textContent = p1Name;
          break;
        } else {
          alert("Please enter a valid name for Player 1.");
        }
      }

      //loop for Player 2 Name:
      while (true) {
        p2Name = prompt(
          "Enter Player 2 Name, it is only used for this match only."
        );
        if (p2Name != null && p2Name != "" && p2Name != undefined) {
          p2Name = p2Name.trim();
          document.querySelector("#p2Name").textContent = p2Name;
          document.querySelector("#playerNamePick").textContent = p1Name;
          document.querySelector("#playerGuessPick").textContent = p2Name;
          break;
        } else {
          alert("Please enter a valid name for Player 2.");
        }
      }
      break;
  }
  document.querySelector("#p1NameSpan").textContent = p1Name;
  document.querySelector("#p2NameSpan").textContent = p2Name;
  document.querySelector("#numMatchResults").textContent = "";
}

//players turn functions:
document.querySelector("#num1").onclick = function () {
  if (p1NumTurn) {
    document.querySelector("#pickNumberText").style.display = "none";
    document.querySelector("#images").style.display = "none";
    document.querySelector("#selections").style.display = "block";
    p1Decision = 1;
    document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
    document.querySelector("#p1Num1").style.display = "inline-block";
    document.querySelector("#p1Num2").style.display = "none";

    p2Turn(playMode);
  } else {
    //guess number code in progress...
  }
};

document.querySelector("#num2").onclick = function () {
  if (p1NumTurn) {
    document.querySelector("#pickNumberText").style.display = "none";
    document.querySelector("#images").style.display = "none";
    document.querySelector("#selections").style.display = "block";
    p1Decision = 2;
    document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
    document.querySelector("#p1Num1").style.display = "none";
    document.querySelector("#p1Num2").style.display = "inline-block";

    p2Turn(playMode);
  } else {
    //guess number code in progress...
  }
};

function p2Turn(mode) {
  document.querySelector("#continueButtonSpan").style.display = "block";
  switch (mode) {
    case "singleplayer":
      if (p1NumTurn) {
        p2Decision = Math.floor(Math.random() * 2) + 1;
        document.querySelector("#p2ChoseNumSpan").textContent = p2Decision;
        switch (p2Decision) {
          case 1:
            document.querySelector("#p2Num1").style.display = "inline-block";
            document.querySelector("#p2Num2").style.display = "none";
            break;
          case 2:
            document.querySelector("#p2Num1").style.display = "none";
            document.querySelector("#p2Num2").style.display = "inline-block";
            break;
        }
        if (p2Decision === p1Decision) {
          document.querySelector("#numMatchResults").textContent =
            "The Bot guessed your number, it gets a point!";
          p2Points++;
          document.querySelector("#p2PointsSpan").textContent = p2Points;

          if (p2Points === goalNum) {
            // alert("The " + p2Name + " wins!");
            // in progress...
          }
        } else {
          document.querySelector("#numMatchResults").textContent =
            "The Bot guessed the wrong number, you get a point!";
          p1Points++;
          document.querySelector("#p1PointsSpan").textContent = p1Points;

          if (p1Points === goalNum) {
            // alert("The " + p2Name + " wins!");
            // in progress...
          }
        }
      } else {
        let botSelectedNum = Math.floor(Math.random() * 2) + 1;
        if (botSelectedNum === p1Decision) {
          // in progress...
        } else {
          //in progress...
        }
      }
      break;
    case "multiplayer":
      break;
  }
}
