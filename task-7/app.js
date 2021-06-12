'use strict'


const obj = {
    a: 5,
    b:{
        c:5
    }
}


const copyObj = obj

const deepCopyObj = deepClone(obj)


function deepClone(obj){
    const cloneObj ={}
    for(const prop in obj){
        if(obj[i] instanceof Object) {
            cloneObj[i] = deepClone([obj[i]])
            continue
        }
        cloneObj[i] = obj[i]
    }
    return cloneObj
}

deepCopyObj.addnlProp = { fd: 45 };
console.log('Z object after cloning: ', obj);
console.log('Y object: ', deepCopyObj);