/**
 *
 * @param {string} input
 * @returns string
 */
export function Day05_Supply_Stacks_Part1(input) {
  let [stacks, moves] = input.split('\n\n')

  let stacksInput = stacks.split('\n').map((row) => [...row].filter((value, index) => index % 4 === 1))
  let stackMatrix = clearEmptyPlace(transpose(stacksInput))

  const movesArray = moves.split('\n').map((line) => Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10)))

  for (let [number, from, to] of movesArray) {
    while (number > 0) {
      const moveLetter = stackMatrix[from - 1].shift()
      stackMatrix[to - 1].unshift(moveLetter)
      number--
    }
  }

  const result = stackMatrix.map((stack) => stack[0]).join('')
  return result
}

export function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]))
}

export function clearEmptyPlace(matrix) {
  const newMatrix = matrix
  newMatrix.map((row, i) => {
    while (row[0] === ' ') {
      row.shift()
    }
  })
  return newMatrix
}
