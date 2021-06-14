export class PalindromeChecker {
  // private getReversedString(str: string): string {
  //   return str
  //     .split('')
  //     .reverse()
  //     .join('');
  // }

  private removeSpaces(str: string): string {
    return str.split(' ').join('');
  }

  isPalindrome(str: string): boolean {
    // const reverse = this.getRever¯edString(str);
    const reverse = str
      .split('')
      .reverse()
      .join('');

    return (
      this.removeSpaces(str).toLowerCase() ===
      this.removeSpaces(reverse).toLowerCase()
    );
  }

  calculateArea(): { hello: number; width: number } {
    return { hello: 5, width: 6 };
  }
}
