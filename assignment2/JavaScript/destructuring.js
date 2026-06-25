"Assignment: Destructuring & Spread Operator:"

"Task 1: Object Destructuring"
// const students = [    
//     {      
//       name: "Pravin Subhash Bendke",
//       marks: "85",
//       email: "pravin.bendke@gmail.com",
//       phone: "9870000001",
//       state: "Maharashtra",
//       city: "Pune",
//       bloodgroup: "A+"
//     },
//     {
//       name: "Rahul ",
//       marks: "88",
//       email: "rahul.sharma@gmail.com",
//       phone: "9870000002",
//       state: "Maharashtra",
//       city: "Pune",
//       bloodgroup: "A-"
//     }
// ]

// const [{marks,name,email,phone,state}]=students
// console.log(students);
// console.log(name,marks,email,phone,state,);
//array
// const [fisrtStud,secondStud]=students
// console.log(fisrtStud.name);
// console.log(secondStud.name);


// //for using
// students.map(student=>{
//     const{name,marks,email,phone,state,city,bloodgroup}=student
//     console.log(`
//                 name  :${name}
//                 marks :${marks}
//                 email :${email}
//                 phone :${phone}
//                 state :${state}
//                 city  :${city}
//             bloodgroup:${bloodgroup}
//         `);
// })
// console.log(students)



// const students = [
//     {
//         name: "Pravin Subhash Bendke",
//         marks: "85",
//         email: "pravin.bendke@gmail.com",
//         phone: "9870000001",
//         state: "Maharashtra",
//         city: "Pune",
//         bloodgroup: "A+"
//     },
//     {
//         name: "Rahul",
//         marks: "88",
//         email: "rahul.sharma@gmail.com",
//         phone: "9870000002",
//         state: "Maharashtra",
//         city: "Pune",
//         bloodgroup: "A-"
//     }
// ];

// console.log("===== Operation 1: Array + Object Destructuring =====");

// const [firstStudent] = students;

// const {
//     name,
//     marks,
//     email
// } = firstStudent;

// console.log(name);
// console.log(marks);
// console.log(email);


// console.log("\n===== Operation 2: Direct Destructuring =====");

// const [{ city, bloodgroup }] = students;

// console.log(city);
// console.log(bloodgroup);


// console.log("\n===== Operation 3: Two Students Destructuring =====");

// const [student1, student2] = students;

// const {
//     name: name1,
//     marks: marks1
// } = student1;

// const {
//     name: name2,
//     marks: marks2
// } = student2;

// console.log(`${name1} - ${marks1}`);
// console.log(`${name2} - ${marks2}`);


// console.log("\n===== Operation 4: Destructuring Inside forEach =====");

// students.forEach(({name,marks,city,bloodgroup}) => {
//     console.log(`
//         Name: ${name}
//         Marks: ${marks}
//         City: ${city}
//         Blood Group: ${bloodgroup}
//         `);
//     }
// );
"Task 2: Array Destructuring"

const language =["React","JavaScript","HTML","CSS"];

const[language1,language2]=language
console.log(language);// ['React', 'JavaScript', 'HTML', 'CSS']
console.log(language1);// React
console.log(language2);// JavaScript




"Spread Operator"
// its help to create copy
// We can use to split elements.
//we can use to combine two or more array.
//using "..." this three dots we use as a spread operator.
// its perform on array and string.

// let numbers = [1,2,3,4,5,6]
//here we give array but its no need array its need quama seperated numbers thats why we use spread operator.
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log("maximum :",maximum);
// console.log("minimum :",minimum);

// let name="Pravin Bendke";
// let letters = [...name]//['P', 'r', 'a', 'v', 'i', 'n', ' ', 'B', 'e', 'n', 'd', 'k', 'e']
// let letters = [...name].join("")//Pravin Bendke
// let letters = [...name].join("-")//P-r-a-v-i-n- -B-e-n-d-k-e
// console.log(letters);


// let fruit =["apple","banana","orange"];
// let vegitables =["carrot","onion","bhendi"]
// let food = [...fruit,...vegitables,"egg","milk"];

// console.log(food);

"Shallow copy"

// const setting = {
//     theme : "Light",
//     language :"English",
//     Notification : true,
//     passType : "pattern"
// }

// const updateSetting ={
//     ...setting,
//     theme :"Dark",
//     passType:"pin"
// }
// console.log("theam :",setting.theme,"Passtype :",setting.passType);
// theam : Light Passtype : pattern

// console.log(setting);
// {theme: 'Light', language: 'English', Notification: true, passType: 'pattern'}

// console.log("Updated theam :",updateSetting.theme,"Upadated Passtype :",updateSetting.passType);
// Updated theam : Dark Upadated Passtype : pin

// console.log(updateSetting);
// {theme: 'Dark', language: 'English', Notification: true, passType: 'pin'}

`
Task 4: Nested Configuration Update
Create: applicationConfig object
Requirements:
    ●​ Clone configuration
    ●​ Update nested property
    ●​ Compare original and updated objects`

// const applicationConfig = {
//     AppName:"student Management",
//     purpose:"study",
//     version:"Android12",
//     setting:{
//     theme : "Light",
//     language :"English",
//     Notification : true,
//     }
// };

// const updateConfig ={
//     ...applicationConfig,
//     setting : {
//         ...applicationConfig.setting,
//         theme :"Dark",
//         language : "Marathi"
//     }
// };

console.log(applicationConfig);
// AppName : "student Management"
// purpose : "study"
// setting :  {theme: 'Light', language: 'English', Notification: true}
// version : "Android12"
console.log(updateConfig);
// AppName : "student Management"
// purpose : "study"
// setting : {theme: 'Dark', language: 'Marathi', Notification: true,}
// version : "Android12"
