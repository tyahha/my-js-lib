export const getFibonacciNumber = (n: number): number => {

  const buffer: number[] = []

  const inner = (n: number): number => {
    let ret = buffer[n]
    if (ret != null) {
      return ret
    }

    ret = n <= 1 ? 1 : inner(n - 1) + inner(n - 2)
    buffer[n] = ret
    return ret
  }

  return inner(n)
}
