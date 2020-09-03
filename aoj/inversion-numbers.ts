import { mergeSortInternal } from "./merge-sort"
import { compareNumber } from "./common"

export const inversionNumbers = (A: ReadonlyArray<number>): number => {
  return mergeSortInternal(A.concat(), 0, A.length, 0, Infinity, compareNumber)
}
