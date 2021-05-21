import Arithmetic, { DiscountPrice } from './arithmetic';

describe('arithmetic operations', () => {
  let arithmetic: Arithmetic;
  beforeEach(() => {
    arithmetic = new Arithmetic();
  });

  it('exists', () => {
    expect(arithmetic).toBeDefined();
  });

  it('add two numbers', () => {
    expect(arithmetic.addTwoNumbers(1, 2)).toEqual(3);
  });

  it('subtract two numbers', () => {
    expect(arithmetic.subtractTwoNumbers(1, 2)).toEqual(-1);
  });

  it('calculate discount price', () => {
    const values = { price: 100, discount: 0.1 } as DiscountPrice;
    expect(arithmetic.calculateDiscountPrice(values)).toEqual(90);
  });
});
