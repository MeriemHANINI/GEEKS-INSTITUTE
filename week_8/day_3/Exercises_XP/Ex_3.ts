class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "bark";
    }
}

// Example usage
const dog = new Dog("Buddy");
console.log(dog.makeSound()); // bark
