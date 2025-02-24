import {
  evenNumbers,
  firstElement,
  doubleNumbers,
  isPositive,
  stringLength,
  numberToString,
  isArrayEmpty,
  addNumbers,
  containsHello,
  lastElement,
} from './numbers';

it('returns the even numbers', () => {
  // arrange
  const numbers = [1, 4, 5, 10, 0];
  // act
  const result = evenNumbers(numbers);
  // assert
  expect(result).toEqual([4, 10, 0]);
});

it('returns the first element of an array', () => {
  const element = ['one', 'two', 'yes', 'no', '12'];
  const result = firstElement(element);
  expect(result).toBe('one');
});

it('returns undefined for an empty array', () => {
  const element: any[] = [];
  const result = firstElement(element);
  expect(result).toBeUndefined();
});

it('returns the doubled numbers of an array of numbers', () => {
  const doubled = [1, 5, 10, 2, 50];
  const result = doubleNumbers(doubled);
  expect(result).toEqual([2, 10, 20, 4, 100]);
});

describe('isPositive', () => {
  it('returns true for positive numbers', () => {
    const numbers = 11;
    const result = isPositive(numbers);
    expect(result).toEqual(true);
  });

  it('returns true for positive numbers', () => {
    expect(isPositive(0)).toEqual(false);
    expect(isPositive(-3)).toEqual(false);
  });
});

it('returns the length of a string', () => {
  const string = 'dodgers';
  const result = stringLength(string);
  expect(result).toBe(7);
});

it('returns 0 for an empty string', () => {
  const string = '';
  const result = stringLength(string);
  expect(result).toBe(0);
});

it('returns a string formerly known as a number', () => {
  const num = 17;
  const result = numberToString(num);
  expect(result).toBe('17');
});

it('returns true for an empty array', () => {
  const arr: any[] = [];
  const result = isArrayEmpty(arr);
  expect(result).toBe(true);
});

it('returns true for an empty array', () => {
  const arr = ['LA', 'Dodgers'];
  const result = isArrayEmpty(arr);
  expect(result).toBe(false);
});

it('returns a number that is the result of adding 2 numbers', () => {
  const num1 = 5;
  const num2 = 5;
  const result = addNumbers(num1, num2);
  expect(result).toEqual(10);
});

describe('containsHello', () => {
  it('returns true if the string contains hello', () => {
    const str = 'Hello, whats up';
    const result = containsHello(str);
    expect(result).toBe(true);
  });

  it('returns true if the string contains hello', () => {
    const str = 'hello, nice to meet you';
    const result = containsHello(str);
    expect(result).toBe(true);
  });
});

describe('lastElement', () => {
  it('returns the last element of an array', () => {
    const numbers = [10, 5, 7, 3, 0];
    const result = lastElement(numbers);
    expect(result).toBe(0);
  });

  it('returns undefined for an empty array', () => {
    const empty: any[] = [];
    const result = lastElement(empty);
    expect(result).toBeUndefined();
  });
});
