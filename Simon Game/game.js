var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var keyPressed = false;

$(".btn").on("click", function (e) {
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(color) {
  var buttonSound = new Audio("./sounds/" + color + ".mp3");
  buttonSound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).on("keypress", function () {
  if (!keyPressed) {
    keyPressed = true;

    nextSequence();
  }
});
