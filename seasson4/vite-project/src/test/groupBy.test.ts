import { groupBy } from '../components/groupBy';

interface Item {
  category: string;
  value: number;
}

test('groupBy groups items by category correctly', () => {
  const items: Item[] = [
    { category: 'fruit', value: 1 },
    { category: 'vegetable', value: 2 },
    { category: 'fruit', value: 3 },
    { category: 'vegetable', value: 4 },
    { category: 'grain', value: 5 },
  ];

  const expected = {
    fruit: [
      { category: 'fruit', value: 1 },
      { category: 'fruit', value: 3 },
    ],
    vegetable: [
      { category: 'vegetable', value: 2 },
      { category: 'vegetable', value: 4 },
    ],
    grain: [{ category: 'grain', value: 5 }],
  };

  const result = groupBy(items, 'category');

  expect(result).toEqual(expected);
});

test('groupBy handles empty array', () => {
  const result = groupBy([], 'category');
  expect(result).toEqual({});
});