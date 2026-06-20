
async function userDelete(id) {
    // const fullTable =document.getElementById("userTable")
    // const tr = document.getElementById("tabledata").getElementsByTagName("tr")[0].innerText
    // console.log(tr);
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
       
    });
    // location.reload();
    if(document.getElementById("tabledata")){
        location.reload()
    }
    
}

