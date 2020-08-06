process.stdin.resume()
process.stdin.setEncoding("utf8")

const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []

reader.on("line", (line) => {
  lines.push(line)
})

reader.on("close", () => {
  const S = lines[1].split(" ")
  const T = lines[3].split(" ")
  const C = SinT(S, T)
  console.log(C.length)
})

function SinT(S, T) {
  const ret = []
  T.forEach((e) => {
    S.includes(e) && ret.push(e)
  })
  return ret
}
