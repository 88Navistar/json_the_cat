const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  let breedName = breed;
  request(url, (error, response, body) => {
    if (error) {
      callback("Sorry no request details: " + error, null);
    }

    const data = JSON.parse(body);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Did not find breed ${breedName}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };


