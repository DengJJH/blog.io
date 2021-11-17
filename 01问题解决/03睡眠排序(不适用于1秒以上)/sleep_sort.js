const arr = [20, 100, 90, 5, 2, 30, 80, 1]
const arr1 = [2000, 10000, 9000, 500, 200, 3000, 8000, 100]

for (let item of arr) {
  setTimeout(() => console.log(item), item)
}
