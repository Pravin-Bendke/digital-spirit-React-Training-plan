
//create function
async function createUserFun() {

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        department: document.getElementById("department").value,
        bloodgroup: document.getElementById("bloodgroup").value,
    };
    if (user.name===""||user.email===""||user.phone===""|| user.state===""||user.city===""||user.department===""||user.bloodgroup===""){
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
