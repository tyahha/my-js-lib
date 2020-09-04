import readline from "readline"
import { ssvToNums } from "./aoj/common"
import { getMinimumCostOfSort } from "./aoj/minimun-cost-sort"

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
  console.log(getMinimumCostOfSort(ssvToNums(lines[1])))
})
