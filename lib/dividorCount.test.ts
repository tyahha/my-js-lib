import { divisorsCount } from "./divisorsCount"

describe("divisorsCount", () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 2],
    [4, 3],
  ])("%d's divisor count is %d", (n, expectedResult) => {
    expect(divisorsCount(n)).toBe(expectedResult)
  })
})
