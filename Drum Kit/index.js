// // const sound = new Audio("./sounds/crash.mp3");
drums = document.querySelectorAll(".drum");
function playDrumSound(key) {
  switch (key) {
    case "w":
      const wSound = new Audio("./sounds/tom-1.mp3");
      wSound.play();
      break;

    case "a":
      const aSound = new Audio("./sounds/tom-2.mp3");
      aSound.play();
      break;

    case "s":
      const sSound = new Audio("./sounds/tom-3.mp3");
      sSound.play();
      break;

    case "d":
      const dSound = new Audio("./sounds/tom-4.mp3");
      dSound.play();
      break;

    case "j":
      const jSound = new Audio("./sounds/crash.mp3");
      jSound.play();
      break;

    case "k":
      const kSound = new Audio("./sounds/kick-bass.mp3");
      kSound.play();
      break;

    case "l":
      const lSound = new Audio("./sounds/snare.mp3");
      lSound.play();
      break;

    default:
      console.log("key pressed:" + key);
  }
}

function buttonAnimation(key) {
  if (document.querySelector(".pressed")) {
    document.querySelector(".pressed").classList.remove("pressed");
  }
  if (!document.querySelector("." + key)) {
    return;
  }
  document.querySelector("." + key).classList.add("pressed");
}

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    drumInnerHtml = this.innerHTML;
    playDrumSound(drumInnerHtml);
    buttonAnimation(drumInnerHtml);
  });
}

document.addEventListener("keypress", function (e) {
  playDrumSound(e.key.toLowerCase());
  buttonAnimation(e.key.toLowerCase());
});
