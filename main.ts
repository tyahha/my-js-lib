import readline from "readline"
import { postOrderBinaryTreeWalk } from "./aoj/binary-tree"
import { binaryTreeReconstruction } from "./aoj/binary-tree-reconstruction"
import { ssvToNums } from "./aoj/common"

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
  const rootNode = binaryTreeReconstruction(
    ssvToNums(lines[1]),
    ssvToNums(lines[2])
  )
  let str = ""
  postOrderBinaryTreeWalk(rootNode, (node) => (str += ` ${node.value}`))
  console.log(str.slice(1))
})
