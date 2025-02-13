export interface Statistics {
  mean: number;
  median: number;
  mode: number[];
}

export function calculateStatistics(numbers: number[]): Statistics {
  if (numbers.length === 0) {
    throw new Error('Array of numbers must not be empty');
  }

  const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sortedNumbers.length / 2);
  const median =
    sortedNumbers.length % 2 === 0
      ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
      : sortedNumbers[middle];

  const frequency: { [key: number]: number } = {};
  sortedNumbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  const maxFrequency = Math.max(...Object.values(frequency));
  const mode = Object.keys(frequency)
    .filter((key) => frequency[Number(key)] === maxFrequency)
    .map(Number);

  return { mean, median, mode };
}