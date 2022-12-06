import { Day02_Rock_Paper_Scissors_Part1 } from './Day02_Part1_Solution'
import { Day02_Rock_Paper_Scissors_Part2 } from './Day02_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `A Y
B X
C Z`

const exampleOutput_part1 = 15
const expectedOutput_part1 = 13221

const exampleOutput_part2 = 12
const expectedOutput_part2 = 13131

describe('Year 2022 - Day 01', () => {
  test('Part 1', () => {
    expect(Day02_Rock_Paper_Scissors_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day02_Rock_Paper_Scissors_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day02_Rock_Paper_Scissors_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day02_Rock_Paper_Scissors_Part2(input)).toBe(expectedOutput_part2)
  })
})
