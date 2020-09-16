import readline from "readline"
import {
  BinaryTreeNode, existsInBinarySearchTree,
  inOrderBinaryTreeWalk,
  insertToBinarySearchTree,
  preOrderBinaryTreeWalk
} from "./aoj/binary-tree"

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
  let rootNode: BinaryTreeNode | undefined = undefined
  for (let i = 1; i <= n; i++) {
    const [method, strNum] = lines[i].split(" ")
    if (method === "insert") {
      rootNode = insertToBinarySearchTree(Number(strNum), rootNode)
    } else if (method === "print" && rootNode) {
      let inOrder = ""
      let preOrder = ""
      inOrderBinaryTreeWalk(rootNode, (node) => (inOrder += ` ${node.value}`))
      preOrderBinaryTreeWalk(rootNode, (node) => (preOrder += ` ${node.value}`))
      console.log(inOrder)
      console.log(preOrder)
    } else if (method === "find") {
      console.log(rootNode && existsInBinarySearchTree(rootNode, Number(strNum)) ? "yes" : "no")
    }
  }
})
