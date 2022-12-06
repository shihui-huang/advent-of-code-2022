/**
 *
 * @param {string} input
 * @returns number
 */
export function Day02_Rock_Paper_Scissors_Part1(input) {
  let gameMap = new Map()
  let XMap = new Map() // Rock
  let YMap = new Map() // Paper
  let ZMap = new Map() // Scissors

  XMap.set('score', 1)
  XMap.set('A', 3) // Draw
  XMap.set('B', 0) // Lose
  XMap.set('C', 6) // Win
  gameMap.set('X', XMap)

  YMap.set('score', 2)
  YMap.set('A', 6) // Win
  YMap.set('B', 3) // Draw
  YMap.set('C', 0) // Lose
  gameMap.set('Y', YMap)

  ZMap.set('score', 3)
  ZMap.set('A', 0) // Lose
  ZMap.set('B', 6) // Win
  ZMap.set('C', 3) // Draw
  gameMap.set('Z', ZMap)

  let rounds = input.split('\n')
  let score = 0
  for (let i = 0; i < rounds.length; i++) {
    let shapes = rounds[i].split(' ')
    score += gameMap.get(shapes[1]).get('score') + gameMap.get(shapes[1]).get(shapes[0])
  }
  return score
}
