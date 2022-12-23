/**
 * @param {string} input
 * @returns number
 */
export function Day10_Cathode_Ray_Tube_Part1(input) {
  let cycle = 1,
    sum = 0,
    x = 1
  const lines = input.split('\n')

  for (const line of lines) {
    const loops = line.startsWith('addx') ? 2 : 1

    for (let i = 0; i < loops; i++) {
      if ((cycle - 20) % 40 === 0) {
        sum += cycle * x
      }
      cycle++
    }

    if (loops === 2) {
      x += +line.split(' ')[1]
    }
  }

  return sum
}
