let pageView =
    Number(localStorage.getItem("pageView"))||0;

    pageView++; //increment by 1.

    localStorage.setItem("pageView",pageView);

    document.getElementById("counter").innerText = pageView;

    function restartCount(){
        localStorage.removeItem("pageView");
        location.reload();
    }