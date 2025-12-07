// Overload signatures
function greet(): string;
function greet(name: string): string;

// Implementation
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello there!";
}

// Testing
console.log(greet());
console.log(greet("Meriem"));
