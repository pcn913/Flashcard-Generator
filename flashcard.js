var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");


// hold first arg (front/text)
var frontText = process.argv[2];

// hold second arg (back/cloze)
var backCloze = process.argv[3];


var mycard = new BasicCard(frontText, backCloze);

// console.log(mycard.front);
// console.log(mycard.back);





var myCloze = new ClozeCard(frontText, backCloze);

console.log(myCloze.fullText);
console.log(myCloze.cloze);

console.log(myCloze.partial);

