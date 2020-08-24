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

let count = 0

reader.on("close", () => {
  const A = lines[1].split(" ").map(Number)
  mergeSort(A, 0, A.length)
  console.log(A.join(" "))
  console.log(count)
})

const merge = (A, left, mid, right) => {
  const n1 = mid - left
  const n2 = right - mid
  const L = Array(n1 + 1)
  const R = Array(n2 + 1)

  for (let i = 0; i < n1; i++) {
    L[i] = A[left + i]
  }
  for (let i = 0; i < n2; i++) {
    R[i] = A[mid + i]
  }
  L[n1] = Number.MAX_VALUE
  R[n2] = Number.MAX_VALUE

  let i = 0, j = 0

  for (let k = left; k < right; k++) {
    count++
    if (L[i] <= R[j]) {
      A[k] = L[i++]
    } else {
      A[k] = R[j++]
    }
  }
}

const mergeSort = (A, left, right) => {
  if (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    mergeSort(A, left, mid)
    mergeSort(A, mid, right)
    merge(A, left, mid, right)
  }
  return A
}