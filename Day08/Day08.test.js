import { Day08_Treetop_Tree_House_Part1 } from './Day08_Part1_Solution'
import { Day08_Treetop_Tree_House_Part2 } from './Day08_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `30373
25512
65332
33549
35390`

const exampleOutput_part1 = 21
const expectedOutput_part1 = 1832

const exampleOutput_part2 = 8
const expectedOutput_part2 = 157320

describe('Year 2022 - Day 08', () => {
  test('Part 1', () => {
    expect(Day08_Treetop_Tree_House_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day08_Treetop_Tree_House_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day08_Treetop_Tree_House_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day08_Treetop_Tree_House_Part2(input)).toBe(expectedOutput_part2)
  })
})
