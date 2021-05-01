var product;
product = ["Table", 500];
var flag;
var lastScore;
lastScore = ["Akaris", 500, 600, 1000];
var customer;
customer = ["AKARIS LIMTED", 5000, 2000];
// Spread Operator in Typescript
// Example 1
var akarisScore = ["Akaris", 1010, 200, 390, 100, 564];
// Example 2 accept multiple values
var samuelsScore = ["Samuel", 60, 70, 100, 123, 133, 1552, 1662, 18826];
// rest in Typescript, using functions
function logScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    console.log(scores);
}
logScore("Samuel", 500, 82, 75, 199, 1002, 1000);
var benScores = [];
var samScores = [55];
var bobScores = [95, 75];
var jayneScores = [65, 50, 70];
var opSamScores = [55];
var opBobScores = [95, 75];
var opJayneScores = [65, 50, 70];
function logScoresEnhanced() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    if (scores.length === 3) {
        console.log(scores, "Thank you for logging all 3 scores");
    }
    else {
        console.log(scores);
    }
}
logScoresEnhanced(60, 70, 75);
logScoresEnhanced(45, 80);
logScoresEnhanced(95);
//# sourceMappingURL=tuple.js.map