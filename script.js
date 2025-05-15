let p1Name = "";
let p2Name = "";
let p1Points = 0;
let p2Points = 0;
let goalNum;
let playMode = "";
let p1Decision;
let p2Decision;
let p1NumSelectTurn;
let p2NumSelectTurn;
let multiPlayerTurn = 1;

document.querySelector("#singleplayerButton").onclick = function () {
  playMode = "singleplayer";
  alert("You are playing singleplayer mode.");
  playGame(playMode);
};

document.querySelector("#multiplayerButton").onclick = function () {
  playMode = "multiplayer";
  alert("You are playing multiplayer mode.");
  playGame(playMode);
};

document.querySelector("#restartButton").onclick = function () {
  multiPlayerTurn = 1;
  document.querySelector("#singleplayerButton").style.display = "inline-block";
  document.querySelector("#multiplayerButton").style.display = "inline-block";
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#images").style.display = "none";
};

document.querySelector("#continueButton").onclick = function () {
  if (p1NumSelectTurn) {
    switch (playMode) {
      case "singleplayer":
        p1NumSelectTurn = false;
        p2NumSelectTurn = true;
        document.querySelector(
          "#pickNumberText"
        ).textContent = `Pick a number between 1 and 2 you think that the Bot selected:`;
        break;

      case "multiplayer":
        p1NumSelectTurn = true;
        p2NumSelectTurn = false;
        document.querySelector(
          "#pickNumberText"
        ).textContent = `${p1Name}, pick a number between 1 and 2 you think that ${p2Name} would select:`;
        break;
    }
  } else {
    p1NumSelectTurn = true;
    p2NumSelectTurn = false;
    switch (playMode) {
      case "singleplayer":
        document.querySelector(
          "#pickNumberText"
        ).textContent = `Pick a number between 1 and 2 for the Bot to guess:`;
        break;

      case "multiplayer":
        p1NumSelectTurn = true;
        p2NumSelectTurn = false;
        document.querySelector(
          "#pickNumberText"
        ).textContent = `${p1Name}, pick a number between 1 and 2 for ${p2Name} to guess:`;
        break;
    }
  }
  multiPlayerTurn = 1;
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

  p1NumSelectTurn = true;
  p2NumSelectTurn = false;

  document.querySelector("#singleplayerButton").style.display = "none";
  document.querySelector("#multiplayerButton").style.display = "none";
  document.querySelector("#buttonsSpan").style.display = "block";
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
      document.querySelector(
        "#pickNumberText"
      ).textContent = `Pick a number between 1 and 2 for the Bot to guess:`;
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
          break;
        } else {
          alert("Please enter a valid name for Player 2.");
        }
      }

      document.querySelector(
        "#pickNumberText"
      ).textContent = `${p1Name}, pick a number between 1 and 2 you think that ${p2Name} to guess:`;
      break;
  }
  document.querySelector("#p1NameSpan").textContent = p1Name;
  document.querySelector("#p2NameSpan").textContent = p2Name;
  document.querySelector("#numMatchResults").textContent = "";
}

//players turn functions:
document.querySelector("#num1").onclick = function () {
  switch (playMode) {
    case "singleplayer":
      p1Decision = 1;
      document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
      document.querySelector("#p1Num1").style.display = "inline-block";
      document.querySelector("#p1Num2").style.display = "none";

      document.querySelector("#pickNumberText").style.display = "none";
      document.querySelector("#images").style.display = "none";
      document.querySelector("#selections").style.display = "block";
      roundResults(playMode);
      break;

    case "multiplayer":
      if (p2NumSelectTurn) {
        p2Decision = 1;
        document.querySelector("#p2ChoseNumSpan").textContent = p2Decision;
        document.querySelector("#p2Num1").style.display = "inline-block";
        document.querySelector("#p2Num2").style.display = "none";
      } else if (p1NumSelectTurn) {
        p1Decision = 1;
        document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
        document.querySelector("#p1Num1").style.display = "inline-block";
        document.querySelector("#p1Num2").style.display = "none";
      }

      multiPlayerFunctions();
      break;
  }
};

document.querySelector("#num2").onclick = function () {
  switch (playMode) {
    case "singleplayer":
      p1Decision = 2;
      document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
      document.querySelector("#p1Num1").style.display = "none";
      document.querySelector("#p1Num2").style.display = "inline-block";

      document.querySelector("#pickNumberText").style.display = "none";
      document.querySelector("#images").style.display = "none";
      document.querySelector("#selections").style.display = "block";
      roundResults(playMode);
      break;

    case "multiplayer":
      if (p2NumSelectTurn) {
        p2Decision = 2;
        document.querySelector("#p2ChoseNumSpan").textContent = p2Decision;
        document.querySelector("#p2Num1").style.display = "none";
        document.querySelector("#p2Num2").style.display = "inline-block";
      } else if (p1NumSelectTurn) {
        p1Decision = 2;
        document.querySelector("#p1ChoseNumSpan").textContent = p1Decision;
        document.querySelector("#p1Num1").style.display = "none";
        document.querySelector("#p1Num2").style.display = "inline-block";
      }

      multiPlayerFunctions();
      break;
  }
};

