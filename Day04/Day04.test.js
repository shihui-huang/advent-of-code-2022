import { Day04_Camp_Cleanup_Part1 } from './Day04_Part1_Solution.js'
import { Day04_Camp_Cleanup_Part2 } from './Day04_Part2_Solution.js'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

const exampleOutput_part1 = 2
const expectedOutput_part1 = 536

const exampleOutput_part2 = 4
const expectedOutput_part2 = 845

describe('Year 2022 - Day 04', () => {
  test('Part 1', () => {
    expect(Day04_Camp_Cleanup_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day04_Camp_Cleanup_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day04_Camp_Cleanup_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day04_Camp_Cleanup_Part2(input)).toBe(expectedOutput_part2)
  })
})
