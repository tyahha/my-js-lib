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

// https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/9/ALDS1_9_B
export const maxHeapify = (A: number[], i: number): void => {
  const H = A.length - 1
  const l = i * 2
  const r = l + 1

  let largest = 0
  if (l <= H && A[l] > A[i]) {
    largest = l
  } else {
    largest = i
  }

  if (r <= H && A[r] > A[largest]) {
    largest = r
  }

  if (largest !== i) {
    const tmp = A[i]
    A[i] = A[largest]
    A[largest] = tmp
    maxHeapify(A, largest)
  }
}

export const buildMaxHeap = (A: number[]): void => {
  for (let i = Math.floor(A.length/2); i > 0; i--) {
    maxHeapify(A, i)
  }
}

export const insertToMaxHeap = (A: number[], key: number): void => {
  const H = A.push(key) - 1
  let i = H
  let parent = i >> 1
  while (i > 1 && A[parent] < A[i]) {
    const tmp = A[i]
    A[i] = A[parent]
    A[parent] = tmp
    i = parent
    parent = i >> 1
  }
}

export const extractMaxFromHeap = (A: number[]): number => {
  const ret = A[1]
  A[1] = A[A.length - 1]
  A.length = A.length - 1
  maxHeapify(A, 1)
  return ret
}