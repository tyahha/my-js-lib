import { CompareFunction, compareNumber, Ordering } from "./common"

const merge = <T>(
  A: T[],
  left: number,
  mid: number,
  right: number,
  n: number,
  sentinelValue: T,
  compare: CompareFunction<T>
): number => {
  const n1 = mid - left
  const n2 = right - mid
  const L = Array<T>(n1 + 1)
  const R = Array<T>(n2 + 1)

  for (let i = 0; i < n1; i++) {
    L[i] = A[left + i]
  }
  for (let i = 0; i < n2; i++) {
    R[i] = A[mid + i]
  }
  L[n1] = sentinelValue
  R[n2] = sentinelValue

  let i = 0,
    j = 0

  for (let k = left; k < right; k++) {
    const cr = compare(L[i], R[j])
    if (cr != Ordering.GT) {
      A[k] = L[i++]
    } else {
      n += n1 - i
      A[k] = R[j++]
    }
  }

  return n
}

export const mergeSortInternal = <T>(
  A: T[],
  left: number,
  right: number,
  n: number,
  sentinelValue: T,
  compare: CompareFunction<T>
): number => {
  if (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    n = mergeSortInternal(A, left, mid, n, sentinelValue, compare)
    n = mergeSortInternal(A, mid, right, n, sentinelValue, compare)
    n = merge(A, left, mid, right, n, sentinelValue, compare)
  }
  return n
}

export const mergeSort = <T>(
  A: ReadonlyArray<T>,
  sentinelValue: T,
  compare: CompareFunction<T>
): T[] => {
  const ret = A.concat()
  mergeSortInternal(ret, 0, ret.length, 0, sentinelValue, compare)
  return ret
}

export const mergeSortNumber = (A: ReadonlyArray<number>): number[] =>
  mergeSort(A, Infinity, compareNumber)
