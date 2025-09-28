function retrunString(name){
    return name;

}
let result=retrunString('uwiringiyimana');
console.log(result);//function which return the string
function changeString(fname){
    return fname;

}
let solution=changeString('alice');
console.log(solution.toUpperCase());//convert string into uppercaseletters
console.log(solution.toLowerCase());//convert string into lowecaseletters
//examples of using.split methood
let firstname='uwamahoro';//split it breaks a string into an array
let fnames=firstname.split("");
console.log(fnames);

let greeting='good morning';
let feedback=greeting.split("");
console.log(feedback);

//exmaples of using.map methood
//.map it transforms each element in a new array, it applies to each element

let numbers=[1,2,3];
let doubled=numbers.map(num=>num*2)
console.log(doubled);

let str=['jamviye'];
let translate=str.map(words=>words.toUpperCase())
console.log(translate);
let convert=str.map(chars=>chars.toLowerCase())
console.log(convert);

//.join it combines an arraynback into a string
let names=['ayinkamiye','vestine'];
let joinedletters=names.join("")
console.log(joinedletters);

//examples of combining .spit().map().join()

let vehicles='carina';
let vehi=vehicles
.split("")
.map(char=>char.toUpperCase())
.join("");
console.log(vehi);

//working on the exercises project
function takeString(str){
    return str;

}
let result1=takeString('samwel');
console.log(result1);
let result2=result1
.split("")
.map(char=>char.toUpperCase())
.join("");
console.log(result2);
//corrected examples which takes a string and return it
function returnStrings(letters){
    return letters
    .split("")
    .map(words=>{
        return words
        .split("")
           .map((char,index)=>
        index%2===0? char.toUpperCase():char.toLowerCase())
           
        .join("");
    })
    .join("");   

}
let solutions=returnStrings('gasore');
console.log(solution);
let solutions1=returnStrings('weird case');
console.log(solutions1);

//examples of corrected exercises again
function returnVehicles(names){
    return names
    .split("")
    .map(word=>{
        return word
        .split("")
        .map((char,index)=>
        index%2===0? char.toUpperCase():char.toLowerCase())
        .join("");
    })
    .join("");

}
let vehis=returnVehicles("toyota");
console.log(vehis);
let vehis1=returnVehicles('weirdcase vehicles');
console.log(vehis1);1

