import cipher from "../scripts/caesarCipher";

it("Ciphers test --> uftu", () => {
    expect(cipher("test", 1)).toBe("uftu");
});
