import { getFibonacciNumber } from "./fibonacci-number"

describe("fibonacci number", () => {
  it("basic", () => {
    expect(getFibonacciNumber(0)).toBe(1)
    expect(getFibonacciNumber(1)).toBe(1)
    expect(getFibonacciNumber(2)).toBe(2)
    expect(getFibonacciNumber(3)).toBe(3)
    expect(getFibonacciNumber(4)).toBe(5)
  })
})