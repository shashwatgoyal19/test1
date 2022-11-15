var cowsay = require("cowsay");
var oneLinerJoke = require("one-liner-joke");

var joke1 = oneLinerJoke.getRandomJoke();
console.log(
  cowsay.say({
    text: joke1.body,
    e: "oo",
    t: "o",
  })
);


