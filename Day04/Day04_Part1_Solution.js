/**
 *
 * @param {string} input
 * @returns number
 */
export function Day04_Camp_Cleanup_Part1(input) {
  let pairs = input.split('\n')
  let pairRanges = pairs.map((line) => {
    return Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10))
  })

  const overlapping = pairRanges.filter(([start1, end1, start2, end2]) => {
    return (start1 >= start2 && end1 <= end2) || (start1 <= start2 && end1 >= end2)
  }).length

  return overlapping
}
