export const getMatrixMultiplicationCount = (r1: number, c1: number, r2: number, c2: number): number => {
  if (c1 != r2) {
    throw new Error("can't multiply")
  }

  return r1 * r2 * c2
}