class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// Usage without creating an instance
console.log(Calculator.add(5, 3));       // 8
console.log(Calculator.subtract(10, 4)); // 6
