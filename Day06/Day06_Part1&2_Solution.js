/**
 *
 * @param {number} markerLength
 * @param {string} dataStreamBuffer
 * @returns number
 */
export function Day06_Tuning_Trouble(markerLength, dataStreamBuffer) {
  const subBuffer = []
  let index = 0
  for (const data of dataStreamBuffer) {
    subBuffer.push(data)
    index++
    if (subBuffer.length > markerLength) subBuffer.shift()
    if (subBuffer.length === markerLength && new Set(subBuffer).size === markerLength) return index
  }
}
