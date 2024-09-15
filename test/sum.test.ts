// sum.test.ts
import {expect, test} from 'vitest'
import {sum} from "../src/sum.ts"

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('adds 1 + 1 to equal 3', () => {
    expect(sum(1, 1)).toBe(3)
})
