import {
  CompareFunction,
  numberCompare,
  Ordering,
  swapArrayValue,
} from "./common"

export const partition = <T>(
  A: T[],
  p: number,
  r: number,
  compare: CompareFunction<T>
): number => {
  let x = A[r]
  let i = p - 1

  for (let j = p; j < r; j++) {
    const compareResult = compare(A[j], x)
    if (compareResult != Ordering.GT) {
      i++
      swapArrayValue(A, i, j)
    }
  }
  swapArrayValue(A, i + 1, r)
  return i + 1
}

export const partitionNumber = (A: number[], p: number, r: number): number =>
  partition(A, p, r, numberCompare)
