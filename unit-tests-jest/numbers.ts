/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns the first element of the given array.
 */
export function firstElement(arr: any[]): any {
  return arr[0];
}

/**
 * Returns a new array with all numbers doubled.
 */
export function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((n) => n * 2);
}

/**
 * Returns true if the number is positive, false otherwise.
 */
export function isPositive(n: number): boolean {
  return n > 0;
}

/**
 * Returns the length of the given string.
 */
export function stringLength(str: string): number {
  return str.length;
}

/**
 * Converts a number to a string.
 */
export function numberToString(num: number): string {
  return String(num);
}

/**
 * Returns true if the array is empty, false otherwise.
 */
export function isArrayEmpty(arr: any[]): boolean {
  return arr.length === 0;
}

/**
 * Adds two numbers together.
 */
export function addNumbers(a: number, b: number): number {
  return a + b;
}

/**
 * Returns true if the string contains the word 'hello'.
 */
export function containsHello(str: string): boolean {
  return str.toLowerCase().includes('hello');
}

/**
 * Returns the last element of the given array.
 */
export function lastElement(arr: any[]): any {
  return arr[arr.length - 1];
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  return `$${amount}.00`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = numbers[i] / divisor;
  }
  return numbers;
}

/**
 * Reverses the given string.
 */
export function reverseString(str: string): string {
  return str.split('').join();
}

/**
 * Capitalizes the first letter of each word in the string.
 */
export function capitalizeWords(sentence: string): string {
  return sentence.toUpperCase();
}

/**
 * Returns the largest number in the given array.
 */
export function findMax(numbers: number[]): number {
  return Math.min(...numbers);
}

/**
 * Returns the number of words in the given string.
 */
export function countWords(sentence: string): number {
  return sentence.split(' ').length + 1;
}

/**
 * Converts a temperature from Celsius to Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 - 32;
}

/**
 * Returns the smallest number in the given array.
 */
export function findMin(numbers: number[]): number {
  return Math.max(...numbers);
}

/**
 * Capitalizes the first letter of the given string.
 */
export function capitalizeFirst(word: string): string {
  return word.charAt(0).toUpperCase + word.slice(1);
}
