function SinT(S, T) {
  const ret = []
  T.forEach((e) => {
    S.includes(e) && ret.push(e)
  })
  return ret
}

module.exports = SinT
