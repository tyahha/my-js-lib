import { ssvToNums } from "./common"

export const BinaryTreeNil = -1
const NIL = BinaryTreeNil

export interface BinaryTreeNode {
  value: number
  left: BinaryTreeNode | undefined
  right: BinaryTreeNode | undefined
  parent: BinaryTreeNode | undefined
  priority: number
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
  priority: 0,
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

export const insertToBinarySearchTree = (
  src: number,
  T: BinaryTreeNode | undefined
): BinaryTreeNode => {
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

export const existsInBinarySearchTree = (
  rootNode: BinaryTreeNode | undefined,
  num: number
): boolean => {
  if (!rootNode) return false

  let cur: BinaryTreeNode | undefined = rootNode
  while (cur) {
    if (cur.value === num) return true
    cur = cur.value > num ? cur.left : cur.right
  }

  return false
}

export const deleteFromBinarySearchTree = (
  rootNode: BinaryTreeNode | undefined,
  num: number
): BinaryTreeNode | undefined => {
  let cur = rootNode
  while (cur) {
    if (cur.value === num) {
      if (cur.parent === undefined) {
        return undefined
      } else {
        const delNode = (target: BinaryTreeNode) => {
          if (!target.parent) return
          if (target.left) {
            if (target.parent.left === target) {
              target.parent.left = target.left
            } else {
              target.parent.right = target.left
            }
            target.left.parent = target.parent
          } else if (target.right) {
            if (target.parent.left === target) {
              target.parent.left = target.right
            } else {
              target.parent.right = target.right
            }
            target.right.parent = target.parent
          } else {
            if (target.parent.left === target) {
              target.parent.left = undefined
            } else {
              target.parent.right = undefined
            }
          }
        }

        if (cur.left && cur.right) {
          let target = cur.right
          while (target.left) {
            target = target.left
          }
          cur.value = target.value
          delNode(target)
        } else {
          delNode(cur)
        }
      }
      return rootNode
    } else {
      cur = num < cur.value ? cur.left : cur.right
    }
  }
  return rootNode
}

export const rightRotate = (t: BinaryTreeNode): BinaryTreeNode => {
  const s = t.left
  if (!s) return t
  t.left = s.right
  s.right = t
  return s
}

export const leftRotate = (t: BinaryTreeNode): BinaryTreeNode => {
  const s = t.right
  if (!s) return t
  t.right = s.left
  s.left = t
  return s
}

export const treapInsert = (
  t: BinaryTreeNode | undefined,
  key: number,
  priority: number
): BinaryTreeNode => {
  if (!t) {
    const node = valueToNode(key)
    node.priority = priority
    return node
  }

  if (key === t.value) return t

  if (key < t.value) {
    t.left = treapInsert(t.left, key, priority)
    if (t.priority < t.left.priority) {
      t = rightRotate(t)
    }
  } else {
    t.right = treapInsert(t.right, key, priority)
    if (t.priority < t.right.priority) {
      t = leftRotate(t)
    }
  }

  return t
}

export const treapDelete = (t: BinaryTreeNode | undefined, key: number): BinaryTreeNode | undefined => {
  if (!t) return undefined
  if (key < t.value) {
    t.left = treapDelete(t.left, key)
  } else if (key > t.value) {
    t.right = treapDelete(t.right, key)
  } else {
    return _treapDelete(t, key)
  }
  return t
}

const _treapDelete = (t: BinaryTreeNode, key: number): BinaryTreeNode | undefined => {
  if (!t.left && !t.right) {
    return undefined
  } else if (!t.left) {
    t = leftRotate(t)
  } else if (!t.right) {
    t = rightRotate(t)
  } else {
    if (t.left.priority > t.right.priority) {
      t = rightRotate(t)
    } else {
      t = leftRotate(t)
    }
  }
  return treapDelete(t, key)
}