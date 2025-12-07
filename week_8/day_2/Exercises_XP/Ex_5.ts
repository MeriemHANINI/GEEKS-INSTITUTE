function getDetails(userName: string, age: number): [string, number, string] {
    const message = `Hello, ${userName}! You are ${age} years old.`;
    return [userName, age, message];
}

const details = getDetails("Alice", 25);
console.log(details);
