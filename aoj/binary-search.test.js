const binarySearch = require("./binary-search")

describe("binary-search", () => {
  test("case 1", () => {
    const S = [1, 2, 3]
    const got = binarySearch(S, 1)
    expect(got).toBe(true)
  })
})
