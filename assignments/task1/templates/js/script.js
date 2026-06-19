
// DISPLAY ALL USER 
async function getAllUsers(){
    const loading = document.getElementById("loading")
 try {

    loading.style.display ="block";
    const response = await fetch("http://localhost:3000/users"); //getting data through api
    const data = await response.json(); //convert data into json objet  and aslo its return promise(resolve/reject)
    console.log(data);

    const tabledata = document.getElementById("tabledata");//its need to similar id to access
    //we can store data in tabledata variable
    
    data.forEach(user => {//this loop we can use iterate data from data
        const row =`
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
               <button onclick="userDelete('${user.id}')">Delete</button>
               <button onclick="window.location.href='update.html?id=${user.id}'"> Edit </button>
            </td>
        </tr>    
        `;
        tabledata.innerHTML +=row
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


//create function
async function createUserFun() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
    if (user.name===""||user.email===""||user.phone===""){
        alert("fill all fields")
        return;
        }    
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
}

async function userDelete(id) {
    // const fullTable =document.getElementById("userTable")
    // const tr = document.getElementById("tabledata").getElementsByTagName("tr")[0].innerText
    // console.log(tr);
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
       
    });
    location.reload();
    getAllUsers()
}

// delete
// async function userDelete(id) {
//     console.log(id);
//     const response = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "DELETE"
//     });
//     location.reload()
// }

async function updateUser(id) {

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    alert("User Updated Successfully");
    window.location.href = "index.html";
}
    
// const response = await fetch(`http://localhost:3000/users/${id}`, {
//         method : "PUT",
//         headers :{"Content-Type":"application/json"}
// })