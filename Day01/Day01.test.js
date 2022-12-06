import { Day01_Calorie_Counting_Part1 } from './Day01_Part1_Solution'
import { Day01_Calorie_Counting_Part2 } from './Day01_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()

const exampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

const exampleOutput_part1 = 24000
const expectedOutput_part1 = 71300

const exampleOutput_part2 = 45000
const expectedOutput_part2 = 209691

describe('Year 2022 - Day 01', () => {
  test('Part 1', () => {
    expect(Day01_Calorie_Counting_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day01_Calorie_Counting_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day01_Calorie_Counting_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day01_Calorie_Counting_Part2(input)).toBe(expectedOutput_part2)
  })
})
