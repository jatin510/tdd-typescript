class Stack {
  top: number;
  items: {};

  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek(): number {
    return this.items[this.top];
  }

  pop(): any {
    this.top === -1 ? -1 : (this.top -= 1);
  }

  push(value): any {
    this.top += 1;
    this.items[this.top] = value;
  }
}

describe('Create stack without using the array ', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('check if the stack exist', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('push item at top ', () => {
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(1);
  });

  it('pop item at top ', () => {
    stack.push(1);
    stack.pop();
    expect(stack.top).toBe(-1);
    stack.pop();
    expect(stack.top).toBe(-1);
  });
});
