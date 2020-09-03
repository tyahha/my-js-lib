import { ssvToNums } from "./common"
import { partition } from "./partition"

describe("partition", () => {
  test("test1", () => {
    const input = ssvToNums("13 19 9 5 12 8 7 4 21 2 6 11")
    const want = ssvToNums("9 5 8 7 4 2 6 11 21 13 19 12")
    const p = partition(input, 0, input.length - 1)
    expect(input).toEqual(want)
    expect(p).toEqual(7)
  })
})