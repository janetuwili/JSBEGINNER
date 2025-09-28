let energy={//using valueOf()
    valueOf(){
        return 100;
    },
};
let currentEnergy= energy+10;
console.log(currentEnergy);
currentEnergy= energy-20;
console.log(currentEnergy);
currentEnergy= energy*1.3;
console.log(currentEnergy);
currentEnergy= energy/2;
console.log(currentEnergy);
//usingtoString()method
let operations={
    toString(){

        return 20;
    },
};
let result=operations+0;
console.log(result);

result=operations-2;
console.log(result);
result=operations*2;
console.log(result);
result=operations/2;
console.log(result);
let fname='jeannette';
let lname='uwiringiyimana';
console.log(fname.toUpperCase());
console.log(lname.toUpperCase());
console.log(fname>lname);