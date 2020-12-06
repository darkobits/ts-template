import { describe, expect, it } from 'vitest'

import { subtract } from './subtract'

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(2, 2)).toBe(0)
  })
})