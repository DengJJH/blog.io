// 1、 ...args只包含那些没有对应的实参，而arguments对象包含了传给函数的所有实参
// 2、argument对象不是真正的数组，而剩余参数是真正的Array实例，可以调用数组的方法比如sort、map、pop
// 3、arguments对象有一些自身的附加属性(callee)

const arr = [2,6,4,3]

const sortArgs = function(...args){
    return args.sort()
}

console.log("args能够调用数组的sort方法:",sortArgs(arr))


const sortArgument = function(){
    return arguments.sort()
}

try{
    console.log(sortArgument(arr))
}
catch(e){
    console.log("arguments不能够调用array的sort方法:",String(e))
}
