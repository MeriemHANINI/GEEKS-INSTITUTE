function formatInput<T extends { toString(): string }>(input: T): string {
    return input.toString().toUpperCase();
  }
  
  console.log(formatInput(123));      // "123"
  console.log(formatInput("hello"));  // "HELLO"
  