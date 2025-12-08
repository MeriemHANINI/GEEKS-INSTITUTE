function logLength<T extends { length: number }>(param: T): void {
    console.log(param.length);
  }
  
  logLength("Hello");       // 5
  logLength([1, 2, 3, 4]);  // 4
  