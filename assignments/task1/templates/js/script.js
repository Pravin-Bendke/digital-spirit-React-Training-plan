
// DISPLAY ALL USER 
async function getAllUsers(){
    const loading = document.getElementById("loading")
 try {

    loading.style.display ="block";
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //getting data through api
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
            }
        } 

async function createUser() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    const data = await response.json();
    console.log("User Created:", data);
}

