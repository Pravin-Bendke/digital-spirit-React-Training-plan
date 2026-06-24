function checkAuth() {

    const token =
        localStorage.getItem("token");

    if (!token) {
        window.location.href =
            "login.html";
            alert("log in first and then access this page")
    }
}
checkAuth()

// let userData =[];
// let filterDataPage =[];

fetch("http://localhost:3000/users") //getting data through api
.then(response=>response.json())
.then(users=>{
    userData=users;
    filterDataPage=users;
    getAllUsers(userData)
})

const recordsOnpage = 10 // numbers of user on page /rows
let currentPage = Number(localStorage.getItem("currentPage")) || 1; //current page  


// DISPLAY ALL USER 

async function getAllUsers(userData){
    const loading = document.getElementById("loading")  
    try {
        if(loading){
            loading.style.display ="block";
        }
        const tabledata = document.getElementById("tabledata");//its need to similar id to access
        //we can store data in tabledata variable
        tabledata.innerHTML="";
        
        //this line for data not found 
        if(userData.length === 0){
            tabledata.innerHTML = `
            <tr style="height:70px;">
                <td colspan="9"
                    style="text-align:center; vertical-align:middle; font-size:15px; font-weight:bold;">
                    Data Not Found
                </td>
            </tr>
            `;
            return;
        }
        const pagination = document.getElementById("pagination")
        
        const start = (currentPage-1)*recordsOnpage;
        const end = start+recordsOnpage
        
        const PageData = userData.slice(start,end)
            
            

            PageData.forEach(user => {//this loop we can use iterate data from data
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
            document.getElementById("pageNumber").textContent=currentPage
        });
    } catch (error) {
    console.log("Error: ",error)
    }   
    finally{
        loading.style.display ="none"; 
    }
    
}
getAllUsers()



//SEARCH SPECIFIC USER USING NAME / EMAIL
// const searchFun =()=>{
//             let filter = document.getElementById("searchInput").value.toUpperCase();//get search bar 
//             let userTable = document.getElementById("userTable");
//             let tr = document.getElementById("userTable")
//                     .getElementsByTagName("tr");
            
//             for(var i=0;i<tr.length;i++){  
//                 let tdName = tr[i].getElementsByTagName("td")[1];
//                 let tdEmail = tr[i].getElementsByTagName("td")[2];
//                 if(tdName||tdEmail){
//                     let Name = tdName.textContent || tdName.innerHTML;
//                     let Email = tdEmail.textContent || tdEmail.innerHTML;
                    
//                         if(Name.toUpperCase().indexOf(filter)>-1 || Email.toUpperCase().indexOf(filter)>-1) {
//                             tr[i].style.display="";
//                             }
//                         else{
//                             tr[i].style.display="none";
//                         }
//                     }
//             }
//         } 

function searchFun() {
    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();
    const filteredUsers = userData.filter(user =>
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText)
    );
    currentPage = 1; // search result first page pasun
    getAllUsers(filteredUsers);
}
//filter data through Department,State,City,BloodGroup

async function FilterData() {
    try {
        
        const department = document.getElementById("filterDept").value;
        const state = document.getElementById("filterState").value;
        const city = document.getElementById("filterCity").value;
        const bloodgroup = document.getElementById("filterBloodgroup").value;

        let query =[];
        //filter conditions
        if(department){query.push(`department=${department}`)};
        if(state){query.push(`state=${state}`)};
        if(city){query.push(`city=${city}`)};
        if(bloodgroup){query.push(`bloodgroup=${encodeURIComponent(bloodgroup)}`)};
        
        //Sorting code:

        const sortType = document.getElementById("sortBy").value;

        if(sortType){
            query.push(`_sort=name`);
            query.push(`_order=${sortType}`)
        };
        
            let urls =query.length 
                    ?`http://localhost:3000/users?${query.join("&")}`
                    :`http://localhost:3000/users`

                    // here we applied condition if length>1 print else empty
            
            const response = await  fetch(urls);
            const users = await response.json();
            filterDataPage=users
                currentPage =1;
                getAllUsers(filterDataPage);             
    } catch (error) {
        console.log(error);
    }
    }

//For pegination Prev and Next :
// Prev page
document.getElementById("prev").addEventListener("click",function(){
    if (currentPage>1){
        currentPage --;
        localStorage.setItem("currentPage", currentPage);
        getAllUsers(filterDataPage)
        document.getElementById("pageNumber").textContent=currentPage
    }
});
//next page
document.getElementById("next").addEventListener("click",function(){
const totalPages = Math.ceil(filterDataPage.length/recordsOnpage)
    if (currentPage<totalPages){
        currentPage ++;
        localStorage.setItem("currentPage", currentPage);
        getAllUsers(filterDataPage);
        document.getElementById("pageNumber").textContent=currentPage
    }
});


"Theame:"

const themeSelector = document.getElementById("themeSelector");

// Load saved theme when page opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.className = savedTheme;
    themeSelector.value = savedTheme;
}

// Save theme when user changes it
themeSelector.addEventListener("change", function () {
    const selectedTheme = this.value;

    document.body.className = selectedTheme;
    localStorage.setItem("theme", selectedTheme);
});