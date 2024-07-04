import React,{useState,useEffect,useRef} from "react"

function StopWatch(){

    const [isRun, setIsRun] = useState(false);
    const [elapsedTIme,setElapse] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const [record,setRecord] = useState([]);

    useEffect(()=>{
        if(isRun){
            // setInterval(callback,10) //set a callback function every 10 millisecond will repeat
            intervalIdRef.current = setInterval(() => {
                setElapse(Date.now() - startTimeRef.current);
            }, 10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }

    },[isRun]);

    function start(){
       setIsRun(true);
       startTimeRef.current = Date.now() - elapsedTIme;
    }
    function stop(){
        setIsRun(false);
        setRecord(r => [...r,formatTime(elapsedTIme)]);
    }
    function reset(){
        setElapse(0);
        setIsRun(false);
    }
    function formatTime(){
        let hours =  Math.floor(elapsedTIme / (1000*60*60));
        let minutes =  Math.floor(elapsedTIme / (1000*60) % 60);
        let seconds =  Math.floor(elapsedTIme / (1000) % 60);
        let milliseconds =  Math.floor(elapsedTIme % 1000 /10); //only show the first two digits

        hours = String(hours).padStart(2,"0"); //start this number with pad two "0"
        minutes = String(minutes).padStart(2,"0"); 
        seconds = String(seconds).padStart(2,"0"); 
        milliseconds = String(milliseconds).padStart(2,"0"); 

        return`${minutes}:${seconds}:${milliseconds}`;
    }
    function handlerecord(event){
        setRecord(event.target.value)
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-btn" onClick={start}>Start</button>
                <button className="stop-btn" onClick={stop} onRateChange={handlerecord}>Stop</button>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
            <div className="show">
                <p>Show Record</p>
                <div className="Record">
                    <ul>
                        {record.map((record,index) => <li key={index}>{record}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default StopWatch