import { PalindromeChecker } from './index';

describe('palindrome checker ', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('exists', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it('the word "mom" should be a palindrome', () => {
    expect(palindromeChecker.isPalindrome('mom')).toBeTruthy();
  });

  it('the word "bill" should be not be a palindrome', () => {
    expect(palindromeChecker.isPalindrome('bill')).toBeFalsy();
  });

  it('the word "Mom" should be a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Mom')).toBeTruthy();
  });

  it('the sentence "Was It a rat I Saw" should be a palindrome', () => {
    const str: string = 'Was It a rat I Saw';
    expect(palindromeChecker.isPalindrome(str)).toBeTruthy();
  });
});
