import { quickSort } from "./quick-sort"
import { Ordering } from "./common"

interface DataForCost<T> {
  value: T
  originalIndex: number
  sortedIndex: number
  used: boolean
}

const createData = <T>(value: T, originalIndex: number): DataForCost<T> => ({
  value,
  originalIndex,
  sortedIndex: 0,
  used: false,
})

export const getMinimumCostOfSort = (a: ReadonlyArray<number>): number => {
  const A = a.concat()
  const n = A.length
  const originalArray = a.map((v, i) => createData(v, i))

  const sortedArray = quickSort(originalArray, (a, b) =>
    a.value > b.value
      ? Ordering.GT
      : a.value < b.value
      ? Ordering.LT
      : Ordering.EQ
  ).map((e, i) => {
    e.sortedIndex = i
    return e
  })

  const minValue = sortedArray[0].value

  let cost = 0
  for (let i = 0; i < n; i++) {
    const cur = sortedArray[i]
    if (cur.used) continue

    cur.used = true

    if (cur.originalIndex === i) continue

    // グループを抽出する
    let groupMember = originalArray[i]
    let groupValueSum = cur.value
    let groupMinValue = cur.value
    let groupMemberCount = 1

    while (true) {
      groupMember.used = true
      groupValueSum += groupMember.value
      groupMinValue = Math.min(groupMinValue, groupMember.value)
      groupMemberCount++
      groupMember = originalArray[groupMember.sortedIndex]
      if (i === groupMember.sortedIndex) {
        break
      }
    }

    const costWithGroupMinValue =
      groupValueSum + groupMinValue * (groupMemberCount - 2)
    const costWithMinValue =
      (groupMinValue + minValue) * 2 +
      (groupValueSum - groupMinValue) +
      minValue * (groupMemberCount - 1)

    cost += Math.min(costWithGroupMinValue, costWithMinValue)
  }

  return cost
}
