import readline from "readline"
import { mergeSort } from "./aoj/merge-sort"

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
  let A = lines[1].split(" ").map(Number)
  console.log(mergeSort(A, 0, A.length, 0))
})
