import { countingSort } from "./counting-sort"

describe("counting-sort", () => {
  test("test1", () => {
    const input = "4,5,0,3,1,5,0,5".split(",").map(Number)
    const want = "0 0 1 3 4 5 5 5".split(" ").map(Number)
    const got = countingSort(input)
    expect(got).toEqual(want)
  })
})