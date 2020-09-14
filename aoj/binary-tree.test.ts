import {
  createBinaryTree,
  inOrderBinaryTreeWalk,
  postOrderBinaryTreeWalk,
  preOrderBinaryTreeWalk,
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
})
