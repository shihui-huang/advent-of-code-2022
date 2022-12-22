/**
 *
 * @param {string} input
 * @returns number
 */
export function Day09_Rope_Bridge_Part1(input) {
  let visited = new Set()
  let head = { x: 0, y: 0 }
  let tail = { x: 0, y: 0 }
  const lines = input.split('\n')

  for (const line of lines) {
    const [direction, steps] = line.split(' ')
    for (let i = 0; i < steps; i++) {
      const lastPos = { x: head.x, y: head.y }
      switch (direction) {
        case 'R':
          head.x++
          break
        case 'L':
          head.x--
          break
        case 'U':
          head.y++
          break
        case 'D':
          head.y--
          break
      }
      if (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1) {
        tail.x = lastPos.x
        tail.y = lastPos.y
      }
      visited.add(`x: ${tail.x}, y: ${tail.y}`)
    }
  }
  return visited.size
}

console.log(
  Day09_Rope_Bridge_Part1(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`),
)
