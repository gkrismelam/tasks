/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arrayLength: number = numbers.length;
    if (arrayLength === 0) {
        return [];
    }
    if (arrayLength === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[arrayLength - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((number: string): number =>
        Number(number) ? Number(number) : 0,
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts
        .map((amount: string): string =>
            amount[0] === "$" ? amount.slice(1) : amount,
        )
        .map((amount: string): number => (Number(amount) ? Number(amount) : 0));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter(
            (message: string): boolean => message[message.length - 1] !== "?",
        )
        .map((message: string): string =>
            message[message.length - 1] === "!" ?
                message.toUpperCase()
            :   message,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce(
        (count: number, word: string): number =>
            word.length < 4 ? count + 1 : count,
        0,
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.reduce(
        (works: Boolean, color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
        true,
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return (
        addends.reduce(
            (sum: number, addend: number): number => sum + addend,
            0,
        ) +
        "=" +
        (addends.length === 0 ? "0" : addends.join("+"))
    );
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let firstNegative: number = values.findIndex(
        (value: number): boolean => value < 0,
    );
    firstNegative = firstNegative !== -1 ? firstNegative : values.length;

    let start: number[] = values.slice(0, firstNegative);
    let sum: number = start.reduce(
        (sum: number, value): number => sum + value,
        0,
    );
    start = values.slice(0, firstNegative + 1);
    start.push(sum);
    return start.concat(values.slice(firstNegative + 1));
}
