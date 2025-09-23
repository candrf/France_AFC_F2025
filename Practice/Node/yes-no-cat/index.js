import yesNoWords from "yes-no-words";

let yesArr = [];
let noArr= [];

for (let i=0; i<5; i++){
    yesArr.push(yesNoWords.yesRandom());
}

for (let i=0; i<5; i++){
    noArr.push(yesNoWords.noRandom());
}

let combined = [...yesArr, ...noArr];

console.log(combined);


