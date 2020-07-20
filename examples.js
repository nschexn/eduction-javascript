// Recursive Function Example
function factorial(n){
  if(n === 1) return 1
  return n * factorial(n-1);
}

// Rearrange sentence by length of words
const quote = "My loves like a garbage truck."

const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

const sortByLength = (str) => {
  const arr = str.toLowerCase().replace('.','').split(' ');
  return arr.sort((a,b) => b.length - a.length)
}

const constructSentenceFromArray = (arr) => {
  const sentence = arr.join(' ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
}

const stringToSorted = (sentence) => constructSentenceFromArray(sortByLength(sentence))

console.log(stringToSorted(quote))