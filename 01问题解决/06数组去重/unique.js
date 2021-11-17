//es5
arr1 = [11, 11, 58, 25, 32, 32, 4, 4, 58, 25]

function unique(arr) {
  var res = arr.filter(function (item, index, array) {
    console.log(item, index)
    console.log(array.indexOf(item))
    // indexOf返回某个指定的字符串值在字符串中首次出现的位置
    return array.indexOf(item) === index
  })
  return res
}

console.log(unique(arr1))

//es6
var unique = (arr) => [...new Set(arr)]
