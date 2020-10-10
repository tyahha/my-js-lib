import readline from "readline"
import { ssvToNums } from "./aoj/common"
import { getCompleteBinaryTreeInfo } from "./aoj/complete-binary-tree"

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
  const nodes = ssvToNums(lines[1])
  const ns = getCompleteBinaryTreeInfo(nodes)
  ns.map(([key, parent, left, right], i) => {
    console.log(
      `node ${i + 1}: key = ${key}, ${parent ? `parent key = ${parent}, ` : ""}${
        left ? `left key = ${left}, ` : ""
      }${right ? `right key = ${right}, ` : ""}`
    )
  })
})
