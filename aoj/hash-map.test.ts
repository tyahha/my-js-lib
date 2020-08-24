import { strToNumber, HM } from "./hash-map"

describe("hash map", () => {
  test("insert and find basic", () => {
    const hm = new HM()
    expect(hm.find("ABC")).toBe(false)
    hm.insert("ABC")
    expect(hm.find("ABC")).toBe(true)
  })

  test("strToNumber", () => {
    expect(strToNumber("")).toBe(0)
    expect(strToNumber("A")).toBe(1)
    expect(strToNumber("C")).toBe(2)
    expect(strToNumber("G")).toBe(3)
    expect(strToNumber("T")).toBe(4)
    expect(strToNumber("AA")).toBe(5)
    expect(strToNumber("AC")).toBe(6)
    expect(strToNumber("TT")).toBe(4 * 4 + 4)
  })
})
