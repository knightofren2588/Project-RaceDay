let raceNumber = Math.floor(Math.random() * 1000);
var registerdEarly = 'True';
var runnersAge = 18;

if (runnersAge === 18 & registerdEarly === 'True') {
    console.log(`${raceNumber + 1000} `); }
if (registerdEarly && runnersAge <= 18) {
    console.log(`Race will start at 9:30 for Race Number ${raceNumber}`);
} else if (runnersAge > 18 && registerdEarly === 'False'); {
    console.log(`Late Adults run at 11am for Race Numbers ${raceNumber}`);
}
if (runnersAge <= 17) {
    console.log(`Youth Registrants run at 1230p for ${raceNumber}`);
}
