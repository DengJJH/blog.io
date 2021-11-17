function typeOf(obj) {
  // 写法1
  //   let res = Object.prototype.toString.call(obj).split(' ')[1]
  //   res = res.substring(0, res.length - 1).toLowerCase()
  //   console.log(res)

  //写法2
  res = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  console.log(res)
}

typeOf('s')
typeOf([])
typeOf({})
