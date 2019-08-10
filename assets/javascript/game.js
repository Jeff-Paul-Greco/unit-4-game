
var wins = 0;
var losses = 0;
var counter = 0;

$("#win-loss").html(("Wins: " + wins) + "<br>" + ("Losses: " + losses));
$("#score").text(counter);

function startGame() {

    counter = 0;
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#score-goal").text(targetNumber);
    $(".crystal-img").remove();
    var crystalImages = ["assets/images/crystal1.png", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]

    for (var i = 0; i < 4; i++) {

        var crystalValue = Math.floor(Math.random() * 12) + 1;
        var crystal = $("<img>");
        crystal.addClass("crystal-img");
        crystal.attr("src", crystalImages[i]);
        crystal.attr("crystal-value", crystalValue);
        $("#crystals").append(crystal);
    }

    $(".crystal-img").on("click", function () {

        var valueAdded = ($(this).attr("crystal-value"));
        valueAdded = parseInt(valueAdded);
        counter += valueAdded;
        $("#score").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#win-loss").html(("You Win!") + "<br>" + ("Wins: " + wins) + "<br>" + ("Losses: " + losses));
            $("#score").text(0);
            startGame();
        }

        else if (counter >= targetNumber) {
            losses++;
            $("#win-loss").html(("You Lose!") + "<br>" + ("Wins: " + wins) + "<br>" + ("Losses: " + losses));
            $("#score").text(0);
            startGame();
        }

    });

}

startGame();