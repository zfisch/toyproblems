//Functions for finding possible outcomes of matches of Rock Paper Scissors.

//Return all possible outcomes for 3 rounds of Rock Paper Scissors.
var rockPaperScissors = function() {
  var possibleOutcomes = ["rock", "paper", "scissors"];
  var results = [];

  for (var i=0; i<possibleOutcomes.length; i++) {
    var result = [possibleOutcomes[i]];
    for (var j=0; j<possibleOutcomes.length; j++) {
      var newResult = result.slice();
      newResult.push(possibleOutcomes[j]);
      for (var k=0; k<possibleOutcomes.length; k++) {
        var finalResult = newResult.slice();
        finalResult.push(possibleOutcomes[k]);
        results.push(finalResult);
      }
    }
  }

  return results;
}

//Return all possible outcomes for n rounds of Rock Paper Scissors.
var rockPaperScissors = function(numRounds) {
  var possibleOutcomes = ["rock", "paper", "scissors"];
  var results = [];

  var findNextOutcome = function(result, roundsLeft) {
    if (roundsLeft === 0) {
      results.push(result);
    } else if (roundsLeft > 0) {
      possibleOutcomes.forEach(function(outcome){
        var newResult = result.slice();
        newResult.push(outcome);
        findNextOutcome(newResult, roundsLeft-1);
      });
    }
  }

  findNextOutcome([], numRounds);
  return results;
};

//Return all possible outcomes without using any loops.
var rockPaperScissors = function(num) {
  var results = [];

  var nextRound = function(pastRoundResults, roundResult){
    pastRoundResults.push(roundResult);
    if(pastRoundResults.length === num){
      results.push(pastRoundResults);
    } else {
      nextRound(pastRoundResults.slice(), "rock");
      nextRound(pastRoundResults.slice(), "paper");
      nextRound(pastRoundResults.slice(), "scissors");
    }
  }

  nextRound([], "rock");
  nextRound([], "paper");
  nextRound([], "scissors");

  return results;
};