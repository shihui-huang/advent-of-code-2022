/**
 *
 * @param {string} input
 * @returns number
 */
export function Day10_Cathode_Ray_Tube_Part2(input) {
  const inputs = input.split('\n')

  let cycle = 0,
    x = 1,
    row = '',
    crt = []

  for (const line of inputs) {
    const loops = line.startsWith('addx') ? 2 : 1

    for (let i = 0; i < loops; i++) {
      const column = cycle % 40
      row += x - 1 <= column && column <= x + 1 ? '#' : '.'
      if (column === 39) {
        crt.push(row)
        row = ''
      }
      cycle++
    }

    if (loops === 2) {
      x += +line.split(' ')[1]
    }
  }
  return crt.join('\n')
}
