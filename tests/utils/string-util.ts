export function generateRandomPassword(length: number): string {
    if (length < 8) {
        throw new Error("Length must be at least 8 to accommodate all required character types.");
    }

    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

    // Ensure we have at least one character from each set
    const randomLower = lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    const randomUpper = uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
    const randomSpecial = specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    // Combine all required characters
    let randomString = randomLower + randomUpper + randomNumber + randomSpecial;

    // Generate remaining random characters from all sets
    const allChars = lowercase + uppercase + numbers + specialChars;
    for (let i = 4; i < length; i++) {
        randomString += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle the string to ensure randomness
    randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');

    return randomString;
}

export function generateRandomName(length: number): string {
    if (length < 3) {
        throw new Error("Length must be at least 3 to accommodate all required character types.");
    }

    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Ensure we have at least one character from each set
    const randomLower = lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    const randomUpper = uppercase.charAt(Math.floor(Math.random() * uppercase.length));

    // Combine all required characters
    let randomString = randomLower + randomUpper;

    // Generate remaining random characters from all sets
    const allChars = lowercase + uppercase;
    for (let i = 2; i < length; i++) {
        randomString += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle the string to ensure randomness
    randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');

    return randomString;
}

export function generateRandomMobileNumber(): string {

    // Define character sets
    const numbers = '123456789';

    let randomNumber = '04';
    // Generate remaining random characters from all sets
    for (let i = 0; i < 8; i++) {
        randomNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return randomNumber;
}