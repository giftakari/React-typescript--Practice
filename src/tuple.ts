let product: [string, number];

product = ["Table", 500];

let flag :[string, boolean];

let lastScore :[string, number, number, number];

lastScore =["Akaris", 500, 600,1000]

let customer :[string, number , number]

customer =["AKARIS LIMTED", 5000, 2000];

// Declare the types
type Scores =[string, ...number[]];

// Spread Operator in Typescript
// Example 1
const akarisScore : Scores=["Akaris", 1010, 200, 390, 100, 564]

// Example 2 accept multiple values
const samuelsScore : Scores =["Samuel", 60, 70, 100, 123, 133, 1552, 1662, 18826]



// rest in Typescript, using functions

function logScore(...scores: Scores){
    console.log(scores)

}

logScore("Samuel",500, 82, 75,199, 1002, 1000)




// The Spread expression in Typescript 

type SpreadScores = [] | [number] | [number, number] | [number, number, number]

const benScores: SpreadScores = [];
const samScores: SpreadScores = [55];
const bobScores: SpreadScores = [95, 75];
const jayneScores: SpreadScores = [65, 50, 70];

// Optional Tuple elements

type OptionScore=[number, number? ,number?]
const opSamScores: OptionScore = [55];
const opBobScores: OptionScore = [95, 75];
const opJayneScores: OptionScore = [65, 50, 70];

// Optional function parametter 

type ParamScores = [number, number?, number?];

function logScoresEnhanced(...scores: ParamScores) {
  if (scores.length === 3) {
    console.log(scores, "Thank you for logging all 3 scores");
  } else {
    console.log(scores);
  }
}
logScoresEnhanced(60, 70, 75);
logScoresEnhanced(45, 80);
logScoresEnhanced(95);



