import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    // useEffect(function ,[dependencies]);
    useEffect(() =>{
        const intervalID = setInterval(() => {
            setTime(new Date());
        },1000); //means every 1000ms(millisecond) will renew the time data

        return() => {
            clearInterval(intervalID);
        }
    } ,[]);

    function formatime(){
        //當我們在 JavaScript 中使用 const 來定義變數時，這個變數的值設定後就不能再改變。不能再次賦值給這個變數。
        // 而在 formatime 中，hours 變數在初始定義後被重新賦值，因此不能使用 const。
        let hours = time.getHours();
        const minutes = time.getUTCMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM":"AM";

        hours = hours % 12 || 12; //這邊是為了保持都是0~12時間再跑，但如果12%12=0會出現false執行不了，因此需要or來幫忙

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number; 
        //if number<10 will return a 0+number else will return an empty string only number
    }


    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatime()}</span>
            </div>
        </div>
    )
}
export default DigitalClock;