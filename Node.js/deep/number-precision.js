
function isCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON
}
console.log(isCloseEnoughToEqual(0.1 + 0.2, 0.3))

