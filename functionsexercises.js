function say(message){
    console.log(message);
}
let result=say('hello');
console.log('the result is:',result);
 function add(a,b){
    return a+b;
 }
 let answer=add(2,5);
 console.log('answer is:',answer);
 //returns multiple statements
 function compare(x,y){
    if(x>y){
        return 1;
    }
    else if(x<y){
        return -1;
    }
    else
        return 0;
 }
 let solutions=compare(1,3);
 console.log(solutions);
//adding different numbers that are in arguments
function addition(){
    let sum=0;
    for(let i=0; i<arguments.length;i++){
        sum=sum+arguments[i];
        return sum;
    }
  console.log(addition(1,2,3));
}