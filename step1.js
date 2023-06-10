// Print content in huh.txt
// in terminal: node step1.js huh.txt
// arg0 = node
// arg1 = step1.js
// arg2 = huh.txt

const fs = require('fs');
const process = require('process');

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

cat(process.argv[2]);