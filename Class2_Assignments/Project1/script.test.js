const isPalindrome = require("./script");

// 1. Function Requirements
// The isPalindrome function must exist and accept exactly one argument.

describe("1. Function Requirements", ()=> {
    test("isPalindrome function exists", () => {
        expect(typeof isPalindrome).toBe("function");
    });

    test("isPalindrome function takes 1 argument", ()=> {
        expect(isPalindrome.length).toBe(1);
    });
});

// 2. Valid Input Types
// The function should only accept strings.
// Any non-string input (numbers, arrays, booleans, objects, null, or undefined) should return false.
describe("2. Valid Input Types", () => {
    test("isPalindrome should return false for numbers", () => {
        expect(isPalindrome(123)).toBe(false);
    });
    test("isPalindrome should return false for arrays", () => {
        expect(isPalindrome([1,2,3])).toBe(false);
    });
    test("isPalindrome should return false for booleans", () => {
        expect(isPalindrome(true)).toBe(false);
    });
    test("isPalindrome should return false for objects", () => {
        expect(isPalindrome({hello: "world"})).toBe(false);
    });
    test("isPalindrome should return false for null", () => {
        expect(isPalindrome(null)).toBe(false);
    });
    test("isPalindrome should return false for undefined", () => {
        expect(isPalindrome(undefined)).toBe(false);
    });
});

// 3. Basic Cases
// Simple lowercase words like "bob" and "racecar" should return true.
// Non-palindromes like "apple" should return false.
describe("3. Basic Cases", () => {
    test("isPalindrome should return true for simple lowercase palindromes", () => {
        expect(isPalindrome("bob")).toBe(true);
        expect(isPalindrome("racecar")).toBe(true);
    });

    test("isPalindrome should return false for non-palindromes", () => {
        expect(isPalindrome("apple")).toBe(false);
    });
});

// 4. Outlier Handling
// Palindromes should not be case-sensitive. For example, "Racecar" should return true.
// Phrases with spaces and punctuation should still count if they form a palindrome when cleaned (e.g., "Madam I'm Adam." or "Red rum, sir, is murder.").
// Your solution should remove spaces, punctuation, and ignore letter case before checking.
describe("4. Outlier Handling", () => {
    test("isPalindrome should return true for mixed-case palindromes", () => {
        expect(isPalindrome("Racecar")).toBe(true);
        expect(isPalindrome("bOB")).toBe(true);
    });

    test("isPalindrome should return true for palindrome phrases with punctuation", () => {
       expect(isPalindrome("Madam I'm Adam.")).toBe(true);
       expect(isPalindrome("Red rum, sir, is murder.")).toBe(true);
       expect(isPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod")).toBe(true);
       expect(isPalindrome("No X in Mr. R. M. Nixon")).toBe(true);
       expect(isPalindrome("T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.")).toBe(true);
    });

    test("isPalindrome should return false for mixed-case non-palindromes", () => {
        expect(isPalindrome("PalInDROmE")).toBe(false);
    });

    test("isPalindrome should return false for non-palindrome phrases with punctuation", () => {
        expect(isPalindrome("This! is not a palindrome...")).toBe(false);
    });
});
