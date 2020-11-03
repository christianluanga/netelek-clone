const {performance} = require("perf_hooks")

const isPalindrome = (n) => {
  // const p = n.toString().split("").reverse().join("") nn
  // if (n < 10 || p == n) console.log(`${n}`)
  // else return false
  let pal = []
  for (i = 1000; i < 2003; i++) {
    if (i.toString().split("").reverse().join("") == i) {
      pal.push(i)
    }
  }
  return pal
}

const dist = (n) => {
  let count = 0
  do {
    count++
  } while (!isPalindrome(n + count))
  //console.log(n, count)
  return count
}

const sum = (n) => {
  let sum = 0
  for (i = 0; i < n; i++) {
    if (!isPalindrome(i)) sum += dist(i)
  }
  return sum
}

const t0 = performance.now()
const result = isPalindrome()
const t1 = performance.now()
//s ,s = s +4950
// 4950
//5995
//if i - 1 % 9 == 1
//s = s + 5995
//console.log(`sum of distance ${result} computed in ${t1 - t0} milliseconds`)
let p = 0
let = d = 0
let r = 0
let a = 0
for (i = 0; i < result.length; i++) {
  // if ((i - 1) % 9 == 0 && i > 1) {
  //   p += 5995
  // } else {
  //   p += 4950
  // }
  if (result[i + 1] - result[i] == 110) {
    p++
  } else if (result[i + 1] - result[i] == 100) {
    d++
  } else if (result[i + 1] - result[i] == 1100) {
    a++
  } else if (result[i + 1] - result[i] == 11) {
    r++
  }
  // console.log(`[${i}] - ${result[i]} `)
}
console.log(p)
console.log(a)
console.log(d)
console.log(r)
