const request = require('request');
// let argue = process.argv.slice(2);
// argue = [0];

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) {
    console.log('There was an error');
  }
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0].description);


});




