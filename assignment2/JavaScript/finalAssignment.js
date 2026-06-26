const students = [
    {id: 1,name: "Aarav",score: 85,status: "pass"},
    {id: 2,name: "Diya",score: 45,status: "fail"},
    {id: 3,name: "Vivaan",score: 78,status: "pass"},
    {id: 4,name: "Ananya",score: 92,status: "pass"},
    {id: 5,name: "Arjun",score: 38,status: "fail"},
    {id: 6,name: "Priya",score: 67,status: "pass"},
    {id: 7,name: "Rahul",score: 49,status: "fail"},
    {id: 8,name: "Sneha",score: 88,status: "pass"},
    {id: 9, name: "Rohan",score: 55,status: "pass"},
    {id: 10,name: "Kavya",score: 73,status: "pass"}
];

// console.log(students);
"Step 1"
// Filter all passing students using:
// .filter()

// const passStudent = students.filter(student=>student.score>=50);
// const passStudent = students.filter(student=>student.status==="pass");
// console.log(passStudent);
"Output"
// {id: 1, name: 'Aarav', score: 85, status: 'pass'}
// {id: 3, name: 'Vivaan', score: 78, status: 'pass'}
// {id: 4, name: 'Ananya', score: 92, status: 'pass'}
// {id: 6, name: 'Priya', score: 67, status: 'pass'}
// {id: 8, name: 'Sneha', score: 88, status: 'pass'}
// {id: 9, name: 'Rohan', score: 55, status: 'pass'}
// {id: 10, name: 'Kavya', score: 73, status: 'pass'}

"Step 2"
// Transform student names into Capital Case using:
// .map()
// const upperCaseName = students.map(student=>student.name.toUpperCase());
// console.log(upperCaseName);
//['AARAV', 'DIYA', 'VIVAAN', 'ANANYA', 'ARJUN', 'PRIYA', 'RAHUL', 'SNEHA', 'ROHAN', 'KAVYA']


"Step 3"
// Create a simulated API save operation using:
// ●​ Promise
// ●​ async/await

// function saveStudent(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({
//                 success:true,
//                 message :"student data stored ...",
//                 data : data
//             });
//         },2000);
//     });
// };

// async function saveData(){
//     try {
//         console.log("save data function");
//         const response = await saveStudent(students);
//         console.log("response Saved Success ");
//         console.log(response);
//     } catch (error) {
//         console.log("Error :",error);
//     }
// }
// saveData()

"Step 4"
// Log:
// Original Data
// Passing Students
// Formatted Students
// Save Success Response

// console.log("Original Data :",students);
// const passStudent = students.filter(student=>student.status==="pass");
// console.log("=========Pass Student==========");
// passStudent.forEach(student=>console.log(
// `
//     Name : ${student.name}
//     Score : ${student.score}
//     Status :${student.status}
//     `));

