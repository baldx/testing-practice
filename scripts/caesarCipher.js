function cipher (string, shift) {
    let encryptMessage = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (/[a-zA-Z]/.test(char)) {

            let isUppercase = (char === char.toUpperCase());

            char = String.fromCharCode(char.charCodeAt(0) + shift);

            if ((isUppercase && char > 'Z') || (!isUppercase && char > 'z')) {
                char = String.fromCharCode(char.charCodeAt(0) - 26);
            }
        }

        encryptMessage += char;
    }

    return encryptMessage;
}

export default cipher;