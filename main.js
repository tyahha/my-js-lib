process.stdin.resume()
process.stdin.setEncoding("utf8")

const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []

reader.on("line", (line) => {
  lines.push(line)
})

reader.on("close", () => {
  const S = lines[1].split(" ").map(Number)
  const T = lines[3].split(" ").map(Number)
  let C = 0
  T.forEach(e => {
    binarySearch(S, e) && C++
  })
  console.log(C)
})

const binarySearch = (S, t) => {
  let left = 0
  let right = S.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (S[mid] === t) {
      return true
    } else if (t < S[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return false
}