import readline from "readline"
import {formattedKochCurve} from "./aoj/koch-curve"

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
  const n = Number(lines[0])
  console.log(formattedKochCurve(n, [0, 0], [100, 0]))
})
