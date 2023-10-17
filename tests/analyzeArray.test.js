import {averageValue, minValue, maxValue, arrayLength} from "../scripts/analyzeArray";

it('return average value', () => {
    expect(averageValue([1, 8, 3, 4, 2, 6])).toBe(4);
})


it('Min value', () => {
    expect(minValue([1,8,3,4,2,6])).toBe(1);
})


it('Max value', () => {
    expect(maxValue([1,8,3,4,2,6])).toBe(8);
})

it('Array length', () => {
    expect(arrayLength([1,8,3,4,2,6])).toBe(6);
})
