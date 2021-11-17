
// 背景：
// 在工作中碰到一个需要判断是否为数字的条件，
// 通过isNaN判断发生了一点小问题，故产生了对其细节进行研究的兴趣。


// NaN ———— Not a Number 指示某个值不是数字

console.log("NaN === NaN",NaN === NaN)
// false

// 如果isNaN函数的参数不是Number类型， 
// isNaN函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断
console.log("isNaN('0-0')",isNaN('0-0'))



// 所以问题出现在了parseInt身上
parseInt