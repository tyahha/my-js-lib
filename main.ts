import readline from "readline"
import { createRootedTree, lineToNodeInfo, NodeInfo } from "./aoj/rooted-tree"

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
  const nodeInfos: NodeInfo[] = []
  for (let i = 1; i <= n; i++) {
    nodeInfos.push(lineToNodeInfo(lines[i]))
  }

  const nodes = createRootedTree(nodeInfos)

  nodes.forEach((node) => {
    const value = node.value
    let parent = node.parent
    const nodeType =
      parent == null
        ? "root"
        : node.children.length > 0
        ? "internal node"
        : "leaf"
    const parentValue = parent?.value ?? -1

    console.log(
      `node ${value}: parent = ${parentValue}, depth = ${node.depth}, ${nodeType}, [${node.children
        .map((c) => c.value)
        .join(", ")}]`
    )
  })
})
