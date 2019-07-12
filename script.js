var johnTeamScores = 120 + 125 + 120;
var mikeTeamScores = 116 + 94 + 123;
var maryTeamScores = 130 + 134 + 130;
var johnAvg = johnTeamScores / 3;
var mikeAvg = mikeTeamScores / 3;
var maryAvg = maryTeamScores / 3;

if (johnAvg > mikeAvg && johnAvg > maryAvg){
    console.log('John\'s team has the higher average - ' + johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike\'s team had the higher average - ' + mikeAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log('Mary\'s team has the higher average - ' + maryAvg);
} else {
    console.log('It is a tie!');
}