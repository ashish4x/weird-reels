document.getElementById("jaan").addEventListener("click", function () {
  console.log("I got clicked");

  var audio = new Audio("media/jaan.m4a");
  audio.play();
  console.log("played");
});
