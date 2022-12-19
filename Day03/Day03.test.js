import { Day03_Rucksack_Reorganization_Part1 } from './Day03_Part1_Solution.js'
import { Day03_Rucksack_Reorganization_Part2 } from './Day03_Part2_Solution.js'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const exampleOutput_part1 = 157
const expectedOutput_part1 = 8105

const exampleOutput_part2 = 70
const expectedOutput_part2 = 2363

describe('Year 2022 - Day 03', () => {
  test('Part 1', () => {
    expect(Day03_Rucksack_Reorganization_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day03_Rucksack_Reorganization_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day03_Rucksack_Reorganization_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day03_Rucksack_Reorganization_Part2(input)).toBe(expectedOutput_part2)
  })
})
