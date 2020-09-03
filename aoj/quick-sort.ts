import { partition } from "./partition"
import { CompareFunction } from "./common"

const quickSortInternal = <T>(A: T[], p: number, r: number, compare: CompareFunction<T>): void => {
  if (p < r) {
    let q = partition(A, p, r, compare)
    quickSortInternal(A, p, q - 1, compare)
    quickSortInternal(A, q + 1, r, compare)
  }
}

export const quickSort = <T>(a: ReadonlyArray<T>, compare: CompareFunction<T>): T[] => {
  const A = a.concat()
  quickSortInternal(A, 0, A.length - 1, compare)
  return A
}
