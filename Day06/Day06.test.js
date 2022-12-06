import { Day06_Tuning_Trouble } from './Day06_Part1&2_Solution'
import * as fs from 'fs'
import * as path from 'path'
import { expect, test, describe } from 'vitest'

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()

const START_OF_PACKET_MARKER_LENGTH = 4
const exampleInput_01 = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`
const exampleInput_02 = `bvwbjplbgvbhsrlpgdmjqwftvncz`
const exampleInput_03 = `nppdvjthqldpwncqszvftbrmjlhg`
const exampleInput_04 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`
const exampleInput_05 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`

const exampleOutput_part1_01 = 7
const exampleOutput_part1_02 = 5
const exampleOutput_part1_03 = 6
const exampleOutput_part1_04 = 10
const exampleOutput_part1_05 = 11

const expectedOutput_part1 = 1816

const START_OF_MESSAGE_MARKER_LENGTH = 14
const exampleOutput_part2_01 = 19
const exampleOutput_part2_02 = 23
const exampleOutput_part2_03 = 23
const exampleOutput_part2_04 = 29
const exampleOutput_part2_05 = 26

const expectedOutput_part2 = 2625

describe('Year 2022 - Day 06', () => {
  test('Part 1', () => {
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, exampleInput_01)).toBe(exampleOutput_part1_01)
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, exampleInput_02)).toBe(exampleOutput_part1_02)
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, exampleInput_03)).toBe(exampleOutput_part1_03)
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, exampleInput_04)).toBe(exampleOutput_part1_04)
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, exampleInput_05)).toBe(exampleOutput_part1_05)
    expect(Day06_Tuning_Trouble(START_OF_PACKET_MARKER_LENGTH, input)).toBe(expectedOutput_part1)
  })
  test('Part 1', () => {
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, exampleInput_01)).toBe(exampleOutput_part2_01)
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, exampleInput_02)).toBe(exampleOutput_part2_02)
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, exampleInput_03)).toBe(exampleOutput_part2_03)
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, exampleInput_04)).toBe(exampleOutput_part2_04)
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, exampleInput_05)).toBe(exampleOutput_part2_05)
    expect(Day06_Tuning_Trouble(START_OF_MESSAGE_MARKER_LENGTH, input)).toBe(expectedOutput_part2)
  })
})
