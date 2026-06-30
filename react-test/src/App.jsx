import { useState } from "react"; //hooks
import Card from "./components/card";
import Colors from "./components/colors";
import PassWordGenerator from "./components/passGenerate";
import Currency from "./components/currency";
import Product  from "./components/Products";
import Greeting from "./components/Greeting";

function App(){
    // const username = "PravinBendke"

    const [counter,setCounter] = useState(0)
    
    const Increment = () =>{
        // console.log("Clicked :",counter);
        setCounter(counter+1)
    }

    const Decrement = ()=>{
        if (counter>0)
            setCounter(counter-1)
            // console.log(counter)
    }


    return (
        <>
        {/* <h1>counter :{counter}</h1>
        <button onClick={Increment}>Increment</button><br/><br/>
        <button onClick={Decrement}>Decrement</button> */}
        {/* <Card /> */}
        {/* <Colors /> */}
        {/* <PassWordGenerator /> */}
        {/* <Currency /> */}
        
        {/* <Product title ="Gaming Laptop" price={1299} instock={true} categories={["Electronics","Computers","Gaming"]} /> */}
        
        <Greeting name ="Pravin" message ="hello"/>
        <Greeting name ="Rahul" message ="Good Morning"/>
        <Greeting name ="Shrusti" message ="Good Afternoon"/>
    
        </>
 )
}

export default App;