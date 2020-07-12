/*  Promise Examples 
  - when defining a promise, you have to immediately return the new Promise
  - put all of your logic inside of the promise callback
  - the first argument passed to the promise is the resolve. used to instruct the promise has finished
  - once promise is resolved, use .then
*/ 
// const prom = (payload) => new Promise((resolve) => {
//   setTimeout(() => resolve(payload), 2000);
// }).then(res => console.log(res));
// // prom([1,2,3,4,5,6,7,8]);

//https://learnjavascript.online/app.html?id=150
const wait = delay => {
  return new Promise(resolve => { //immediately return the new Promise
      setTimeout(() => { 
          resolve(); // // resolve() to notify the Promise that it has been completed
      }, delay);
  });
}
wait(2000)
  .then(() => {
    console.log("This will be delayed 2 seconds!");
  })
  .catch(() => {
    console.log("Something went wrong");
  });