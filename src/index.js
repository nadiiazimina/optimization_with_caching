// Task 1: Write a function, times 10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => (n * 10);

console.log (" Task 1");
console.log("times10 return:", times10(9));

// Task 2: Use an abject to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated befor.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log ("Fetching from cache", n);
    return cache[n];
  } else {
    console.log ("Calculating result");
    let result = times10(n); //calculation //90
    cache[n] = result;
    return result;
  }
};

console.log (" Task 2 ");
console.log ("Task 2 calculated value:", memoTimes10(9)); //calculated
console.log ("Task 2 cache value:", memoTimes10(9)); //cache

//Task 3: Clean up your global scope by moving your cache inside your function.
//protip: Use a clouser to return a function that you can call later.
const memoizedClouser = () => {
  let cache = {}; //local cache / take our cache object out of global scope
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n * 10;
      cache[n] = result;
      return result;
    }
  };
};
// we are callingthe body of function that is being returned

//returned function from memoizedAdd
const memoClosureTimes10 = memoizedClouser(); //function from 36-46 referrenced here
console.log (" Task 3 ");
console.log ("Task 3 calculated value:", memoClosureTimes10(9)); //calculated
console.log ("Task 3 cached value:", memoClosureTimes10(9)); //cached

//Task 4: Make your nemo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

//protip: Take advantage of the fact that parameters are saved in the clouser as well, just like the cache from the pervious example.
const memoize = (cb) => {
  let cache = {};
  return (n) => { //[9]
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } 
    else {
      console.log("Calculating result");
      let result = cb(n); // cb(9)
      cache[n] =result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10); //referenced to function 57-70 line
// console.log( " Task 4");
console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
console.log("Task 4 cached value:", memoizedTimes10(9)); //cached




