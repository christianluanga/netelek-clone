let DISTANCE_110 = 0
const DISTANCE_11 = 55
let r110 = 0
let T_K = 0
let dtk = 0
const lengthOfNumber = (n) => {
  return n.toString().length
}

const isEven = (n) => {
  return n % 2 === 0
}

const distanceBetweenPalidromes = (n) => {
  const length = lengthOfNumber(n)
  return isEven(length)
    ? 11 * Math.pow(10, length / 2 - 1)
    : Math.pow(10, (length - 1) / 2)
}

const variableLength = (n) => {
  const exponent = isEven(n) ? (n - 5 - 1) / 2 + 1 : ((n / 5 - 1) * 10) / 4 + 1
  return 11 * Math.pow(10, Math.round(exponent))
}

const isPalindrome = (n) => {
  // const p = n.toString().split("").reverse().join("") nn
  // if (n < 10 || p == n) console.log(`${n}`)
  // else return false
  r110 = distanceBetweenPalidromes(n)
  DISTANCE_110 = ((r110 - 1) * r110) / 2
  T_K = variableLength(lengthOfNumber(n))
  dtk = ((T_K - 1) * T_K) / 2
  let pal = []
  for (i = Math.pow(10, lengthOfNumber(n) - 1); i < n + 1; i++) {
    if (i.toString().split("").reverse().join("") == i) {
      pal.push(i)
    }
  }
  return pal
}

const no = (n) => {
  const result = isPalindrome(n)
  console.log(result.length)
  let p = 0
  for (i = 0; i <= result.length; i++) {
    // if ((i - 1) % 9 == 0 && i > 1) {
    //   p += 5995
    // } else {
    //   p += 4950
    // }
    if (result[i + 1] - result[i] == r110) {
      p += DISTANCE_110
    } else if (result[i + 1] - result[i] == T_K) {
      p += dtk
    } else if (result[i + 1] - result[i] == 11) {
      p += DISTANCE_11
    }
    // console.log(`[${i}] - ${result[i]} `)
  }
  return p
}
//console.log(distanceBetweenPalidromes(1017000))
console.log(no(999999))
