import { Day13_Distress_Signal_Part1 } from './Day13_Part1_Solution'
import { Day13_Distress_Signal_Part2 } from './Day13_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`

const exampleOutput_part1 = 13
const expectedOutput_part1 = 6478

const exampleOutput_part2 = 140
const expectedOutput_part2 = 21922

describe('Year 2022 - Day 13', () => {
  test('Part 1', () => {
    expect(Day13_Distress_Signal_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day13_Distress_Signal_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day13_Distress_Signal_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day13_Distress_Signal_Part2(input)).toBe(expectedOutput_part2)
  })
})
