function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (valueType === type) {
            return true;
        }
    }
    return false;
}
// Tests
var num = 123;
var str = "Hello";
var bool = true;
var obj = { name: "Meriem" };
var func = function () { return "test"; };
console.log(validateUnionType(num, ["number", "string"])); // true
console.log(validateUnionType(str, ["boolean", "object"])); // false
console.log(validateUnionType(bool, ["boolean"])); // true
console.log(validateUnionType(obj, ["object"])); // true
console.log(validateUnionType(func, ["function", "number"])); // true
