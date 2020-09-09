import readline from "readline"
import { binaryTreeSolve } from "./aoj/binary-tree"

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
  binaryTreeSolve(lines)
})
