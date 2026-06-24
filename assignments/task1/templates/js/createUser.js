
//create function
async function createUserFun() {

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        password1:document.getElementById("password1").value,
        password2:document.getElementById("password2").value,
        department: document.getElementById("department").value,
        bloodgroup: document.getElementById("bloodgroup").value,
    };
    if (user.name===""||
        user.email===""||
        user.phone===""|| 
        user.state===""||
        user.city===""||
        user.password1===""||
        user.password2===""||
        user.department===""||
        user.bloodgroup===""
    ){
        alert("fill all fields")
        return;
        }    

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );
    window.location.href="login.html"
}


async function login() {

    const email =
        document.getElementById("loginEmail").value;
    const password =
        document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:3000/users?email=${email}`
        );
        const users = await response.json();
        if (users.length === 0) {
            alert("User not found");
            return;
        }
        const user = users[0];
        if (user.password1 !== password) {
            alert("Invalid Password");
            return;
        }
        // Login Success
        const token ="token_" +Date.now() +Math.random().toString(36).slice(2);
        
        // const expiryTime = Date.now()+(10000)
        
        localStorage.setItem("token", token);
        // localStorage.setItem("expiryTime", expiryTime);


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );
        alert("Login Successful");
        window.location.href = "index.html";
    } catch (error) {

        console.log(error);
        alert("Server Error");

    }
}

async function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    alert("Log out Succesfully");
    window.location.href="login.html";
    
    checkToken()
}


// function checkToken(){
//     const token = localStorage.getItem("token");
//     const expiryTime = localStorage.getItem("expiryTime");
    
//     if(!token || Date.now()>Number(expiryTime))
//     {
//         localStorage.removeItem("token");
//         localStorage.removeItem("expiryTime");
//         localStorage.removeItem("loggedInUser");

//         alert("Time Out please log in again");
//         window.location.href="login.html";

//     }
// }