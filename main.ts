import readline from "readline"
import {
  BinaryTreeNode,
  createBinaryTree,
  inOrderBinaryTreeWalk,
  postOrderBinaryTreeWalk,
  preOrderBinaryTreeWalk
} from "./aoj/binary-tree-walk"

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
  const rootNode = createBinaryTree(lines)

  const putNode = (node: BinaryTreeNode) => process.stdout.write(` ${node.value}`)

  console.log("Preorder")
  preOrderBinaryTreeWalk(rootNode, putNode)
  console.log()
  console.log("Inorder")
  inOrderBinaryTreeWalk(rootNode, putNode)
  console.log()
  console.log("Postorder")
  postOrderBinaryTreeWalk(rootNode, putNode)
  console.log()
})
