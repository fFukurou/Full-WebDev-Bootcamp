function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}



function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`);
}


console.log(rollDie());
greet('Fukurou');
greet("Ares", "Destroy my enemies and my life is yours", "!!!!!!!!");