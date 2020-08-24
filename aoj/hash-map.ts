const m = 1000000

export const strToNumber = (str: string): number => {
  let numWeight = 1
  let numWeightPerDigit = 4
  let ret = 0
  str
    .split("")
    .reverse()
    .forEach((c) => {
      let num = 0
      switch (c) {
        case "A":
          num = 1
          break
        case "C":
          num = 2
          break
        case "G":
          num = 3
          break
        case "T":
          num = 4
          break
      }
      ret += num * numWeight
      numWeight *= numWeightPerDigit
    }, 0)

  return ret
}

function h1(key: number) {
  return key % m
}

function h2(key: number) {
  return 1 + (key % (m - 1))
}

function h(key: number, i: number) {
  return (h1(key) + i * h2(key)) % m
}

export class HM {
  T: (undefined|number)[]
  constructor() {
    this.T = Array(m);
  }

  insert(str: string) {
    let i = 0, j
    const key = strToNumber(str)
    const T = this.T
    while (true) {
      j = h(key, i)
      if (T[j] == null) {
        T[j] = key
        return j
      } else {
        i++
      }
    }
  }

  find(str: string) {
    let i = 0, j
    const key = strToNumber(str)
    const T = this.T
    while (true) {
      j = h(key, i)
      if (T[j] === key) {
        return true
      } else if (T[j] == null || i >= m) {
        return false
      } else {
        i++
      }
    }
  }
}
