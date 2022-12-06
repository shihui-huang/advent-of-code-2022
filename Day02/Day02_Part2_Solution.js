export function Day02_Rock_Paper_Scissors_Part2(input) {
  let gameMap = new Map()
  let XMap = new Map() // Lose
  let YMap = new Map() // Draw
  let ZMap = new Map() // Win

  XMap.set('score', 0)
  XMap.set('A', 3) // Scissors
  XMap.set('B', 1) // Rock
  XMap.set('C', 2) // Paper
  gameMap.set('X', XMap)

  YMap.set('score', 3)
  YMap.set('A', 1) // Rock
  YMap.set('B', 2) // Paper
  YMap.set('C', 3) // Scissors
  gameMap.set('Y', YMap)

  ZMap.set('score', 6)
  ZMap.set('A', 2) // Paper
  ZMap.set('B', 3) // Scissors
  ZMap.set('C', 1) // Rock
  gameMap.set('Z', ZMap)

  let rounds = input.split('\n')
  let score = 0
  for (let i = 0; i < rounds.length; i++) {
    let shapes = rounds[i].split(' ')
    score += gameMap.get(shapes[1]).get('score') + gameMap.get(shapes[1]).get(shapes[0])
  }
  return score
}
