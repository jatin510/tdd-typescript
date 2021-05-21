export interface DiscountPrice {
  price: number;
  discount: number;
}

export default class Arithmetic {
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  subtractTwoNumbers(a: number, b: number): number {
    return a - b;
  }

  calculateDiscountPrice({ price, discount }: DiscountPrice): number {
    return price - discount * price;
  }
}
