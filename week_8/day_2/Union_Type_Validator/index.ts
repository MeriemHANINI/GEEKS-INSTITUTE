function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;

    for (let type of allowedTypes) {
        if (valueType === type) {
            return true;
        }
    }

    return false;
}

// Tests
const num = 123;
const str = "Hello";
const bool = true;
const obj = { name: "Meriem" };
const func = () => "test";

console.log(validateUnionType(num, ["number", "string"]));       // true
console.log(validateUnionType(str, ["boolean", "object"]));      // false
console.log(validateUnionType(bool, ["boolean"]));               // true
console.log(validateUnionType(obj, ["object"]));                 // true
console.log(validateUnionType(func, ["function", "number"]));    // true
