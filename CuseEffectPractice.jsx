import React,{useState, useEffect} from "react";
// useEffect(() => {})          Runs every re-renser
// useEffect(() => {},[])       Runs only on mounts
// useEffect(() => {},[value])  Runs only on mounts + when value changes


function CuseEffectPractice(){
    const [count, setCount] = useState(0);
    const [color,setColor] = useState("green");

    function handleADD(){
        setCount(c => c+1);
    }
    function handlesubstract(){
        setCount(c => c-1);
    }
    function Changecolor(){
        setColor(c => c === "green"?"red":"green");
    }

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`; //這邊的`....`是在鍵盤左上角的，不同於''符號，這樣才可飲用js
    // }) //這種方式，會使得title不斷的被更新

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // },[])//這種方式只會執行一次程式，即title會變成Count:0然後一直停在這個上

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return()=>{
            //can return some clean up code
        }
    },[count])//do this code "document.title = `Count: ${count} ${color}`" only when [count] value updated [color]value change won't affect the presentation

    document.title = `Count: ${count} ${color}`//if not using useEffect the title still change, then why we use it?
    //(1)more organized (2)can tell when the code run (3)using useEffect can also return some clean up codes

    return( <div>
                <p style={{color : color}}>Count : {count}</p>
                <button onClick={handleADD}>ADD</button>
                <button onClick={handlesubstract}>SUBSTRACT</button>
                <br />
                <button onClick={Changecolor}>COLOR-CHANGE</button>
            </div>)
}
export default CuseEffectPractice