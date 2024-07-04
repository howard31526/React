import React,{useState} from "react";

function CountupdatePrac(){
    const [counter,setCounter] = useState(0);

    const increment = () =>{
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1) //這樣設三次並部會使得按下increment的時候一次值+3
        
        // 這種作法叫做updater function
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1) //可以使用prev+開頭大寫的原本數

        setCounter(c => c+1)
        setCounter(c => c+1)
        setCounter(c => c+1)//也可以使用原本數的第一個字母
        
    }
    const decrement = () =>{
        setCounter(c => c-1)
        setCounter(c => c-1)
        setCounter(c => c-1)
    }
    const reset = () =>{
        // setCounter(0)
        setCounter(c => c=0)//使用updater function的寫法

    }

    return( <div className="counter-container">
                <p className="counter-display">{counter}</p>
                <button className="counter-btn" onClick={increment}>INCREMENT</button>
                <button className="counter-btn" onClick={reset}>RESET</button>
                <button className="counter-btn" onClick={decrement}>DECREMENT</button>
            </div>);
}

export default CountupdatePrac