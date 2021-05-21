export class PalindromeChecker {
  private getReversedString(str: string): string {
    return str
      .split('')
      .reverse()
      .join('');
  }

  private removeSpaces(str: string): string {
    return str.split(' ').join('');
  }
  isPalindrome(str: string): boolean {
    const reverse = this.getReversedString(str);
    return (
      this.removeSpaces(str).toLowerCase() ===
      this.removeSpaces(reverse).toLowerCase()
    );
  }
}
