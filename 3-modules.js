// CommonJS - every file is a module by default
// Modules - encapsulated code (only share minimum)

// option 1: destructure
const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');


// option 2: access props
const names = require('./4-names');
//console.log(names);

const data = require('./6-alternative-flavour');
//console.log(data);

// when invoking modules: node wraps the module within a function
// --> so any fn application within the invoked module will be executed
require('./7-mind-grenade');


//sayHi("susan");
//sayHi(john);
//sayHi(names.peter); 