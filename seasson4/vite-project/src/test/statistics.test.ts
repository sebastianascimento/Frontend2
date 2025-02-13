import { calculateStatistics, Statistics } from '../components/statistics';

test('calculateStatistics calculates mean, median, and mode correctly', () => {
  const numbers = [1, 2, 2, 3, 4];
  const expected: Statistics = {
    mean: 2.4,
    median: 2,
    mode: [2],
  };

  const result = calculateStatistics(numbers);

  expect(result.mean).toBeCloseTo(expected.mean);
  expect(result.median).toBe(expected.median);
  expect(result.mode).toEqual(expected.mode);
});

test('calculateStatistics handles empty array', () => {
  expect(() => calculateStatistics([])).toThrow('Array of numbers must not be empty');
});