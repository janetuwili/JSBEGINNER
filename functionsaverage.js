let sum=0;
function calculate(numbers){
    for(let i=0;i<arguments.length;i++){
    sum+=arguments[i];

}
return sum;
}
let result=calculate(1,2);
console.log(result);
function average(number){
    for (let i=0;i<arguments.length;i++){
        average=sum/arguments[i];
    }
    return average;
}
let solut=average(1,2);
console.log(solut);



