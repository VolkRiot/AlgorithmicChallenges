function Stack() {
  let stack = {};
  let size = 0
  let minStack = [];
  let min = Number.POSITIVE_INFINITY

  const push = (value) => {

    if (minStack.length === 0 || Math.min(value, min) === value) {
      minStack.push(value);
      min = value;
    }
    stack[size] = value;
    size++;
  }

  const pop = () => {
    const valCopy = stack[size - 1];
    delete stack[size - 1];
    --size;

    if (valCopy === minStack[minStack.length - 1]) {
      minStack.pop();
      min = minStack[minStack.length - 1];
    }
    return valCopy;
  }

  const peek = () => {
    return stack[size - 1];
  }

  const count = () => {
    return size;
  }

  const getMin = () => {
    return minStack[minStack.length - 1];
  }

  return {
    push,
    pop,
    peek,
    count,
    getMin
  }

}

var myStack = Stack();

myStack.push(12);
myStack.push(2);
myStack.push(3);
myStack.push(1);

console.log(`Count is at ${myStack.count()}`)
console.log(`Min value is currently ${myStack.getMin()}`)
console.log(myStack.peek())


myStack.pop();

console.log(`Min value is currently ${myStack.getMin()}`)
console.log(myStack.peek())
