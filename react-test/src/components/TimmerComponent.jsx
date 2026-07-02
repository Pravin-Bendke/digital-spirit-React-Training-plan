import { useState,useEffect } from "react";

function TimmerComponent(){
    const [second, setSeconds]=useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            console.log("setinterval executed :")
            setSeconds(prev=>prev+1)
        },1000);
        return()=>{
            console.log("time to stop");
    
            clearInterval(intervalId)
        }

    })
    return(
        <div>
            <h1>Timer : {second}</h1>
        </div>
    )
}

export default TimmerComponent