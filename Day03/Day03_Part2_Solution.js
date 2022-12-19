import { getPriority } from './Day03_Part1_Solution.js'

/**
 *
 * @param {string} input
 * @returns number
 */
export function Day03_Rucksack_Reorganization_Part2(input) {
  let rucksacks = input.split('\n')
  let prioritiesSum = 0

  for (let j = 0; j < rucksacks.length; j += 3) {
    let firstLineItemType = new Set()
    let secondLineItemType = new Set()
    let thirdLinePriorities = new Set()

    for (let i = 0; i < rucksacks[j].length; i++) {
      firstLineItemType.add(rucksacks[j][i])
    }

    for (let i = 0; i < rucksacks[j + 1].length; i++) {
      secondLineItemType.add(rucksacks[j + 1][i])
    }

    for (let i = 0; i < rucksacks[j + 2].length; i++) {
      if (
        firstLineItemType.has(rucksacks[j + 2][i]) &&
        secondLineItemType.has(rucksacks[j + 2][i]) &&
        !thirdLinePriorities.has(rucksacks[j + 2][i])
      ) {
        let priority = getPriority(rucksacks[j + 2][i])
        prioritiesSum += priority
        thirdLinePriorities.add(rucksacks[j + 2][i])
      }
    }
  }

  return prioritiesSum
}
