'use strict'


const obj = {
    a: 5,
    b: { g: 8, newObj: 9, t: { q: 48 } },
    x: 47,
    l: { f: 85, p: { u: 89, m: 7 }, s: 71 },
    r: { h: 9, a: 'test', s: 'test2' }
  };
  //test

/* console.log('obj object before cloning: ', obj); */

  const refToObj = obj;


  const newObj = deepClone(obj);
  function deepClone(obj) {
  const cloneObj = {};
  for(const i in obj) {
    if (obj[i] instanceof Object) {
      cloneObj[i] = deepClone(obj[i]);
      continue;
    }
    cloneObj[i] = obj[i];
  }
  return cloneObj;
}
newObj.addnlProp = { fd: 45 };
console.log('obj object after cloning: ', obj);
console.log('newObj object: ', newObj);

newObj.x = 76;
//test

/* console.log('newObj object: ', newObj);
console.log('obj object: ', obj); */


refToObj.addToobj = 100;

//test

/* console.log('refToObj object: ', refToObj); 
console.log('obj object: ', obj); 
console.log('newObj object: ', newObj);  */