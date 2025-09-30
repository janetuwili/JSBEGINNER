function convertString(str){
    return str
    .split("")
    .map(word=>{
        return word
        .split("")
        .map((char,index)=>index%2===0? char.toUpperCase(): char.toLowerCase())
        .join("");
    })
    .join("");
}
console.log(convertString("String"));
console.log(convertString("Weird string case"));