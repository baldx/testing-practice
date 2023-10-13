const capitalize = require('./capitalize')

it('Capitalize', (e) => {
    expect(capitalize("test")).toBe("Test");
});