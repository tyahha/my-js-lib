import readline from "readline"
import { ssvToNums } from "./aoj/common"
import { partition } from "./aoj/partition"

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

let count = 0

reader.on("close", () => {
  const A = ssvToNums(lines[1])
  const p = partition(A, 0, A.length - 1)
  for (let i = 0; i < A.length; i++) {
    if (i !== 0) process.stdout.write(" ")
    if (i === p) process.stdout.write("[")
    process.stdout.write(A[i].toString())
    if (i === p) process.stdout.write("]")
  }
  console.log("")
})
