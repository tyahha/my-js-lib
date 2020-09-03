import { CompareFunction, compareNumber } from "./common"

export interface Card {
  mark: string
  num: number
}

export const strToCard = (s: string): Card => {
  const [mark, num] = s.split(" ")
  return {
    mark,
    num: Number(num),
  }
}

export const compareCard: CompareFunction<Card> = (a, b) =>
  compareNumber(a.num, b.num)

export const CardSentinel: Card = {
  mark: "",
  num: Infinity
}

export const cardToString = (card: Card): string => `${card.mark} ${card.num}`