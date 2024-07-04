import React,{useState} from "react";

function Colorpicker(){

    const[color, setcolor] = useState("#FFFFFF")

    function setcolorHandler(event){
        setcolor(event.target.value)
    }

    return( <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected : {color}</p>
                </div>
                <label>Select Color :</label>
                <input type="color" value={color} onChange={setcolorHandler} />

            </div>);
}
export default Colorpicker