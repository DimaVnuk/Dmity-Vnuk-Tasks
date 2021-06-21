'use strict'

//task-1

const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

function pipe (...funcs) {
  return function(x) {
      let result = x;
      for (let func of funcs) {
          result = func(result)
      }
      return result; 
  }
}

let resultOfPipe = pipe(multiplyTwo, minusFour)(10)

console.log(resultOfPipe)







 

//task-2

  const memoizedAdd = () => {
    
  let cache = {};
  return (a,b) => {
    let sum = a + b
    if (sum in cache) {
      console.log('Fetching from cache');
      return cache[sum];
    }
    else {
      console.log('Calculating result');
      let result = a + b;
      cache[sum] = result;
      return result;
    }
  }
}

const newAdd = memoizedAdd();
console.log(newAdd(1,2))




// task-3
const person = {
  name: 'Dima'
}

function sayHello(surname,idOfUser) {
console.log(`Hello  ${this.name} ${surname}, id: ${idOfUser}`)
}
function customApply(fu,context,args){
const uniqId = Date.now().toString()
context[uniqId] = fu
const result = context[uniqId](...args)
delete context[uniqId]
return result
}

customApply(sayHello,person,['Vnuk',1234])






//task-4

function curry(f) { 
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}


function mult(a,b) {
  return a.map(item => item*b)
} 
let multiplyAll = curry(mult)

console.log(multiplyAll([1, 2, 3])(3))


//task-5

let arrayDiff = (arr1,arr2) => {
return arr1.filter(item => !arr2.includes(item));
}

console.log(arrayDiff([1,2,2,2,3],[2,3,1]))