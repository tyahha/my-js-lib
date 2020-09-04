import { quickSort } from "./quick-sort"
import { Ordering } from "./common"

interface WithIndex<T> {
  value: T
  index: number
}

const withIndex = <T>(value: T, index: number) => ({
  value,
  index,
})

export const getMinimumCostOfSort = (a: ReadonlyArray<number>): number => {
  const A = a.concat()
  const indexedArray = a.map((v, i) => withIndex(v, i))

  const sortedArray = quickSort(indexedArray, (a, b) =>
    a.value > b.value
      ? Ordering.GT
      : a.value < b.value
      ? Ordering.LT
      : Ordering.EQ
  )

  let cost = 0
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    if (sortedArray[i].index !== i) {
      const e1 = indexedArray[sortedArray[i].index]
      const e2 = indexedArray[i]
      cost += e1.value + e2.value
      const tmp = e1.index
      e1.index = e2.index
      e2.index = tmp
    }
  }

  return cost
}
