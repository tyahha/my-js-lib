import { quickSort } from "./quick-sort"
import { compareNumber } from "./common"

describe("quick sort", () => {
  test("test1", () => {
    const input = [3, 1, 3, 2, 9]
    const want = [1, 2, 3, 3, 9]
    const got = quickSort(input, compareNumber)
    expect(got).toEqual(want)
  })
})
