import readline from "readline"
import { getFibonacciNumber } from "./aoj/fibonacci-number"

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
  console.log(getFibonacciNumber(Number(lines[0])))
})
