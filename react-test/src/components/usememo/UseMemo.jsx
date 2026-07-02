import React, { useCallback, useRef, useState ,useEffect} from 'react'


// function ExpensiveTask(num){
//     console.log("inside Expensive Task :");
    
//     for (let i = 0; i <=1000000000; i++) {}
//         return num*2;
    
// }


const ExpensiveTask =()=>{
    const [count, setCount] = useState(0);
    const [text,setText] = useState("");
    const previousFunction = useRef(null);

    const expensiveCalcultion =useCallback(()=>{
        console.log("running expensive calculation :");
        
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
                result +=i;            
        }
        return result;
    },[count])


    useEffect(() => {
     if (previousFunction.current){
        if(previousFunction === expensiveCalcultion){
            console.log("funtion not re created");
        }else{
            console.log("functon got re-created");   
        }
     }else{
            previousFunction.current = expensiveCalcultion

     }

    }, [expensiveCalcultion])
    
    return (
        
            <div>
                <input type="text" 
                       value={text}
                       onChange={(e)=>setText(e.target.value)}
                       placeholder='Type Something' />
                       <p>Expensive Calculation Result :{expensiveCalcultion()}</p>
                    <button onClick={()=>setCount(count+1)}>Increase Count</button>
            </div>    
    )
}

export default ExpensiveTask