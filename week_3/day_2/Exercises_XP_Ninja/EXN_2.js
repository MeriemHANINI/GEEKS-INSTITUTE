function capitalize(str) {
    let evenCaps = "";
    let oddCaps = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i];
        } else {
            evenCaps += str[i];
            oddCaps += str[i].toUpperCase();
        }
    }

    return [evenCaps, oddCaps];
}

// Example
console.log(capitalize("abcdef")); // ["AbCdEf", "aBcDeF"]
