import { Day09_Rope_Bridge_Part1 } from './Day09_Part1_Solution'
import { Day09_Rope_Bridge_Part2 } from './Day09_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput_part1 = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

const exampleInput_part2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`

const exampleOutput_part1 = 13
const expectedOutput_part1 = 6376

const exampleOutput_part2 = 36
const expectedOutput_part2 = 2607

describe('Year 2022 - Day 09', () => {
  test('Part 1', () => {
    expect(Day09_Rope_Bridge_Part1(exampleInput_part1)).toBe(exampleOutput_part1)
    expect(Day09_Rope_Bridge_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day09_Rope_Bridge_Part2(exampleInput_part2)).toBe(exampleOutput_part2)
    expect(Day09_Rope_Bridge_Part2(input)).toBe(expectedOutput_part2)
  })
})
