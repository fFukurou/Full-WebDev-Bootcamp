// IT'S NOT ACTUALLY SPREADING, IT'S ACTUALLY COLLECTING THINGS IN THE PARAMETER

function sum(...nums)   {
    console.log(nums);
}


sum(34, 55, 12, 23, 121, 21, 2151);

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults('Fukurou', 'Kratos', 'Oh', 'The', 'Misery');