console.log("Welcome to Gambling Simulator Program");

var stake = 100;
var bet = 1;
const WON = 1;
const LOST = 0;
var won_total = 0;
var lost_total = 0;

for(let days = 1; days <= 20; days++){
    while(stake > 50 && stake < 150){
        var random = Math.floor(Math.random() * 2);
        if(random == WON){
            stake++;
            won_total += stake;
        }
        else{
            stake--;
            lost_total += stake;
        }
        console.log(stake);
    }
}

console.log("Total Won : ", won_total);
console.log("Total Lost : ", lost_total);