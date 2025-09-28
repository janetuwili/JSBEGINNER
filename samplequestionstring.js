function toWeirdCase(str) {
  return str
    .split(" ") // split into words
    .map(word => {
      return word
        .split("") // split word into characters
        .map((char, index) => 
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join(""); // join characters back into a word
    })
    .join(" "); // join words back into a string
}

console.log(toWeirdCase("strings"));     // "StRiNgS"
console.log(toWeirdCase("jeannette"));   // "JeAnNeTtE"
console.log(toWeirdCase("weird string case"));