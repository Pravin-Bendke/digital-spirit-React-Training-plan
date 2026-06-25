//multiplication

// function mul(a,b) {
//     return a*b;
// }
// console.log(mul(12,33));
// const multiplication =(a,b)=>(a*b)
// console.log(multiplication(11,22));

//addition of two numbers:
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// const addition = (x,y) =>(x+b);
// console.log(addition(3,4));

//WAP for print 1 to 100 even numbers
// function evenNum() {
//     for(let i=0;i<=100;i++){
//         if(i%2===0){
//             console.log(i);   
//         }
//     }
// }
// evenNum()


// const evenNubers = ()=>{
//     let result="";
//     for(let num =0;num<=100;num=num+2){
//         result += num +" ";
//     };     
//     return "Even numbers "+ result;
// };
// document.write(evenNubers());
// console.log(evenNubers());

// const allNumbers = () => {
//     let result = "";
//     for(let num = 0; num <= 100; num++) {
//         result += num + " ";
//     }
//     return "all numbers "+result;
// };
// // document.write(allNumbers());
// console.log(allNumbers());

// function armstrong(armnum){
//     let num1 = String(armnum);
//     let num2 = num1.length;
//     armstrongNumber=0;
//     for(let num of num1){
//         armstrongNumber=armstrongNumber+Number(num)**num2;
//     }
//     if(armstrongNumber===armnum){
//         console.log("number is armstrong :",armstrongNumber)
//     }else{
//         console.log("number is not armstrong :",armstrongNumber)
//     }
// }
// armstrong(15)

// const armstrong=(armnum)=>{
//     let num1 = String(armnum);
//     let num2 = num1.length;
//     armstrongNumber=0;
//     for(let num of num1){
//         armstrongNumber=armstrongNumber+Number(num)**num2;
//     }
//     if(armstrongNumber===armnum){
//         console.log("number is armstrong :",armstrongNumber)
//     }else{
//         console.log("number is not armstrong :",armstrongNumber)
//     }
// }
// armstrong(15)


// fetch("http://localhost:3000/users")
// .then(response=>response.json())
// .then(user=>{
//     for(let i =0;i<user.length;i++){
//         console.log(user[i])
//     }
// })


// function calculate(price,discount) {
//     let discountamt = price*discount/100
//     let discountedPrice = price-discountamt
//     console.log(discountedPrice);
// }
// calculate(100,20)

// const discount =(price,Discount)=>price-(price*Discount/100)
// console.log(discount(1000,20));

// function GenerateFullName(name,middle,surname) {
//     return`
//     First Name : ${name}
//     Middle Name: ${middle}
//     Surname    : ${surname}`;
// }
// console.log(GenerateFullName("Pravin","Subhash","Bendke"));


// const GenerateName=(name,middle,surname)=>`
//     First Name : ${name}
//     Middle Name: ${middle}
//     Surname    : ${surname}`;
// console.log(GenerateName("Pravin","Subhash","Bendke"));

// const students = [
//     {
//       marks: "85",
//       name: "Pravin Subhash Bendke",
//       email: "pravin.bendke@gmail.com",
//       phone: "9870000001",
//       state: "Maharashtra",
//       city: "Pune",
//       bloodgroup: "A+"
//     },
//     {
//       marks: "88",
//       name: "Rahul ",
//       email: "rahul.sharma@gmail.com",
//       phone: "9870000002",
//       state: "Maharashtra",
//       city: "Pune",
//       bloodgroup: "A-"
//     },
//     {
//       marks: "65",
//       name: "Priya Patil",
//       email: "priya.patil@gmail.com",
//       phone: "9870000003",
//       state: "Karnataka",
//       city: "Bangalore",
//       bloodgroup: "B+"
//     }
// ];

// const generatereport = (students)=>{
//     students.forEach(student => {
//         console.log(`
//                 Student Report
// ===============================================                  
//       "name"        : ${student.name}
//       "marks"       : ${student.marks}
//       "email"       : ${student.email}
//       "phone"       : ${student.phone} 
//       "state"       : ${student.state}
//       "city"        : ${student.city}
//       "bloodgroup"  : ${student.bloodgroup}
// ===============================================            
//       `);
        
//     });
// }
// generatereport(students)

// `Output :
//                 Student Report
// ===============================================                  
//       "name"        : Pravin Subhash Bendke
//       "marks"       : 85
//       "email"       : pravin.bendke@gmail.com
//       "phone"       : 9870000001 
//       "state"       : Maharashtra
//       "city"        : Pune
//       "bloodgroup"  : A+
// ===============================================            
      
//                 Student Report
// ===============================================                  
//       "name"        : Rahul 
//       "marks"       : 88
//       "email"       : rahul.sharma@gmail.com
//       "phone"       : 9870000002 
//       "state"       : Maharashtra
//       "city"        : Pune
//       "bloodgroup"  : A-
// ===============================================            
      
//                 Student Report
// ===============================================                  
//       "name"        : Priya Patil
//       "marks"       : 65
//       "email"       : priya.patil@gmail.com
//       "phone"       : 9870000003 
//       "state"       : Karnataka
//       "city"        : Bangalore
//       "bloodgroup"  : B+
// ===============================================          `