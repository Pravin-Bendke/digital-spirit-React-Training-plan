import { useCallback, useEffect, useRef, useState} from "react";

function PassWordGenerator(){

    const [length,setLength]     = useState(8)
    const [numAllow,setNumAllow] = useState(false)
    const [symAllow,setSymAllow] = useState(false)
    const [password,setPassword] = useState("")

// use useRef Hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let pass ="";
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllow) str+="1234567890"
        if(symAllow) str+="!@#$%^&*()~`:<>?,./+=_[]{}"

        for (let i = 0; i < length; i++) {
            const char = Math.floor(Math.random()*str.length);
            pass += str.charAt(char);
        }
        setPassword(pass)

    },[length,numAllow,symAllow])

// Copy Password :

    const copyPassword=useCallback(()=>{
        passwordRef.current?.select()//all select
        passwordRef.current.setSelectionRange(0,5)//select range of input char
        window.navigator.clipboard.writeText(password)
        // alert("copy")
    },[password])
    

    useEffect(()=>{
        passwordGenerator()
    },[length,numAllow,symAllow,passwordGenerator])
    return(
        <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 bg-gray-700 text-orange-400">
        <h1 className="text-center text-2xl font-bold text-white mb-5">
            Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-2 px-3 text-black"
                placeholder="Password"
                readOnly

                ref={passwordRef}
            />

            <button className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shrink-0" onClick={copyPassword}>
                Copy
            </button>
        </div>

        <div className="flex text-sm gap-x-4 items-center flex-wrap">

            <div className="flex items-center gap-x-2">
                <input
                    type="range"
                    min={8}
                    max={40}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e) => {
                        setLength(e.target.value);
                    }}
                />
                <label>Length : {length}</label>
            </div>

            <div className="flex items-center gap-x-2">
                <input
                    type="checkbox"
                    defaultChecked={numAllow}
                    id="numInput"
                    onChange={() => {
                        setNumAllow((prev) => !prev);
                    }}
                />
                <label htmlFor="numInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-2">
                <input
                    type="checkbox"
                    defaultChecked={symAllow}
                    id="symInput"
                    onChange={() => {
                        setSymAllow((prev) => !prev);
                    }}
                />
                <label htmlFor="symInput">Symbols</label>
            </div>

        </div>
    </div>
</>
    )
}

export default PassWordGenerator