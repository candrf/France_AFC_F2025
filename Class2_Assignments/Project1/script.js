module.exports = isPalindrome = (input) => {
    // return false if input is not string
    if (typeof input !== "string"){
        return false;
    }

    // change input to all lowercase then sanitize punctuation and spaces
    const newStr = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // return sanitized input compared to reverse of itself
    return newStr === newStr.split('').reverse().join('');
}