import { Day07_No_Space_Left_On_Device_Part1 } from './Day07_Part1_Solution'
import { Day07_No_Space_Left_On_Device_Part2 } from './Day07_Part2_Solution'

import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const exampleInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

const exampleOutput_part1 = 95437
const expectedOutput_part1 = 1086293

const exampleOutput_part2 = 24933642
const expectedOutput_part2 = 366028

describe('Year 2022 - Day 07', () => {
  test('Part 1', () => {
    expect(Day07_No_Space_Left_On_Device_Part1(exampleInput)).toBe(exampleOutput_part1)
    expect(Day07_No_Space_Left_On_Device_Part1(input)).toBe(expectedOutput_part1)
  })
  test('Part 2', () => {
    expect(Day07_No_Space_Left_On_Device_Part2(exampleInput)).toBe(exampleOutput_part2)
    expect(Day07_No_Space_Left_On_Device_Part2(input)).toBe(expectedOutput_part2)
  })
})
