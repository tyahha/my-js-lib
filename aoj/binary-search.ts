export const binarySearch = (S: number[], t: number) => {
  let left = 0
  let right = S.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (S[mid] === t) {
      return true
    } else if (t < S[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return false
}
