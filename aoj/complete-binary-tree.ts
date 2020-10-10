// https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/9/ALDS1_9_A
export const getCompleteBinaryTreeInfo = (
  nodes: number[]
): [number, number | undefined, number | undefined, number | undefined][] => {
  const len = nodes.length
  const nn = [0].concat(nodes)
  const ret = []
  for (let i = 1; i <= len; i++) {
    const key = nn[i]
    const parent = nn[Math.floor(i / 2)]
    const left = nn[2 * i]
    const right = nn[2 * i + 1]
    ret.push([key, parent, left, right])
  }
  return ret as [number, number | undefined, number | undefined, number | undefined][]
}
