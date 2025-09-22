let counter=120;
console.log(typeof(counter));
counter=false;
console.log(typeof(counter));
counter="foo";
console.log(typeof(counter));
counter;
console.log(typeof(counter));
console.log(typeof(letter));
counter=null;
console.log(typeof(counter));
console.log(Number.MIN_VALUE+Number.MAX_VALUE);
console.log(-Number.MIN_VALUE+Number.MAX_VALUE);
console.log(Number.MAX_VALUE+Number.MAX_VALUE);
console.log(-Number.MAX_VALUE+Number.MAX_VALUE);
console.log(NaN/2);
console.log(NaN===NaN);
let str='javascript';
str=str+'string';
console.log(str);
let s='Javasript';
s[0]='j';
console.log(s);
let inprogress=true;
let completed=false;
console.log(typeof(inprogress));
console.log(typeof(completed));
console.log(Boolean(20));
console.log(Boolean('welcome english'));
let person={
    firstname:'jeannette',
    lastname:'uwiringiyimana',
    age:27,
    height:1,
    address:{
        village:'mpinga',
        cell:'miyove',
        sector:'miyove',
        district:'gicumbi'
    }
    
}
console.log(person.firstname);
console.log(person.age);
console.log(person.sector);
let vehicles={
    name:'car',
    size:'15',
    price:'$1000'
}
console.log(vehicles.name);
let name='jeatty';
console.log(name.length);
console.log(name[0]);
console.log(name[name.length-1]);
let fisrtname='jeannette';
let lastname='uwiringiyimana';
let fullname= fisrtname + lastname;
console.log(fullname);  
let come=true;
let go= come.toString();
let back=Boolean(go);
console.log(back);
let status=false;
let single= status.toString();
let married= Boolean(status);
console.log(married);
let people={//bject
fisrtname:'john',
lastname:'doe'
};
console.log(people.fisrtname);
console.log(people.lastname);
people.fisrtname='diane';
console.log(people.fisrtname);
console.log(people.lastname);
console.log(people.fisrtname + people.lastname);
console.log(typeof(people.lastname));
console.log(Boolean(people.fisrtname));
people.age=25;
console.log(people.age);
console.log(people.name);
delete people.age;
console.log(people.age);
//usingin operator to check if the propertyName belongs to objectName
let vehicle={
    vehicleName:'biycle',
    vehicleCost:'1000',
    vehicleId:'1'
};
vehicle.type='motorcycles';
console.log(vehicle);
delete vehicle.type;//deleting property name
console.log(vehicle);
console.log('vehicleCost' in vehicle);
console.log('vehicleType' in vehicle);
//assigning new values to a variable
let age=20;
let newAge=age;
newAge=newAge+1;
console.log(age);
console.log(newAge);