import { inversionNumbers } from "./inversion-numbers"

describe("inversion numbers", () => {
  test("test1", () => {
    const input = "3 5 2 1 4".split(" ").map(Number)
    expect(inversionNumbers(input)).toBe(6)
  })
  test("test2", () => {
    const input = "3 1 2".split(" ").map(Number)
    expect(inversionNumbers(input)).toBe(2)
  })
})
