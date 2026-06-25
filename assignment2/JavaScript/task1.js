// Create variables using:
// ●​ var

// var name = "Pravin";
// var age = 20;
// var email = "pravin@gmail.com"
// var addr ="Nashik"
// var name = "Rahul" //redeclaration is allowd
// console.log(`
//     Name : ${name}
//     Age : ${age}
//     Email :${email}
//     `)

// if (true){
//     var addr = "pune"
//     console.log(`Inside of the block ${addr}`);
// }
//     console.log(`Outside of the block ${addr}`);

// ●​ let

let name = "Pravin";
let age = 20;
let email = "pravin@gmail.com"
let addr ="Nashik"
// let name = "Rahul" //redeclaration is not allowed
"Error :Uncaught SyntaxError: Identifier 'name' has already been declared"

console.log(`
    Name : ${name}
    Age : ${age}
    Email :${email}
    `)

// if (true){
//     let addr = "pune"
//     console.log(`Inside of the block ${addr}`);
// }
//     console.log(`Outside of the block ${addr}`);

// for (let i = 1; i<=3; i++) {
//     console.log("inside loop",i);
// }
//     console.log("Outside loop",i);//task1.js:47 Uncaught ReferenceError: i is not defined

// "Output:"
// -if block:
//     Name : Pravin
//     Age : 20
//     Email :pravin@gmail.com
    
// -Inside of the block pune
// -Outside of the block Nashik

// -loop:
// inside loop 1
// inside loop 2
// inside loop 3
// 
// if(age>18){
//     console.log("eligible for vote");
//     if(age>60){
//         console.log("Seniour Cityzen");   
//     }
// }else{
//     console.log("Not Eligible for Vote");
// }

// ●​ const

// const country = "India";
// const listOfCountry =["India","japan","USA"]
// if (true) {
//     const country = "USA";
//     console.log("Inside if (const):", country);
// }
// console.log("Outside if (const):", country);
// for (let k=0 ; k <listOfCountry.length; k++) {
//     const message = `Country ${listOfCountry[k]}`;
//     console.log(message);
// }
// console.log(message); // Error

//const listOfCountry =["India","japan","USA"]
// for(let i = 0;i<listOfCountry.length;i++)
// {
//     if(i%2===0){
//         console.log("country :",i,listOfCountry[i]);
//     }
// }

