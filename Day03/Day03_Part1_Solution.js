/**
 *
 * @param {string} input
 * @returns number
 */
export function Day03_Rucksack_Reorganization_Part1(input) {
  let rucksacks = input.split('\n')
  let prioritiesSum = 0

  rucksacks.map((rucksack) => {
    let leftItemType = new Set(rucksack.slice(0, rucksack.length / 2))
    let priorityItemType = new Set()

    for (let i = Math.round(rucksack.length / 2); i < rucksack.length; i++) {
      if (leftItemType.has(rucksack[i]) && !priorityItemType.has(rucksack[i])) {
        let priority = getPriority(rucksack[i])
        prioritiesSum += priority
        priorityItemType.add(rucksack[i])
      }
    }
  })

  return prioritiesSum
}

export function getPriority(letter) {
  if (letter >= 'a' && letter <= 'z') {
    return letter.charCodeAt(0) - 96
  } else {
    return letter.charCodeAt(0) - 65 + 27
  }
}
