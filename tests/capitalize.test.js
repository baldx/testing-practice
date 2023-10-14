const capitalize = require("../scripts/capitalize");

it('Capitalize', () => {
    expect(capitalize("test")).toBe("Test");
});