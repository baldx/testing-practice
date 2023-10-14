import {add, sub, multiply, divide} from "../scripts/calculator"

it('Add 23 + 5', () => {
    expect(add(23, 5)).toBe(28);
});

it('Sub 23 - 5', () => {
    expect(sub(23, 5)).toBe(18);
});

it('Multiply 23 * 5', () => {
    expect(multiply(23, 5)).toBe(115);
});

it('Divide 23 / 5', () => {
    expect(divide(23, 5)).toBe(4.6);
});