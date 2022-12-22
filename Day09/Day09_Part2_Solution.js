/**
 *
 * @param {string} input
 * @returns number
 */
export function Day09_Rope_Bridge_Part2(input) {
  const inputs = input.split('\n')

  let visited = new Set()
  let rope = []
  for (let i = 0; i < 10; i++) {
    rope[i] = { x: 0, y: 0 }
  }

  for (const line of inputs) {
    const [direction, steps] = line.split(' ')
    for (let i = 0; i < steps; i++) {
      switch (direction) {
        case 'R':
          rope[0].x++
          break
        case 'L':
          rope[0].x--
          break
        case 'U':
          rope[0].y++
          break
        case 'D':
          rope[0].y--
          break
      }
      for (let j = 1; j < 10; j++) {
        const delta = { x: rope[j - 1].x - rope[j].x, y: rope[j - 1].y - rope[j].y }
        const axis = Math.abs(delta.x) > Math.abs(delta.y) ? 'x' : 'y'
        const axis2 = axis === 'x' ? 'y' : 'x'
        if (Math.abs(delta[axis]) > 1) {
          rope[j][axis] += delta[axis] < 0 ? -1 : 1
          if (Math.abs(delta[axis2]) > 0) {
            rope[j][axis2] += delta[axis2] < 0 ? -1 : 1
          }
        }
      }
      visited.add(`x: ${rope[9].x}, y: ${rope[9].y}`)
    }
  }
  return visited.size
}
