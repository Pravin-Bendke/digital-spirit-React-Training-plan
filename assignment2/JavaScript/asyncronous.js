"Task 1: Create Promise"
// Create Promise that:
// ●​ Resolves after 2 seconds
// ●​ Returns Success Message

// let promise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Success..")
//     },2000)
// })
// promise.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject);
    
// })

"Task 2: Fetch Users"
// API:
// https://jsonplaceholder.typicode.com/users
// Requirements:
// ●​ Fetch data
// ●​ Display response in console



// fetch("https://jsonplaceholder.typicode.com/users")// fetch can return promise he does not return Object
// .then(response=>response.json())// here we convert Promise data in json format
// .then(users=>{
//     console.log(users);
// })

"Task 3: Async Await"
// Rewrite Task 2 using:
// ●​ async
// ●​ await

// async function getUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData =await response.json();
//     console.log(userData);
// }
// getUsers()

"Task 4: Error Handling"
// Handle:
// ●​ Network Failure
// ●​ Invalid Endpoint
// Display proper error message.

// async function getUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok){
//             throw new Error(
//                 `Error ${response.status}`
//             );
//         }else{
//             console.log("Data loading...");
            
//         }
//         const userData = await response.json();
//         console.log(userData);
        
//     } catch (error) {
//         console.log("Error :",error.message);
        
//     }
// }
// getUser()


"Task 5: User Loader"
// Requirements:
// ●​ Show Loading State
// ●​ Show Data
// ●​ Show Error

// async function getUsers() {
//     const status = document.getElementById("status");
//     const userList = document.getElementById("userList");
//     try {
//         status.textContent = "Loading...";//display loading status
//         userList.innerHTML=""; //When we try reload then previous data remove  
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");//getting data api through 
//         if(!response.ok){ //when we failed to fetch data then error occure 
//             throw new Error ("Due to some Error in Fetching")
//         }

//         const userData = await response.json(); //fetched data conver into json format.
//         status.textContent = "Data Fetch Successfully"; // after fetch data successfull msg
//         userData.forEach(user => { //each user data we can fetch and append in innerhtml 
//             const li = document.createElement("li")
//           li.innerHTML = `
//                 <strong>Name:</strong> ${user.name}<br>
//                 <strong>Username:</strong> ${user.username}<br>
//                 <strong>Email:</strong> ${user.email}<br>
//                 <strong>Address:</strong> ${user.address.street},
//                 ${user.address.city}
//                 <hr>
//             `;// data storing in li innerhtml 
//             userList.appendChild(li); // appeding in userList 
//         });
//     } catch (error) {
//         status.textContent = "Error :"+error.message  // display error,due to occure in program running .
//     }
// }


// 1.​ Why is async/await preferred?
    // because code easy to read and when we want syncronious code write in asyncronious way in this case we use async await it easy to handle error its reduse .then chaining. its help to improve quality of code  

// 2.​ What happens if await is removed?
    // await is help to wait for complete other operation 
    //without await program complete and return promise object instead of data

// 3.​ Why should API calls use try/catch?
    // handle the errors ,unexpected failures,prevent the application crashing,show meaningfull errors ,help to tell why this problem occure.

