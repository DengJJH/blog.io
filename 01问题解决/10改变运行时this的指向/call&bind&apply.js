// // call、bind、apply都是改变this指向的方法

// // 三者间的区别
// // call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数，可以调用的时候再进行传参。

// // call和apply的区别
// // 主要在于参数的区别，call从第二个参数以参数列表的形式展现，而apply则是把除了改变上下文对象的参数放在一个数组里

// // fn.call(obj,1,2); 立即执行
// // fn.apply(obj,[1,2]); 立即执行
// // fn.bind(obj,1,2); 点击时才执行

// // call

var ls = {
  name: '小林',
  age: 22,
  say: function (school, grade) {
    console.log('我叫' + this.name + '我就读' + school + ',今年' + grade)
  },
}

var zjf = {
  name: '小猪',
  age: 23,
}

// call方法
ls.say.call(zjf, '希望大学', '大四')

// apply方法
ls.say.apply(zjf, ['实验大学', '大三'])

// bind方法
ls.say.bind(zjf, '软件大学', '大二')
ls.say.bind(zjf, '软件大学', '大一')()
