/**
 *
 * @param {string} input
 * @returns number
 */
export function Day08_Treetop_Tree_House_Part1(input) {
  let treeMap = convertGridToMap(input.split('\n'))
  treeMap.forEach((row) => {
    findVisibleFromRight(findVisibleFromLeft(row))
  })

  let rotatedMap = rotateMap(treeMap)
  rotatedMap.forEach((row) => {
    findVisibleFromRight(findVisibleFromLeft(row))
  })

  // count number of visible trees
  let visibleTrees = 0
  rotatedMap.forEach((row) => {
    row.forEach((tree) => {
      if (tree.visible) {
        visibleTrees++
      }
    })
  })

  return visibleTrees
}

export function convertGridToMap(grid) {
  let rows = []
  let columnCount = grid[0].length

  grid.forEach((treeRow, rowIndex) => {
    let row = []

    let isEdgeRow = rowIndex === 0 || rowIndex === grid.length - 1
    for (let i = 0; i < columnCount; i++) {
      let isEdgeColumn = i === 0 || i === columnCount - 1
      row.push({
        height: parseInt(treeRow[i]),
        visible: isEdgeRow || isEdgeColumn ? true : false,
        x: rowIndex,
        y: i,
      })
    }
    rows.push(row)
  })
  return rows
}

export function findVisibleFromLeft(row) {
  return traverseRow(row)
}

export function findVisibleFromRight(row) {
  return traverseRow(row, true)
}

export function traverseRow(row, fromRight = false) {
  let from = fromRight ? row.length - 1 : 0
  let to = fromRight ? 0 : row.length - 1
  let step = fromRight ? -1 : 1
  let tallestTree = 0

  for (let i = from; i !== to; i += step) {
    if (row[i].height > tallestTree) {
      tallestTree = row[i].height
    }

    if (row[i + step].height > tallestTree) {
      row[i + step].visible = true
    }
  }

  return row
}

export function rotateMap(treeMap) {
  return treeMap[0].map((col, i) => treeMap.map((row) => row[i]))
}
