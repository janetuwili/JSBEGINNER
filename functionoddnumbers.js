function isOdd(number){
    return number%2;
}
function getOdd(){
    return Array.prototype.filter.call(arguments,isOdd);
}
let result=getOdd(10,1,3,20,8,9);
console.log(result);
//return even numbers

function isEven(numbers){
    return numbers%2==0;
}
function getEven(){
    return Array.prototype.filter.call(arguments,isEven);
}
let answers=getEven(10,20,1,6,8,9,11);
console.log(answers);