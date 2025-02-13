export function groupBy<T>(array: T[], key: keyof T): { [key: string]: T[] } {
    return array.reduce((result, currentValue) => {
      const groupKey = currentValue[key] as unknown as string;
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    }, {} as { [key: string]: T[] });
  }