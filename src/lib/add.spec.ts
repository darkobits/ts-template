import { describe, it, expect } from 'vitest';

import add from './add';


describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});
