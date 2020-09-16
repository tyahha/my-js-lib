import { ssvToNums } from "./common"

export const BinaryTreeNil = -1
const NIL = BinaryTreeNil

export interface BinaryTreeNode {
  value: number
  left: BinaryTreeNode | undefined
  right: BinaryTreeNode | undefined
  parent: BinaryTreeNode | undefined
}

export const preOrderBinaryTreeWalk = (
  curNode: BinaryTreeNode,
  process: (node: BinaryTreeNode) => void
) => {
  process(curNode)
  if (curNode.left) preOrderBinaryTreeWalk(curNode.left, process)
  if (curNode.right) preOrderBinaryTreeWalk(curNode.right, process)
}

export const inOrderBinaryTreeWalk = (
  curNode: BinaryTreeNode,
  process: (node: BinaryTreeNode) => void
) => {
  if (curNode.left) inOrderBinaryTreeWalk(curNode.left, process)
  process(curNode)
  if (curNode.right) inOrderBinaryTreeWalk(curNode.right, process)
}

export const postOrderBinaryTreeWalk = (
  curNode: BinaryTreeNode,
  process: (node: BinaryTreeNode) => void
) => {
  if (curNode.left) postOrderBinaryTreeWalk(curNode.left, process)
  if (curNode.right) postOrderBinaryTreeWalk(curNode.right, process)
  process(curNode)
}

export const valueToNode = (value: number): BinaryTreeNode => ({
  value,
  left: undefined,
  right: undefined,
  parent: undefined,
})

export const createBinaryTree = (lines: string[]): BinaryTreeNode => {
  const n = Number(lines[0])

  const nodes = Array<BinaryTreeNode>(n)
  const getNode = (i: number): BinaryTreeNode => {
    let node = nodes[i]
    if (!node) {
      node = valueToNode(i)
      nodes[i] = node
    }
    return node
  }

  for (let i = 1; i <= n; i++) {
    const [value, left, right] = ssvToNums(lines[i])
    const curNode = getNode(value)
    if (left !== NIL) {
      curNode.left = getNode(left)
      curNode.left.parent = curNode
    }
    if (right !== NIL) {
      curNode.right = getNode(right)
      curNode.right.parent = curNode
    }
  }

  const rootNode = nodes.find((node) => !node.parent)
  if (!rootNode) throw new Error("not found root Node")

  return rootNode
}

export const insertToBinarySearchTree = (src: number, T: BinaryTreeNode | undefined): BinaryTreeNode => {
  let z = valueToNode(src)
  if (!T) {
    return z
  }

  let y: BinaryTreeNode = T
  let x: BinaryTreeNode | undefined = T

  while (x) {
    y = x
    x = z.value < x.value ? x.left : x.right
  }

  z.parent = y

  if (z.value < y.value) {
    y.left = z
  } else {
    y.right = z
  }

  return T
}

export const existsInBinarySearchTree = (rootNode: BinaryTreeNode, num: number): boolean => {
  let cur: BinaryTreeNode | undefined = rootNode
  while (cur) {
    if (cur.value === num) return true
    cur = cur.value > num ? cur.left : cur.right
  }

  return false
}