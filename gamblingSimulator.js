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
var bets_won;
var bets_lost;
var max_won = new Map();
var max_lost = new Map();

for(let days = 1; days <= 20; days++){
    stake = 100;
    bets_lost = 0;
    bets_won = 0;
    while(stake > 50 && stake < 150){
        var random = Math.floor(Math.random() * 2);
        if(random == WON){
            stake++;
            won_total += stake;
            bets_won++;
        }
        else{
            stake--;
            lost_total += stake;
            bets_lost++;
        }
        month.set(days, stake);
        max_lost.set(days, bets_lost);
        max_won.set(days,bets_lost);
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

var biggest = max_won.get(1);
var smallest = max_lost.get(1);

for(let i of max_won.values()){
    if(i > biggest){
        biggest = i;
    }
}

for(let j of max_won.keys()){
    if(max_won.get(j) == biggest){
        console.log("Luckiest Day is : " + "Day_" + j);
    }
}

for(let x of max_lost.values()){
    if(x < smallest){
        smallest = x;
    }
}

for(let y of max_lost.keys()){
    if(max_lost.get(y) == smallest){
        console.log("Unluckiest Day is : " + "Day_" + y);
    }
}