// path modules
const path = require('path');

console.log(path.sep);

//return normalized path 
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

// return last file in path
const base = path.basename(filePath);
console.log(base);

// provides absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);