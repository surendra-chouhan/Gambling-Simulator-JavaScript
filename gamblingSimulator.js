console.log("Welcome to Gambling Simulator Program");

var stake = 100;
var bet = 1;
const WON = 1;
const LOST = 0;

var random = Math.floor(Math.random() * 2);
if(random == WON){
    stake++;
}
else{
    stake--;
}
console.log(stake);