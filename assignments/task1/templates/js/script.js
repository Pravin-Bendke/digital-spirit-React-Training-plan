let userData =[];
fetch("http://localhost:3000/users") //getting data through api
.then(response=>response.json())
.then(users=>{
    userData=users
    getAllUsers(userData)
})

// DISPLAY ALL USER 
async function getAllUsers(userData){
    const loading = document.getElementById("loading")  
 try {
    if(loading){
        loading.style.display ="block";
    }
    
    // const response = await fetch("http://localhost:3000/users"); //getting data through api
    // const data = await response.json(); //convert data into json objet  and aslo its return promise(resolve/reject)
    // console.log(data);

    const tabledata = document.getElementById("tabledata");//its need to similar id to access
    //we can store data in tabledata variable
    
        tabledata.innerHTML="";
        userData.forEach(user => {//this loop we can use iterate data from data
        const row =`
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.state}</td>
            <td>${user.city}</td>
            <td>${user.department}</td>
            <td>${user.bloodgroup}</td>
            <td>
               <button onclick="userDelete('${user.id}')">Delete</button>
               <button onclick="window.location.href='update.html?id=${user.id}'"> Edit </button>
            </td>
        </tr>    
        `;
        tabledata.innerHTML +=row // this line create duplicate rows 
    });
    
    } catch (error) {
    console.log("Error: ",error)
    }   
    finally{
        loading.style.display ="none"
    }
}
getAllUsers()

//SEARCH SPECIFIC USER USING NAME / EMAIL
    const searchFun =()=>{
            let filter = document.getElementById("searchInput").value.toUpperCase();//get search bar 
            let userTable = document.getElementById("userTable");
            let tr = document.getElementById("userTable")
                    .getElementsByTagName("tr");
            // let found = false;
            for(var i=0;i<tr.length;i++){
                // console.log(tr[i]);
                let tdName = tr[i].getElementsByTagName("td")[1];
                let tdEmail = tr[i].getElementsByTagName("td")[2];
                if(tdName||tdEmail){
                    let Name = tdName.textContent || tdName.innerHTML;
                    let Email = tdEmail.textContent || tdEmail.innerHTML;
                    
                        if(Name.toUpperCase().indexOf(filter)>-1 || Email.toUpperCase().indexOf(filter)>-1) {
                            tr[i].style.display="";
                            }
                        else{
                            tr[i].style.display="none";
                        }
                    }
                    // document.getElementById("notFound").style.display = found ? "none" : "block" ;
            }
        } 


async function FilterData() {
     
    const department = document.getElementById("filterDept").value;
    const state = document.getElementById("filterState").value;
    const city = document.getElementById("filterCity").value;
    const bloodgroup = document.getElementById("filterBloodgroup").value;

    const response = await  fetch("http://localhost:3000/users");
    const users = await response.json();

    const filteredData = users.filter(user=>
                                    (department  ==="" || user.department === department) &&
                                    (state       ==="" || user.state === state) &&
                                    (city        ==="" || user.city === city) &&
                                    (bloodgroup  ==="" || user.bloodgroup === bloodgroup)
                                );
            console.log(filteredData);
            getAllUsers(filteredData);             
}

// async function DisplayFilter(filteredData) {
//     const tabledata = document.getElementById("tableData")
//     let row="";
//         filteredData.forEach(user => {
//         row +=`
//         <tr>
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//             <td>${user.phone}</td>
//             <td>${user.state}</td>
//             <td>${user.city}</td>
//             <td>${user.department}</td>
//             <td>${user.bloodgroup}</td>
//             <td>
//                <button onclick="userDelete('${user.id}')">Delete</button>
//                <button onclick="window.location.href='update.html?id=${user.id}'"> Edit </button>
//             </td>
//         </tr> `;
        

//         });
//         tabledata.innerHTML=row;
// }