function addition(){
    let sum=0;
    for(let i=0; i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
    
}
console.log(addition(1,2));
console.log(addition(1,2,3,4,5));