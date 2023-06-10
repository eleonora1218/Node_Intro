const fs = require('fs');
const process = require('process');
const axios = require('axios');
let google = 'http://www.google.com'

// Prints one.txt to terminal
// terminal: node step2.js one.txt
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

// calling this function properly triggers webCat(path) to exicute bellow
async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}
// webCat(google) or terminal: node step2.js http://google.com


let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
