console.log("Welcome to Gambling Simulator Program");

var stake;
var bet = 1;
const WON = 1;
const LOST = 0;
var won_total = 0;
var lost_total = 0;
var month = new Map();
var won = [];
var lost = [];

for(let days = 1; days <= 20; days++){
    stake = 100;
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
        month.set(days, stake);
    }
}

console.log("Total Won : ", won_total);
console.log("Total Lost : ", lost_total);

for(let k of month.keys()){
    if(month.get(k) == 150){
        won.push(k);
    }
}

for(let l of month.keys()){
    if(month.get(l) == 50){
        lost.push(l);
    }
}

console.log("Days when bet is won are : " + won);
console.log("Days when bet is lost are : " + lost);

if(won_total > lost_total){
    console.log("Won by : " + (won_total - lost_total));
}
else{
    console.log("Lost by : " + (lost_total - won_total));
}