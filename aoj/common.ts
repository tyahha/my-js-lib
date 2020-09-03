export type Point2D = [number, number]

export const ssvToNums = (s: string): number[] => s.split(" ").map(Number)

export const numsToSsv = (nums: ReadonlyArray<number>): string => nums.join(" ")

export const swapArrayValue = <T>(A: T[], i: number, j: number): void => {
  const tmp = A[i]
  A[i] = A[j]
  A[j] = tmp
}
