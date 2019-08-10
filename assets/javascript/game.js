
var wins = 0;
var losses = 0;

function startGame() {
    $("#win-loss").html(("Wins: " + wins) + "<br>" + ("Losses: " + losses));

    var targetNumber=Math.floor(Math.random() * 102) + 19;
    $("#score-goal").text(targetNumber);


    var crystalImages = ["assets/images/crystal1.png", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]

  for (var i = 0; i < 4; i++) {

    var crystalValue = Math.floor(Math.random() * 12) + 1;
    var crystal = $("<img>");
    crystal.addClass("crystal-img");
    crystal.attr("src", crystalImages[i]);
    crystal.attr("data-crystalvalue", crystalValue);
    console.log(crystalValue);
    $("#crystals").append(crystal);
  }




}


startGame();
