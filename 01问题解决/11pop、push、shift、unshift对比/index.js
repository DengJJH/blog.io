var arr = new Array()

arr = ['harrison','lin','sen']
console.log("原始数组：",arr)


// push方法：从数组结尾处增加一个或多个数组元素
// (method) Array<any>.push(...items: any[]): number
// Appends new elements to the end of an array, and returns the new length of the array.
pushReturnVal = arr.push("test1","test2")
console.log("\npush方法的返回值:",pushReturnVal)
console.log("使用push方法后的数组:",arr)



// pop方法，从数组结尾处弹出一个数组元素
// (method) Array<any>.pop(): any
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
popReturnVal = arr.pop()
console.log("\npop方法的返回值:",popReturnVal)
console.log("使用pop方法后的数组：",arr)



// shift方法，从数组开头处弹出一个元素
// (method) Array<any>.shift(): any
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// 移除数组的第一个元素并返回其值，如果数组为空，则返回undefined

shiftReturnVal = arr.shift()
console.log("\nshift函数的返回值:",shiftReturnVal)
console.log("使用shift方法后的数组:",arr)



// unshift方法，从数组开头处增加若干个元素
// (method) Array<any>.unshift(...items: any[]): number
// Inserts new elements at the start of an array, and returns the new length of the array.
unshiftReturnVal = arr.unshift("test3","test4","test5")
console.log("\nunshift函数的返回值:",unshiftReturnVal)
console.log("使用unshift方法后的数组:",arr)


