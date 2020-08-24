export function SinT(S: number[], T: number[]) {
  const ret: number[] = []
  T.forEach((e) => {
    S.includes(e) && ret.push(e)
  })
  return ret
}
