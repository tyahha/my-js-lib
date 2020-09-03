import { mergeSortInternal } from "./merge-sort"

export const inversionNumbers = (A: ReadonlyArray<number>): number => {
  return mergeSortInternal(A.concat(), 0, A.length, 0)
}