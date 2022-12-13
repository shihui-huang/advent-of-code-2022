import { compare } from './Day13_Part1_Solution.js'
/**
 *
 * @param {string} input
 * @returns number
 */

export function Day13_Distress_Signal_Part2(input) {
  const DIVIDER_PACKETS = [[[2]], [[6]]]
  const pairs = input.split('\n\n')
  let inputArray = pairs
    .map((stringPair) => {
      return stringPair.split('\n').map((stringLine) => eval(stringLine))
    })
    .flat()

  inputArray.push(...DIVIDER_PACKETS)
  // console.log(compare([2], 2))
  let sortedArray = inputArray.sort((a, b) => compare(a, b))
  console.log(sortedArray)
  const decoderIndex = DIVIDER_PACKETS.map((packet) => sortedArray.indexOf(packet) + 1)
  console.log(decoderIndex)
  return decoderIndex[0] * decoderIndex[1]
}
