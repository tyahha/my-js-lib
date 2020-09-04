import { ssvToNums } from "./common"
import { getMinimumCostOfSort } from "./minimun-cost-sort"

describe("minimum cost sort", () => {
  test("test1", () => {
    expect(getMinimumCostOfSort(ssvToNums("1 5 3 4 2"))).toBe(7)
    expect(getMinimumCostOfSort(ssvToNums("4 3 2 1"))).toBe(10)
    expect(getMinimumCostOfSort(ssvToNums("6 3 4 2 1 5"))).toBe(24)
    expect(getMinimumCostOfSort(ssvToNums("10 7 8 9"))).toBe(48)
  })
})