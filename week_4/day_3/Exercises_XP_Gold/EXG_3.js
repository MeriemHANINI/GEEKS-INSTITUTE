class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();  // counterOne.count = 0
  counterOne.increment();            // counterOne.count = 1
  counterOne.increment();            // counterOne.count = 2
  
  const counterTwo = counterOne;     // counterTwo references the SAME object
  counterTwo.increment();            // counterOne.count = 3 (same object)
  
  console.log(counterOne.count);     // Output: 3