import { convertGridToMap, findVisibleFromRight, findVisibleFromLeft, rotateMap } from './Day08_Part1_Solution'

/**
 *
 * @param {string} input
 * @returns number
 */
export function Day08_Treetop_Tree_House_Part2(input) {
  let treeMap = convertGridToMap(input.split('\n'))
  treeMap.forEach((row) => {
    findVisibleFromRight(findVisibleFromLeft(row))
  })

  let rotatedMap = rotateMap(treeMap)
  rotatedMap.forEach((row) => {
    findVisibleFromRight(findVisibleFromLeft(row))
  })

  let maxScores = 0
  rotatedMap.forEach((row, i) => {
    row.forEach((tree, j) => {
      maxScores = Math.max(maxScores, calculateViewScore(rotatedMap, i, j))
    })
  })

  return maxScores
}

function calculateViewScore(treeMap, y, x) {
  let row = treeMap[y]
  let col = treeMap.map((row) => row[x])

  const score = [
    calculateVisibleInRow(row, x, 'right'),
    calculateVisibleInRow(row, x),
    calculateVisibleInRow(col, y, 'right'),
    calculateVisibleInRow(col, y),
  ]

  return score[0] * score[1] * score[2] * score[3]
}

function calculateVisibleInRow(row, from, direction = 'left') {
  let score = 0

  if (direction === 'left') {
    row = [...row].reverse()
    from = row.length - from - 1
  }

  const fromTree = row[from]

  const testTrees = row.slice(from + 1)

  let blocked = false
  testTrees.forEach((tree) => {
    if (blocked) return
    score++
    if (tree.height >= fromTree.height) {
      blocked = true
    }
  })

  return score
}
