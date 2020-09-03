import readline from "readline"
import { ssvToNums } from "./aoj/common"
import { partition } from "./aoj/partition"
import { Card, CardSentinel, cardToString, compareCard, strToCard } from "./aoj/card"
import { quickSort } from "./aoj/quick-sort"
import { mergeSort } from "./aoj/merge-sort"

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

let count = 0

reader.on("close", () => {
  const n = Number(lines[0])
  const cards: Card[] = []
  for (let i = 1; i <= n; i++) {
    cards.push(strToCard(lines[i]))
  }
  const qsCards = quickSort(cards, compareCard)
  const msCards = mergeSort(cards, CardSentinel, compareCard)
  const same = qsCards.every((a, i) => {
    const b = msCards[i]
    return a.num === b.num && a.mark === b.mark
  })
  console.log(same ? "Stable" : "Not stable")
  qsCards.forEach(e => console.log(cardToString(e)))
})
