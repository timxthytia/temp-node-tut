// method 1: synchronous
const { readFileSync, writeFileSync } = require('fs');
console.log("start");
// provide path to desired file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(first, second);

// if file exists: overide data
// if file NOT exist: creates new file
writeFileSync(
    './content/result-sync.txt',
     `Here is the results: ${first}, ${second}`, 
    // to append
     {flag: 'a'});

console.log("done");
console.log("starting next task");
    


// bad because runs code synchronously (top-to-bottom)
// long run time if code has long run time