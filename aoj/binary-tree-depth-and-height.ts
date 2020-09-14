import { ssvToNums } from "./common"

const NIL = -1

interface Node {
  value: number
  left: number
  right: number
  parent: number
  sibling: number
  depth: number
  height: number
}

const getDegree = (node: Node): number => {
  let ret = 0
  if (node.left !== NIL) ret++
  if (node.right !== NIL) ret++
  return ret
}

const setDepthAndHeight = (nodes: Node[], i: number, depth: number): number => {
  if (i === NIL) return -1

  const node = nodes[i]
  node.depth = depth
  node.height = Math.max(
    setDepthAndHeight(nodes, node.left, depth + 1),
    setDepthAndHeight(nodes, node.right, depth + 1),
  ) + 1
  return node.height
}

const getNodeType = (node: Node) => {
  if (node.parent === NIL) return "root"
  if (node.left !== NIL || node.right !== NIL) return "internal node"
  return "leaf"
}

const getNode = (nodes: Node[], i: number): Node => {
  let node: Node = nodes[i]
  if (!node) {
    node = {
      value: -1,
      left: -1,
      right: -1,
      parent: -1,
      sibling: -1,
      depth: -1,
      height: -1,
    }
    nodes[i] = node
  }
  return node
}

export const binaryTreeSolve = (lines: string[]): void => {
  const n = Number(lines[0])
  const nodes = Array<Node>(n)

  for (let i = 1; i<= n; i++) {
    const [value, left, right] = ssvToNums(lines[i])
    const curNode = getNode(nodes, value)
    curNode.value = value
    curNode.left = left
    curNode.right = right
    const leftNode = getNode(nodes, left)
    leftNode.value = left
    leftNode.parent = value
    leftNode.sibling = right
    const rightNode = getNode(nodes, right)
    rightNode.value = right
    rightNode.parent = value
    rightNode.sibling = left
  }

  const rootIndex = nodes.findIndex(node => node.parent === NIL)
  setDepthAndHeight(nodes, rootIndex, 0)

  for (let i = 0; i < n; i++) {
    const node = nodes[i]

    console.log(`node ${i}: parent = ${node.parent}, sibling = ${node.sibling}, degree = ${getDegree(node)}, depth = ${node.depth}, height = ${node.height}, ${getNodeType(node)}`)
  }
}