import { BinaryTreeNode } from "./binary-tree"

interface NodeWithIndex {
  value: number
  left: NodeWithIndex | undefined
  right: NodeWithIndex | undefined
  parent: NodeWithIndex | undefined
  inOrderIndex: number
  priority: number
}
export const binaryTreeReconstruction = (
  preOrder: number[],
  inorder: number[]
): BinaryTreeNode => {
  const n = preOrder.length
  const nodes = Array<NodeWithIndex>(n)

  let curPreOrderIndex = 0
  const getNextNode = (): NodeWithIndex | undefined => {
    if (curPreOrderIndex >= n) return undefined
    let node = nodes[curPreOrderIndex]
    if (!node) {
      const value = preOrder[curPreOrderIndex]
      node = {
        value,
        inOrderIndex: inorder.findIndex((v) => v === value),
        parent: undefined,
        left: undefined,
        right: undefined,
        priority: 0,
      }
      nodes[curPreOrderIndex] = node
    }

    return node
  }

  const setNode = (
    curNode: NodeWithIndex,
    leftLimit: number,
    rightLimit: number
  ): void => {
    let nextNode = getNextNode()
    if (
      nextNode &&
      leftLimit <= nextNode.inOrderIndex &&
      nextNode.inOrderIndex < curNode.inOrderIndex
    ) {
      curPreOrderIndex++
      curNode.left = nextNode
      nextNode.parent = curNode
      setNode(nextNode, leftLimit, curNode.inOrderIndex - 1)

      nextNode = getNextNode()
    }

    if (
      nextNode &&
      curNode.inOrderIndex < nextNode.inOrderIndex &&
      nextNode.inOrderIndex <= rightLimit
    ) {
      curPreOrderIndex++
      curNode.right = nextNode
      nextNode.parent = curNode
      setNode(nextNode, curNode.inOrderIndex + 1, rightLimit)
    }
  }

  const rootNode = getNextNode()!
  curPreOrderIndex++
  setNode(rootNode, 0, n - 1)

  return rootNode
}