function multiPlayerFunctions() {
  if (p1NumSelectTurn) {
    console.log("p1NumSelectTurn");
    p1NumSelectTurn = false;
    p2NumSelectTurn = true;
    document.querySelector(
      "#pickNumberText"
    ).textContent = `${p2Name}, pick a number between 1 and 2 you think that ${p1Name} would select:`;
  } else if (p2NumSelectTurn) {
    console.log("p2NumSelectTurn");
    p1NumSelectTurn = true;
    p2NumSelectTurn = false;
    document.querySelector(
      "#pickNumberText"
    ).textContent = `${p1Name}, pick a number between 1 and 2 you think that ${p2Name} to guess:`;
  }
  switch (multiPlayerTurn) {
    case 1:
      multiPlayerTurn++;
      break;
    case 2:
      document.querySelector("#pickNumberText").style.display = "none";
      document.querySelector("#images").style.display = "none";
      document.querySelector("#selections").style.display = "block";
      roundResults(playMode);
      break;
  }
}

function roundResults(mode) {
  document.querySelector("#continueButtonSpan").style.display = "block";
  switch (mode) {
    case "singleplayer":
      p2Decision = Math.floor(Math.random() * 2) + 1;
      if (p1NumSelectTurn) {
        if (p2Decision === p1Decision) {
          document.querySelector("#numMatchResults").textContent =
            "The Bot guessed your number, it gets a point!";
          p2Points++;
          document.querySelector("#p2PointsSpan").textContent = p2Points;
        } else {
          document.querySelector("#numMatchResults").textContent =
            "The Bot guessed the wrong number, you get a point!";
          p1Points++;
          document.querySelector("#p1PointsSpan").textContent = p1Points;
        }
      } else {
        if (p2Decision === p1Decision) {
          document.querySelector("#numMatchResults").textContent =
            "You guessed the Bot's number, you get a point!";
          p1Points++;
          document.querySelector("#p1PointsSpan").textContent = p1Points;
        } else {
          document.querySelector("#numMatchResults").textContent =
            "You guessed the wrong number, the Bot gets a point!";
          p2Points++;
          document.querySelector("#p2PointsSpan").textContent = p2Points;
        }
      }
      break;

    case "multiplayer":
      if (p1NumSelectTurn) {
        if (p2Decision === p1Decision) {
          document.querySelector(
            "#numMatchResults"
          ).textContent = `${p2Name} guessed ${p1Name}'s number, ${p2Name} gets a point!`;
          p2Points++;
          document.querySelector("#p2PointsSpan").textContent = p2Points;
        } else {
          document.querySelector(
            "#numMatchResults"
          ).textContent = `${p2Name} wasn't able to guess ${p1Name}'s number, ${p1Name} gets a point!`;
          p1Points++;
          document.querySelector("#p1PointsSpan").textContent = p1Points;
        }
      } else {
        if (p2Decision === p1Decision) {
          document.querySelector("#numMatchResults").textContent =
            "You guessed the Bot's number, you get a point!";
          p1Points++;
          document.querySelector("#p1PointsSpan").textContent = p1Points;
        } else {
          document.querySelector("#numMatchResults").textContent =
            "You guessed the wrong number, the Bot gets a point!";
          p2Points++;
          document.querySelector("#p2PointsSpan").textContent = p2Points;
        }
      }
      break;
  }

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

  checkForWinner();
}

function checkForWinner() {
  if (p1Points === goalNum) {
    document.querySelector("#buttonsSpan").style.display = "none";
    setTimeout(function () {
      alert(`${p1Name} won! Press OK to continue.`);
      document.querySelector("#singleplayerButton").style.display =
        "inline-block";
      document.querySelector("#multiplayerButton").style.display =
        "inline-block";
      document.querySelector("#gameContainer").style.display = "none";
      document.querySelector("#images").style.display = "none";
    }, 2000);
  } else if (p2Points === goalNum) {
    document.querySelector("#buttonsSpan").style.display = "none";
    switch (playMode) {
      case "singleplayer":
        p2Name = "The Bot";
        break;
      case "multiplayer":
        p2Name = p2Name;
        break;
    }
    setTimeout(function () {
      alert(`${p2Name} won! Press OK to continue.`);
      document.querySelector("#singleplayerButton").style.display =
        "inline-block";
      document.querySelector("#multiplayerButton").style.display =
        "inline-block";
      document.querySelector("#gameContainer").style.display = "none";
      document.querySelector("#images").style.display = "none";
    }, 2000);
  }
}
