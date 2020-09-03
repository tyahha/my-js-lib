// 計算ソート
// 計算ソートは各要素が0以上k以下である要素数nnnの数列に対して線形時間(O(n+K))で動く
// 安定なソーティングアルゴリズムです。
// 入力数列Aの各要素A[j]について、A[j]以下の要素の数をカウンタ配列Cに記録し、
// その値をもとに出力配列BにおけるA[j]の位置を求めます。
// 同じ数の要素が複数ある場合を考慮して、要素A[j]を出力(Bに入れる)した後にカウンタC[A[j]]は
// 修正する必要がある
// この実装ではkを10000とする
export const countingSort = (A: ReadonlyArray<number>): number[] => {
  const n = A.length
  const B = Array(n)
  const k = 10000
  const C = Array(k + 1).fill(0)

  // C[A[i]]にA[i]の出現数を記録する
  A.forEach(i => C[i]++)

  // C[i]にi以下の数の出現数を記録する
  for (let i = 1; i <= k; i++) {
    C[i] = C[i] + C[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    B[C[A[i]] - 1] = A[i]
    C[A[i]]--
  }
  return B
}