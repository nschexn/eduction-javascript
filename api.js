const fetch = require("node-fetch"); // need to call fetch in mode.js

// ------- API ----------

// Using fetch()
/* 
  fetch(url)
    .then(function(data) {
        // Here you get the data to modify as you please
      })
    })
    .catch(function(error) {
      // If there is any error you will catch them here
    }); 
*/

/* 
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
*/


const getBeers = () => {
  return fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(json => console.log(json.length - 20))
}

console.log(getBeers())