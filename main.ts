import readline from "readline"
import { extractMaxFromHeap, insertToMaxHeap } from "./aoj/heap"

process.stdin.resume()
process.stdin.setEncoding("utf8")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines: string[] = []

reader.on("line", (line) => {
  lines.push(line)
})

reader.on("close", () => {
  let heap = [0]
  let i = 0
  let str = ""
  while (true) {
    const [method, strNum] = lines[i++].split(" ")
    if (method === "end") {
      break
    } else if (method === "insert") {
      const S = Number(strNum)
      insertToMaxHeap(heap, S)
    } else if (method === "extract") {
      str += `${extractMaxFromHeap(heap)}\n`
    }
  }
  process.stdout.write(str)
})
