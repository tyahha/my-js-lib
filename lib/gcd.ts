export const gcd = (l: number, r: number): number => {
  const remain = l % r
  return remain === 0 ? r : gcd(r, remain)
}
