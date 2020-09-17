import {
  BinaryTreeNode,
  createBinaryTree, deleteFromBinarySearchTree, existsInBinarySearchTree,
  inOrderBinaryTreeWalk, insertToBinarySearchTree,
  postOrderBinaryTreeWalk,
  preOrderBinaryTreeWalk
} from "./binary-tree"
import { ssvToNums } from "./common"

describe("binary tree walk", () => {
  const input = `9
0 1 4
1 2 3
2 -1 -1
3 -1 -1
4 5 8
5 6 7
6 -1 -1
7 -1 -1
8 -1 -1`.split("\n")
  const rootNode = createBinaryTree(input)
  test("basic", () => {
    expect(input[0]).toBe("9")
    expect(input[9]).toBe("8 -1 -1")
  })
  test("pre order", () => {
    const ret: number[] = []
    preOrderBinaryTreeWalk(rootNode, (n) => {
      ret.push(n.value)
    })
    expect(ret).toEqual(ssvToNums("0 1 2 3 4 5 6 7 8"))
  })
  test("in order", () => {
    const ret: number[] = []
    inOrderBinaryTreeWalk(rootNode, (n) => {
      ret.push(n.value)
    })
    expect(ret).toEqual(ssvToNums("2 1 3 0 6 5 7 4 8"))
  })
  test("post order", () => {
    const ret: number[] = []
    postOrderBinaryTreeWalk(rootNode, (n) => {
      ret.push(n.value)
    })
    expect(ret).toEqual(ssvToNums("2 3 1 6 7 5 8 4 0"))
  })

  test("create binary search tree", () => {
    let rootNode = insertToBinarySearchTree(30, undefined)
    rootNode = insertToBinarySearchTree(88, rootNode)
    rootNode = insertToBinarySearchTree(12, rootNode)
    rootNode = insertToBinarySearchTree(1, rootNode)
    rootNode = insertToBinarySearchTree(20, rootNode)
    rootNode = insertToBinarySearchTree(17, rootNode)
    rootNode = insertToBinarySearchTree(25, rootNode)
    const inOrder: number[] = []
    const preOrder: number[] = []
    inOrderBinaryTreeWalk(rootNode, node => inOrder.push(node.value))
    preOrderBinaryTreeWalk(rootNode, node => preOrder.push(node.value))

    expect(inOrder).toEqual(ssvToNums("1 12 17 20 25 30 88"))
    expect(preOrder).toEqual(ssvToNums("30 12 1 20 17 25 88"))
  })

  test("exists in binary search tree", () => {
    let rootNode = insertToBinarySearchTree(30, undefined)
    expect(existsInBinarySearchTree(rootNode, 30)).toBe(true)

    rootNode = insertToBinarySearchTree(88, rootNode)
    expect(existsInBinarySearchTree(rootNode, 30)).toBe(true)
    expect(existsInBinarySearchTree(rootNode, 88)).toBe(true)

    rootNode = insertToBinarySearchTree(1, rootNode)
    expect(existsInBinarySearchTree(rootNode, 30)).toBe(true)
    expect(existsInBinarySearchTree(rootNode, 88)).toBe(true)
    expect(existsInBinarySearchTree(rootNode, 1)).toBe(true)
    expect(existsInBinarySearchTree(rootNode, 3)).toBe(false)
  })

  test("delete node from binary serach tree", () => {
    let rootNode: BinaryTreeNode | undefined = insertToBinarySearchTree(8, undefined)
    rootNode = insertToBinarySearchTree(88, rootNode)
    rootNode = insertToBinarySearchTree(1, rootNode)

    expect(existsInBinarySearchTree(rootNode, 1)).toBe(true)
    expect(existsInBinarySearchTree(rootNode, 88)).toBe(true)

    rootNode = deleteFromBinarySearchTree(rootNode, 1)
    expect(existsInBinarySearchTree(rootNode, 1)).toBe(false)
    expect(existsInBinarySearchTree(rootNode, 88)).toBe(true)
  })

  test("delete node from binary serach tree 2", () => {
    let rootNode: BinaryTreeNode | undefined = insertToBinarySearchTree(8, undefined)
    rootNode = insertToBinarySearchTree(2, rootNode)
    rootNode = insertToBinarySearchTree(3, rootNode)
    rootNode = insertToBinarySearchTree(7, rootNode)
    rootNode = insertToBinarySearchTree(22, rootNode)
    rootNode = insertToBinarySearchTree( 1, rootNode)
    rootNode = deleteFromBinarySearchTree(rootNode, 3)
    rootNode = deleteFromBinarySearchTree(rootNode, 7)
    expect(!existsInBinarySearchTree(rootNode, 7))
  })
})
