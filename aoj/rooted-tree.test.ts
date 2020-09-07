import { lineToNodeInfo } from "./rooted-tree"

describe("rooted tree", () => {
  describe("lineToNodeInfo", () => {
    test("test1", () => {
      expect(lineToNodeInfo("0 3 1 4 10")).toEqual({
        value: 0,
        childrenNumbers: [1, 4, 10]
      })
      expect(lineToNodeInfo("1 2 2 3")).toEqual({
        value: 1,
        childrenNumbers: [2, 3]
      })
      expect(lineToNodeInfo("2 0")).toEqual({
        value: 2,
        childrenNumbers: []
      })
    })
  })
})