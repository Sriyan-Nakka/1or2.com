let p1Name = "";
let p2Name = "";
let p1Points = 0;
let p2Points = 0;
let p1Turn = true;
let p2Turn = false;

document.querySelector("#singleplayerButton").onclick = function () {
  playGame("singleplayer");
};

document.querySelector("#multiplayerButton").onclick = function () {
  playGame("multiplayer");
};

document.querySelector("#restartButton").onclick = function () {
  p1Points = 0;
  p2Points = 0;
  document.querySelector("#p1PointsSpan").textContent = p1Points;
  document.querySelector("#p2PointsSpan").textContent = p2Points;

  p1Name = "p1";
  p2Name = "p2";
  document.querySelector("#p1Name").textContent = p1Name;
  document.querySelector("#p2Name").textContent = p2Name;

  document.querySelector("#singleplayerButton").style.display = "inline-block";
  document.querySelector("#multiplayerButton").style.display = "inline-block";
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#images").style.display = "none";
  document.querySelector("#restartButton").style.display = "inline-block";
};

function playGame(mode) {
  switch (mode) {
    case "singleplayer":
      p1Points = 0;
      p2Points = 0;
      document.querySelector("#p1PointsSpan").textContent = p1Points;
      document.querySelector("#p2PointsSpan").textContent = p2Points;

      p1Name = "You";
      p2Name = "Bot";
      document.querySelector("#p1Name").textContent = p1Name;
      document.querySelector("#p2Name").textContent = p2Name;

      document.querySelector("#singleplayerButton").style.display = "none";
      document.querySelector("#multiplayerButton").style.display = "none";
      document.querySelector("#gameContainer").style.display = "block";
      document.querySelector("#images").style.display = "block";
      document.querySelector("#restartButton").style.display = "inline-block";
      break;

    case "multiplayer":
      p1Points = 0;
      p2Points = 0;
      document.querySelector("#p1PointsSpan").textContent = p1Points;
      document.querySelector("#p2PointsSpan").textContent = p2Points;

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

      document.querySelector("#singleplayerButton").style.display = "none";
      document.querySelector("#multiplayerButton").style.display = "none";
      document.querySelector("#gameContainer").style.display = "block";
      document.querySelector("#images").style.display = "block";
      document.querySelector("#restartButton").style.display = "inline-block";
      break;
  }
}

document.querySelector("#num1").onclick = function () {
  //in progress...
};
document.querySelector("#num2").onclick = function () {
  //in progress...
};
