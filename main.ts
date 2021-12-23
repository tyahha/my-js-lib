import readline from "readline"
import { ssvToNums } from "./aoj/common"
import { getMatrixMultiplicationCount } from "./aoj/matrix"

process.stdin.resume()
process.stdin.setEncoding("utf8")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines: string[] = []

reader.on("line", (line) => {
  lines.push(line)
})

reader.on("close", () => {
  const n = Number(lines[0])
  let [r1, c1] = ssvToNums(lines[1])
  let multiplicationCount = 0
  for (let i = 2; i <= n; i++) {
    const [r2, c2] = ssvToNums(lines[i])
    multiplicationCount += getMatrixMultiplicationCount(r1, c1, r2, c2)
    c1 = c2
  }
  console.log(multiplicationCount)
})
