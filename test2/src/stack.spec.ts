import Stack from './stack';

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
