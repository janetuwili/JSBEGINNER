function stringConvert(str) {
    return str
        .split(" ") // split by words
        .map(word => {
            return word
                .split("") // split each word into characters
                .map((char, index) =>
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                )
                .join("");
        })
        .join(" "); // join words with space
}

// Test cases
console.log(stringConvert("String"));           // "StRiNg"
console.log(stringConvert("Weird string case")); // "WeIrD StRiNg CaSe"