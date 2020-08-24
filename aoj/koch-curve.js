const radian60 = (60 * Math.PI) / 180
const cos60 = Math.cos(radian60)
const sin60 = Math.sin(radian60)

const kochCurveInner = (n, startPoint, endPoint) => {
  if (n === 0) return []

  const [sx, sy] = startPoint
  const [ex, ey] = endPoint

  const dx = (ex - sx) / 3
  const dy = (ey - sy) / 3

  const p1x = sx + dx
  const p1y = sy + dy
  const p3x = p1x + dx
  const p3y = p1y + dy

  const pdx = p3x - p1x
  const pdy = p3y - p1y

  const p2x = pdx * cos60 - pdy * sin60 + p1x
  const p2y = sin60 * pdx + pdy * cos60 + p1y

  const p1 = [p1x, p1y]
  const p2 = [p2x, p2y]
  const p3 = [p3x, p3y]

  return [
    ...kochCurveInner(n - 1, startPoint, p1),
    p1,
    ...kochCurveInner(n - 1, p1, p2),
    p2,
    ...kochCurveInner(n - 1, p2, p3),
    p3,
    ...kochCurveInner(n - 1, p3, endPoint),
  ]
}

const kochCurve = (n, startPoint, endPoint) => {
  return [startPoint, ...kochCurveInner(n, startPoint, endPoint), endPoint]
}

const formattedKochCurve = (n, startPoint, endPont) => {
  return kochCurve(n, startPoint, endPont)
    .map((p) => p.map((n) => n.toFixed(5)).join(" "))
    .join("\n")
}

module.exports = {
  kochCurve,
  formattedKochCurve,
}
