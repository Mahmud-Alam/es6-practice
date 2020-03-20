/** three dots or spread operator use__ */

//2ta array concat__
// const ages = [12,14,16,13,17];
// const ages2 = [15,16,12];
// const allAges = ages.concat(ages2);
// console.log(allAges);

//3ta array concat__
// const ages = [12,14,16,13,17];
// const ages2 = [15,16,12];
// const ages3 = [25,36,22];
// const allAges = ages.concat(ages2).concat(ages3);
// console.log(allAges);

// array er majhe 5 add kora__
// const ages = [12,14,16,13,17];
// const ages2 = [15,16,12];
// const ages3 = [25,36,22];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

//array sob gula concate korar WRONG way__
// const ages = [12,14,16,13,17];
// const ages2 = [15,16,12];
// const ages3 = [25,36,22];
// const allAges =[ages,ages2, 5, ages3]
// console.log(allAges);

//Spread operator use__
const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,36,22];
const allAges = [...ages,...ages2,5,...ages3];
console.log(allAges);

//max found
const business =650;
const minister =450;
const sochib = 250; 
//const maximum = Math.max(business,minister,sochib);
//console.log(maximum);

//but jodi akta array te thakto?

const taka = [650,450,250];
const maximum = Math.max(taka);
//console.log(maximum); 
//NaN show korbe, mane vul hoise

//so solution hocche three dots (speared operation)...
const maximum2 = Math.max(...taka);
console.log(maximum2); 


