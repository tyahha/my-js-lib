import { isPrimeNumber } from "./isPrimeNumber"

describe("isPrimeNumber", () => {
  it.each([
    [-1, "not prime number"],
    [0, "not prime number"],
    [1, "not prime number"],
    [2, "prime number"],
    [3, "prime number"],
    [4, "not prime number"],
  ])("%d is %s", (n, primeNumberOrNot) => {
    expect(isPrimeNumber(n)).toBe(primeNumberOrNot === "prime number")
  })
})
