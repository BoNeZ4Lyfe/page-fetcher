const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

let url = args[0];
let path = args[1];

console.log('url:', url);
console.log('path:', path);

request(url, (error, response, body) => {

  const bytes = body.length;
  
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(`Downloaded and saved ${bytes} to ${path}`);
    
  });
});
 

