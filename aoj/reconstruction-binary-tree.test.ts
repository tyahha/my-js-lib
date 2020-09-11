import { ssvToNums } from "./common"
import { reconstructionBinaryTree } from "./reconstruction-binary-tree"
import { postOrderBinaryTreeWalk } from "./binary-tree-walk"

describe("reconstruction binary tree", () => {
  test("test1", () => {
    const preOrder = ssvToNums("1 2 3 4 5")
    const inOrder = ssvToNums("3 2 4 1 5")
    const want = ssvToNums("3 4 2 5 1")
    const got: number[] = []
    postOrderBinaryTreeWalk(reconstructionBinaryTree(preOrder, inOrder), node => got.push(node.value))
    expect(got).toEqual(want)
  })
  test("test2", () => {
    const preOrder = ssvToNums("1 2 3 4")
    const inOrder = ssvToNums("1 2 3 4")
    const want = ssvToNums("4 3 2 1")
    const got: number[] = []
    postOrderBinaryTreeWalk(reconstructionBinaryTree(preOrder, inOrder), node => got.push(node.value))
    expect(got).toEqual(want)
  })
})