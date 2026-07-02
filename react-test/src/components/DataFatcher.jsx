import { useEffect, useState } from "react";


function DataFatcher(){
    const [data,setData]=useState([])
    const [loding,setLoading]=useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        });
    },[]);
    return(
        <div>
            {loding ?(
                <h1>Loading</h1>
              ):(
                <ul>
                    {data.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
                )
            }
        </div>
    );
}

export default DataFatcher