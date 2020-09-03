import { swapArrayValue } from "./common"

export const partition = (A: number[], p: number, r: number): number => {
  let x = A[r]
  let i = p - 1

  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i++
      swapArrayValue(A, i, j)
    }
  }
  swapArrayValue(A, i + 1, r)
  return i + 1
}