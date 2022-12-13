/**
 *
 * @param {string} input
 * @returns number
 */

export function Day13_Distress_Signal_Part1(input) {
  const pairs = input.split('\n\n')
  let sumIndice = 0
  for (let i = 0; i < pairs.length; i++) {
    const [leftString, rightString] = pairs[i].split('\n')
    const leftArray = eval(leftString)
    const rightArray = eval(rightString)
    if (inRightOrder(leftArray, rightArray)) {
      console.log(i + 1)
      sumIndice += i + 1
    }
  }
  return sumIndice
}

export function inRightOrder(leftArray, rightArray) {
  return compare(leftArray, rightArray) < 0
}

export function compare(left, right) {
  let i = 0
  while (i < left.length && i < right.length) {
    if (Number.isInteger(left[i]) && Number.isInteger(right[i])) {
      if (left[i] == right[i]) {
        i++
      } else {
        return left[i] - right[i]
      }
    } else {
      const compareResult = compare([left[i]].flat(), [right[i]].flat())
      if (compareResult == 0) {
        i++
      } else {
        return compareResult
      }
    }
  }
  return left.length - right.length
}
