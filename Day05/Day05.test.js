import { Day05_Supply_Stacks_Part1 } from './Day05_Part1_Solution.js'
import { Day05_Supply_Stacks_Part2 } from './Day05_Part2_Solution.js'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const exampleOutput_part1 = 'CMZ'
const expectedOutput_part1 = 'LJSVLTWQM'

const exampleOutput_part2 = 'MCD'
const expectedOutput_part2 = 'BRQWDBBJM'

describe('Year 2022 - Day 05', () => {
  test('Part 1', () => {
    expect(Day05_Supply_Stacks_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day05_Supply_Stacks_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day05_Supply_Stacks_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day05_Supply_Stacks_Part2(input)).toBe(expectedOutput_part2)
  })
})
