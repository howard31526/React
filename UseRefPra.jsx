import React,{useState,useEffect,useRef} from "react";

function UseRefPra(){
    // let [number,setNum] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RERENDERD")
    })

    function handleClick1(){
        // setNum(n => n + 1);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        // setNum(n => n + 1);
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        // setNum(n => n + 1);
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <br />
            <input ref={inputRef1} />
            <br />

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <br />
            <input ref={inputRef2} />
            <br />

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <br />
            <input ref={inputRef3} />

        </div>
    )
}

export default UseRefPra;