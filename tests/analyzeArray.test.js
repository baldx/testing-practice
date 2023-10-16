import {averageValue, minValue, maxValue, arrayLength} from "../scripts/analyzeArray";

it('return average value', () => {
    expect(averageValue([1, 8, 3, 4, 2, 6])).toBe(4);
})

it('return error for string', () => {
    expect(averageValue("hello")).toBe("Error");
})

it('Min value', () => {
    expect(minValue([1,8,3,4,2,6])).toBe(1);
})

it('return error for string', () => {
    expect(minValue("hello")).toBe("Error");
})

it('Max value', () => {
    expect(maxValue([1,8,3,4,2,6])).toBe(8);
})

it('return error for string', () => {
    expect(maxValue("hello")).toBe("Error");
})

it('Array length', () => {
    expect(arrayLength([1,8,3,4,2,6])).toBe(6);
})

it('return error for string', () => {
    expect(arrayLength("hello")).toBe("Error");
})