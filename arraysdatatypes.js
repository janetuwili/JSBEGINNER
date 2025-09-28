let scores=new Array();//array constructor
let artist=new Array('soso');//array constructor
let athlets=new Array(1,2,3);//array constructor
let colors=['red','blue','green','white']//using array litersl notation
//to access array element we use arrayname[index]
let animals=['alice','diane',1,null,'diodone',false];
console.log(animals[0]);
console.log(animals[4]);
console.log(animals);
console.log(animals.length);
// methods which are in arrays are called map(),filter() and reduce
//to add element to the end of ann array we use push method
//to add element to the beinning of an arry we use unshift method
//to remove element to the end of an array we use pop method, thisisnan example
let vehicles=['car','biycle','motorvehicle','bus'];
console.log(vehicles);
console.log(vehicles.length);
//console.log(vehicles[length-1]);
vehicles[3]='carina';
console.log(vehicles);
vehicles.push='vigo';// adding arrayn element to the end
console.log(vehicles);
vehicles.unshift='motomoto';// adding e;lement to the first array
console.log(vehicles);
console.log(vehicles[0]);
console.log(vehicles[6]);
console.log(vehicles.length);
const result=vehicles.pop();//removing last array element
console.log(result);
let solutions=vehicles.shift();//removing first array element
console.log(solutions);
let index=vehicles.indexOf('car');
console.log(index);
console.log(Array.isArray(vehicles));