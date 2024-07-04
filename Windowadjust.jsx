import React,{useState,useEffect} from "react";

function Windowadjust(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    // window.addEventListener("resize",Widowresize);
    // console.log("EVENT LISTENER ADDED")
    //if write as this way, it will console every time when we are adjusting the window.
    //how about using useEffect?

    useEffect(()=>{
        window.addEventListener("resize",Widowresize);
        console.log("EVENT LISTENER RESIZE")

        return()=>{
            window.removeEventListener("resize",Widowresize)
            console.log("EVENT LISTENER REMOVED")
        }
    },[])

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`
    },[width,height])

    function Widowresize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return( <div>
                <p>Window.Width : {width}   px</p>
                <p>Window.Height : {height} px</p>
            </div>)
}
export default Windowadjust