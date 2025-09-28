let product=1;
function Multiply(a,b){
    for (let i=0; i<arguments.length;i++){
        product *=arguments[i];
        
    }
    return product;
}
console.log(Multiply(1,2,3));
console.log(Multiply(0,1,2));
// function hoisting allows to call a function before declaring it