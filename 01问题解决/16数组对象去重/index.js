let objectArr = [
    {id:0,key:0,children:'test'},
    {id:0,key:0,children:'test'},
    {id:0,key:0,children:'test'},
    {id:0,key:0,children:'test'},
    {id:10,key:1,children:'harrison'},
    {id:10,key:1,children:'harrison'},
    {id:10,key:1,children:'harrison'},
    {id:10,key:1,children:'harrison'}
]

// 采用数组中的reduce方法，遍历数组

var obj = {}
objectArr = objectArr.reduce(function(item, next) {
    console.log(next)
    
    obj[next.key] ? '' : obj[next.key] = true && item.push(next);
    return item;
}, []);

console.log(objectArr)