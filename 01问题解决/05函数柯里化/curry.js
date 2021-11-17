// function add(a, b, c) {
//   return a + b + c
// }
// console.log(add.length)

// function curry(fn) {
//   let judge = (...args) => {
//     console.log(args)
    
//     // fn.length打印的是函数传递参数的数量
//     if (args.length == fn.length) return fn(...args)
//     return (...arg) => judge(...args, ...arg)
//   }
//   return judge
// }

// let addCurry = curry(add)
// console.log(addCurry(1)(2)(3))




function currying(func) { 
  const args = [];
  return function result(...rest) { 
    console.log(rest)
    
    if (rest.length === 0)
      return func(...args);
      args.push(...rest);
      console.log(args)
      
      return result;
   }
 }
const add = (...args) => args.reduce((a, b) => a + b); 
const sum = currying(add);

console.log(sum(1)(2)(3)(4)(5)());
console.log(add(1,2,3))

