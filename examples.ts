// Recursive Function Example
function factorial(n){
  if(n === 1) return 1
  return n * factorial(n-1);
}

// Promise
const prom = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(['a','b','c']), 
  2000);
})
  .then(res => console.log(res));

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


const getBeers = () => fetch('https://api.punkapi.com/v2/beers')
  .then(response => response.json())
  .then(data => data)
  .catch(error => error)

console.log(getBeers)


// filter or remove duplicates
// nums.filter( (num, index) => nums.indexOf(num) === index);