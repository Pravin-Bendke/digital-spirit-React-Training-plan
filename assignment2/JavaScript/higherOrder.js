//For of loop
// const arr=[1,2,3,4,5,6]

// for (const num of arr){
//     console.log(num);
// }

// const names ="Pravin Bendke"
// for(name of names){
//     console.log(name);
    
// }

// Maps

// const arr=[1,2,3,4,5,6]

// const output = arr.map(function binery(x){
//     return x.toString(2);
// })
// console.log(output)


const arr=[1,2,3,4,5,6]

const output = arr.map(num=>num*2)
console.log(output);//[2, 4, 6, 8, 10, 12]

const names = ["john", "sara", "mike"];
const upName = names.map(name=>name.toUpperCase());

console.log(upName);//['JOHN', 'SARA', 'MIKE']

const prices = [100, 200, 300];

const ApplyDoller = prices.map(price=>`$${price}`)
console.log(ApplyDoller);//['$100', '$200', '$300']

const students = [
    { name: "John", marks: 85 },
    { name: "Sara", marks: 90 },
    { name: "Mike", marks: 75 }
];
const StudName = students.map(student=>student.name)
console.log(StudName);//(3) ['John', 'Sara', 'Mike']


const pricess = [1000, 2000, 3000];
const gstPrice = pricess.map(price=>price+(price*18/100))

console.log(gstPrice);//higherOrder.js:52 (3) [1180, 2360, 3540]


const users = ["John", "Sara", "Mike","Pravin","Rahul","Shrusti"];
const applyId = users.map((user,index)=>({
    Id : index + 1,
    name : user
}
))
console.log(applyId);
// {Id: 1, name: 'John'}
// {Id: 2, name: 'Sara'}
// {Id: 3, name: 'Mike'}
// {Id: 4, name: 'Pravin'}
// {Id: 5, name: 'Rahul'}
// {Id: 6, name: 'Shrusti'}

const numbers =[1,2,3,4,5,6,7,8,9,10]

const square = numbers.map(num=>num**2)
console.log(square);//(10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

"// Task 1: Product Filter"
// Create array:
// ●​ Product Name
// ●​ Price
// ●​ Category
// Requirements:
// ●​ Display products under ₹1000
// Using:
// .filter()

// const products = [
//     {
//         productName: "Laptop",
//         price: 50000,
//         category: "Electronics"
//     },
//     {
//         productName: "Mouse",
//         price: 800,
//         category: "Electronics"
//     },
//     {
//         productName: "Book",
//         price: 500,
//         category: "Education"
//     },
//     {
//         productName: "Keyboard",
//         price: 1200,
//         category: "Electronics"
//     }
// ];

// const under1000 = products.filter(product=>product.price<1000)
// console.log(under1000);
// {productName: 'Mouse', price: 800, category: 'Electronics'}
// {productName: 'Book', price: 500, category: 'Education'}


"// Task 2: Product Formatter"
// Transform products into:
// Product: Laptop​
// Price: ₹50000
// Using:
// .map()

const formattedProduct = products.map(product=>`
    Product :${product.productName}
    Price : ${product.price}
    catecory :${product.category}
    `)
console.log(formattedProduct);

// ['\n    Product :Laptop\n    Price : 50000\n    catecory :Electronics\n    ', '\n    Product :Mouse\n    Price : 800\n    catecory :Electronics\n    ', '\n    Product :Book\n    Price : 500\n    catecory :Education\n    ', '\n    Product :Keyboard\n    Price : 1200\n    catecory :Electronics\n    ']

formattedProduct.forEach(product=>{
    console.log(product);
    console.log("==================================");
})

//     Product :Laptop
//     Price : 50000
//     catecory :Electronics 
// ==================================
//     Product :Mouse
//     Price : 800
//     catecory :Electronics
// ==================================
//     Product :Book
//     Price : 500
//     catecory :Education
// ==================================
//     Product :Keyboard
//     Price : 1200
//     catecory :Electronics
// ==================================

"// Task 3: Student Result Processing"
// Create student array.
// Requirements:
// ●​ Filter passed students
// ●​ Display only passed students

const studentss = [
    {
        name: "John",
        marks: 85
    },
    {
        name: "Sara",
        marks: 45
    },
    {
        name: "Mike",
        marks: 75
    },
    {
        name: "Emma",
        marks: 30
    }
];

const passedStudent = studentss.filter(student=>student.marks>50);
console.log(passedStudent);


"Task 4: Employee Directory"
// Create employee array.
// Requirements:
// ●​ Filter employees from IT department
// ●​ Map employee names into uppercase

const employees =
[
    {
        name: "Pravin",
        department: "IT"
    },
    {
        name: "Amit",
        department: "HR"
    },
    {
        name: "Rahul",
        department: "IT"
    },
    {
        name: "Sneha",
        department: "Finance"
    },
    {
        name: "Neha",
        department: "IT"
    }
];

const itEmp = employees.filter(emp=>emp.department==="IT")
console.log(itEmp);

// {name: 'Pravin', department: 'IT'}
// {name: 'Rahul', department: 'IT'}
// {name: 'Neha', department: 'IT'}

const empUpperName = employees.map(emp=>emp.name.toUpperCase())
console.log(empUpperName);

// "PRAVIN"
// "AMIT"
// "RAHUL"
// "SNEHA"
// "NEHA"

"Questions"
// 1.​ Why is map() commonly used in React?
        //Because of when we want iterate data from collection/ array in this case we use map().
        //its help to reduse code other wise we use for loop and while loop for iteration and perform a task

// 2.​ Why is filter() useful?
        //its help to perform some task like give me student name whose marks>90 in this case we use filter.
        //when we applying some condition in this case we use filter.
        //its create new array and contain filter data.

// 3.​ Which method creates a new array?
        //map and filter both methods are create new array without changing original data.
        //its helpfull to handle data because its not affect on original data


"⭐ Bonus Challenge"
// Build Product Search and Filter Logic.
// Features:
// ●​ Search Product
// ●​ Filter by Price
// ●​ Display Formatted Results

const productssss = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1200 }
];

    const search ="mouse"

    const result = productssss.filter(product=>product.name.toUpperCase().includes(search.toUpperCase()));

    console.log(result);
    
