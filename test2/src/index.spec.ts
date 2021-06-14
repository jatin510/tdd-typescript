class Stack {
  top;
  items;

  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }

  pop() {
    this.top === -1 ? -1 : (this.top -= 1);
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
}

describe('Create stack without using the array ', () => {
  let stack;
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
