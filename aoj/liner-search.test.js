const SinT = require("./liner-search")

describe("liner-search", () => {
  test("test", () => {
    const ret = SinT([1, 2, 3, 4], [2, 4, 5])
    expect(ret).toEqual([2, 4])
  })
})
