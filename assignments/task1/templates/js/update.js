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


async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if(!id){
            return;
        }
        
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const user = await response.json();
        
        document.getElementById("name").value       = user.name,
        document.getElementById("email").value      = user.email,
        document.getElementById("phone").value      = user.phone,
        document.getElementById("state").value      = user.state,
        document.getElementById("city").value       = user.city,
        document.getElementById("department").value = user.department,
        document.getElementById("bloodgroup").value = user.bloodgroup
    
}
loadData()

async function updateUser() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        state: document.getElementById("state").value,
        city : document.getElementById("city").value,
        department: document.getElementById("department").value,
        bloodgroup: document.getElementById("bloodgroup").value
    };
    

    const response=await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    alert("User Updated Successfully");
    window.location.href="index.html"
    
}

