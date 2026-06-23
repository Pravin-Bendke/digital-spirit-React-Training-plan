
//Save visited Page 
function savePageVisit(pageName) {

    let history = JSON.parse(localStorage.getItem("visitHistory")) || [];
    console.log(history);
    
    history = history.filter(page=>page!==pageName);
    // history.push(pageName);// when we use push in this case sequencial data strore in ascending
    history.unshift(pageName)// this line is use for recently visited page on top of history
    localStorage.setItem(
        "visitHistory",
        JSON.stringify(history)
    );
}

function showHistory() {

    const history =
        JSON.parse(localStorage.getItem("visitHistory")) || []; //String convert into Array 

    const historyList =
        document.getElementById("history");

    historyList.innerHTML = "";
    
    history.forEach(page => {
    
        historyList.innerHTML += `
            <li>${page}</li>
        `;
    });
}

//remove local storage Data
function removeHistory(){
    localStorage.removeItem("visitHistory");
    showHistory();
}

showHistory();