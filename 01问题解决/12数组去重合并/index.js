
const combine = function(){
    console.log(arguments)
    // console.log(...args)
    
    let arr =[].concat.apply([],arguments)
    return Array.from(new Set(arr))
}

var m = [1,2,3]
var n = [2,3,4]

console.log(combine(m,n))
