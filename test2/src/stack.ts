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

  pop(): void {
    this.top === -1 ? -1 : (this.top -= 1);
  }

  push(value: number): void {
    this.top += 1;
    this.items[this.top] = value;
  }
}

export default Stack;
