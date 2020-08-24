const {mergeSort} = require("./merge-sort")

describe("merge sort", () => {
  test("sort", () => {
    const A = "8 5 9 2 6 3 7 1 10 4".split(" ").map(Number)
    const want = "1 2 3 4 5 6 7 8 9 10".split(" ").map(Number)

    expect(mergeSort(A, 0, A.length)).toEqual(want)
  })
})