import { transpose, clearEmptyPlace } from './Day05_Part1_Solution.js'
/**
 *
 * @param {string} input
 * @returns string
 */
export function Day05_Supply_Stacks_Part2(input) {
  let [stacks, moves] = input.split('\n\n')

  let stacksInput = stacks.split('\n').map((row) => [...row].filter((value, index) => index % 4 === 1))
  let stackMatrix = clearEmptyPlace(transpose(stacksInput))

  const movesArray = moves.split('\n').map((line) => Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10)))

  for (let [number, from, to] of movesArray) {
    const moveLetter = stackMatrix[from - 1].splice(0, number)
    stackMatrix[to - 1].unshift(...moveLetter)
  }

  const result = stackMatrix.map((stack) => stack[0]).join('')
  return result
}
