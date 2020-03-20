//arrow function..........=>

//1st way...
// function doubleIt(num){
//     return num*2;
// }

//2nd way...
// const doubleIt = function myFunc(num){
//     return num*2;
// }

//3rd way...
//single parameter
const doubleIt = num => num *2;
const result = doubleIt(50);
console.log(result);

//double parameter
const add = (x,y)=>x+y;
const sum = add(50,70);
console.log(sum);

//no parameter
const give5 = ()=>5;
const result5 = give5();
console.log(result5);

//huge function
const bisalFunction = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const resultNew = sum*diff;

    return resultNew; 
}

const resultNew = bisalFunction(7,5);
console.log(resultNew);


