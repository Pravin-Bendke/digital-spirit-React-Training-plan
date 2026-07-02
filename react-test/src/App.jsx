import { createContext, useEffect, useState,useMemo, useCallback } from "react"; //hooks
import Card from "./components/card";
import Colors from "./components/colors";
import PassWordGenerator from "./components/passGenerate";
import Currency from "./components/currency";
import Product  from "./components/Products";
import Greeting from "./components/Greeting";
import Button from "./components/button";
import LoggerComponent from "./components/LoggerComponent";
import TimmerComponent from "./components/TimmerComponent";
import Logout from "./components/Logout";
import DataFatcher from "./components/DataFatcher";
import ExpensiveTask from "./components/usememo/UseMemo";
// import ChildCallback from "./components/ChildCallback";

// "Router"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/RouteDemo/Home";
import About from "./components/RouteDemo/About";
import DashBoard from "./components/RouteDemo/DashBoard";
import Navbar from "./components/RouteDemo/Navbar";
import ParamComponent from "./components/RouteDemo/ParamComponent";
import Courses from "./components/RouteDemo/Courses";
import MockTest from "./components/RouteDemo/MockTest";
import Report from "./components/RouteDemo/Report";
import NotFound from "./components/RouteDemo/NotFound";


const router = createBrowserRouter(
        [
            {
                path:"/",
                element:
                <div>
                    <Navbar/>
                    <br />
                    <Home/>
                </div>
                
            },

            {
                path:"/about",
                element:
                <div>
                    <Navbar/>
                    <br />
                    <About/>
                </div>
            },

            {
                path:"/dashBoard",
                element:
                <div>
                    <Navbar/>
                    <br />
                    <DashBoard/>
                </div>,
                children:[
                    {
                        path:'courses',
                        element:<Courses/>

                    },
                    {
                        path:'mock-test',
                        element:<MockTest/>
                    },
                    {
                        path:'reports',
                        element:<Report/>
                    }
                ]
            },
            {
                path:"/student/:id",
                element :
                <div>
                    <Navbar/>
                    <ParamComponent/>
                </div>
            },
            {
                path:"*",
                element: <NotFound/>
            }   
        ]

    )

// import ChildA from "./components/Drilling/ChildA";


// const UserContext = createContext();


function App(){


    // const username = "PravinBendke"
    // const [counter,setCounter] = useState(0)
    // const [total,setTotal] =useState(1)

    // const Increment = () =>{
    //     // console.log("Clicked :",counter);
    //     setCounter(counter+1)
    // }

    // const Decrement = ()=>{
    //     if (counter>0)
    //         setCounter(counter-1)
    //         // console.log(counter)
    // }

    //useEffect work on every render  
        
    // useEffect(()=>{
    //         alert("i will run on each render")
    //     })

        // in this msg display on first render 
        // useEffect(()=>{
        //     alert("i will run on first render only")
        // },[])

        //when we click on count then 
        //  useEffect(()=>{
        //     alert("i will run on click count only")
        // },[counter])

        // useEffect(()=>{
        //     alert("i will run on click count only")
        // },[counter])

        

        // useEffect(()=>{
        //     alert("count is updated");

        //     return()=>{
        //         alert("count unmounted from UI")
        //     }
        // },[counter])


        // function handleClick(){
        //     setCounter(counter+1);
        //     setTotal(total+1);
        // }
        
        // function handleClickTotal(){
        //     setTotal(total+1);
        // }

        // const [user,setUser]=useState({name:"Pravin"})//code for useContext/drilling
        
        // useMemo Practice:

        "useMemo Demo :"

        // const [count,setCounter] = useState(0)
        // const [input,setInput]  =useState(0)

        // let doubleValue = useMemo(()=>ExpensiveTask(input),[input]);

        "useCallback"
        // const [count,setCount] = useState(0);

        //     const handleClick = useCallback(()=>{
        //         setCount(count+1);
        //     },[count]
        //         )
    return (
        <>
        {/* <h1>counter :{counter}</h1>
        <button onClick={Increment}>Increment</button><br/><br/> */}
        {/* <button onClick={Decrement}>Decrement</button>  */}
        {/* <Card /> */}
        {/* <Colors /> */}
        {/* <PassWordGenerator /> */}
        {/* <Currency /> */}
        
        {/* <Product title ="Gaming Laptop" price={1299} instock={true} categories={["Electronics","Computers","Gaming"]} /> */}
        
        {/* <Greeting name ="Pravin" message ="hello"/>
        <Greeting name ="Rahul" message ="Good Morning"/>
        <Greeting name ="Shrusti" message ="Good Afternoon"/>
         */}
        {/* <Button/> */}
        {/* <Button color="yellow"/>
        <br />
        <Button text="register" color="yellow"/> */}
        {/* <div>
            <button onClick={handleClick}>
                click me
            </button><br />
            Count : {counter}
        </div>
        
        <div>
            <button onClick={handleClickTotal}>
                click me
            </button><br />
            Total : {total}
        </div>
 */}

            {/* <LoggerComponent/> */}
            <br />
            {/* <TimmerComponent/> */}
            {/* <Logout/> */}
            {/* <DataFatcher/> */}

            {/* useContext */}

            {/* <UserContext.Provider value={user}>
                <ChildA/>    
            </UserContext.Provider>*/}
            
            {/* "useMemo" */}

            {/* <h1>count :{count}</h1>
            <button onClick={()=>setCounter(count+1)}>Increment</button><br/><br/>
            <input type="number" 
                placeholder="Enter number "
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                
            />
                <div>
                    Double : {doubleValue}
                </div> */}

            {/* useCallBack */}
{/* 
                <div>
                    <div>
                        Count : {count}
                    </div>
                    <div>
                        <button onClick={handleClick}>Increment</button>
                    </div>
                    <div>
                        <ChildCallback buttonName="click me"
                        handleClick={handleClick}
                        />
                    </div>

                </div> */}

        {/* <ExpensiveTask/> */}

            <div>
                <RouterProvider router={router}/>
            </div>

        </>
 )
}

export default App;
// export{UserContext}