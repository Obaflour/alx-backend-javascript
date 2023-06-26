export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report) {
    employees.push(...report[department]);
  }

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
