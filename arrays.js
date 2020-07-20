//Use for…of to iterate over the values in an iterable


/* ARRAYS */
// filter or remove duplicates
// nums.filter( (num, index) => nums.indexOf(num) === index);

/*
  METHODS

    ADD Element(s)
      push() - END
      unshift() - BEGIN
    
    REMOVE Element(s)
      pop() - END
      shift() - BEGIN
      splice(index,numToRemove,itemsToAdd) - 3 parameters: index to start; num to remove; items to add (can be multiple)
                 - also, will return an array of the removed items
    
      COPY Element
      slice(startIndex,stopIndex) - Leaves original in tack, just copies
      [...copyArr] - spread operator copies array passed to it
      [...arrOne, ...arrTwo, 'string', 'another'] - allows multiple arr and values to concat

      CHECK Element
      .indexOf(item) - returns the index of the array where item is found, or -1 if not present

*/