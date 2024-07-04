import React,{useState} from "react";

function Count(){
    const [counter,setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () =>{
        setCounter(counter-1)
    }
    const reset = () =>{
        setCounter(0)
    }

    return( <div className="counter-container">
                <p className="counter-display">{counter}</p>
                <button className="counter-btn" onClick={increment}>INCREMENT</button>
                <button className="counter-btn" onClick={reset}>RESET</button>
                <button className="counter-btn" onClick={decrement}>DECREMENT</button>
            </div>);
}

export default Count