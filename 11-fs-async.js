// method 2: asynchronous --> only runs when function complete
const { readFile, writeFile } = require('fs');
console.log("start");


// difference: add (err, result) => function
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const second = result;

writeFile(
    './content/result-async.text', 
    `Heres is the result: ${first}, ${second}`,
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("done");
    })

})
})

console.log("starting next task");


