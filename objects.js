// Use for…in to iterate over the properties of an object (the object keys):
/* Iterating over Objects : for...in */


const o = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

/* console.log('property: value');
// 'p' is the property
for (p in o) {
    console.log(p + ': ' + o[p]);
} */

for(p in o){
  console.log(o[p])
}