import React,{useState} from "react";

function Food(){
    const[food, setFood] = useState(["Apple","Orange","Banana"]);

    function handleAddfood(){
        const newfood = document.getElementById("foodname").value; //再按下Add後,把input element用id抓取存放在newfood裡，newfood變成一個string
        document.getElementById("foodname").value = "";//把input的值在按下Add按鈕後清空,而input element save in newfood as a string
        // setFood([newfood]);//if pass a new array to list use this，however we want to save the previous elements so...
        setFood(f => [...f,newfood])
    }
    function handleRemovefood(index){
        setFood(food.filter((_,i ) => i!== index))
        // filter是一個陣列方法，用於過濾陣列中的元素。
        // (_, i)中的_代表每個元素（我們不需要用到元素本身），i代表當前元素的索引。
        // i !== index這個條件用來過濾掉與給定索引index相同的元素。也就是說，只有當元素的索引不等於index時，這個元素才會保留在新的陣列中。
    }

    return( <div>
                <h2>List of Food</h2>
                <ul>
                    {food.map((food,index) => <li key={index} onClick={()=>handleRemovefood(index)}>{food}</li>)}
                    {/* map是將內容設為一個矩陣(和C++很像)，li內要放key items為了之後的刪除動作,使key為index，用onClick使碘顯到的物體從index中刪除 */}
                    <input type="text" id="foodname" placeholder="Enter a food" />
                    <button onClick={handleAddfood}>Add</button>
                </ul>
            </div>)
}
export default Food