import React,{useState} from "react";

function MyComp2(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuan] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPay] = useState("");
    const [shipping, setShip] = useState("");

    function handlenamechange(event){
        setName(event.target.value)
    }
    function handlequantitychange(event){
        setQuan(event.target.value)
    }
    function handleCommentchange(event){
        setComment(event.target.value)
    }
    function handlePaymentchange(event){
        setPay(event.target.value)
    }
    function handleShippingchange(event){
        setShip(event.target.value)
    }

    return( <div>
                <input value={name} onChange={handlenamechange} />
                <p>Name : {name}</p>
                <input value={quantity} onChange={handlequantitychange} type="number" />
                <p>Quantity : {quantity}</p>
                <textarea value={comment} onChange={handleCommentchange} placeholder="Enter delivery instructions" />
                <p>Comment : {comment}</p>
                <select value={payment} onChange={handlePaymentchange}>
                    <option value="">Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Cash">Cash</option>
                </select>
                <p>Payment : {payment}</p>
                <label>
                    <input type="radio" value="Pick up"
                           checked = {shipping=="Pick up"} 
                           onChange={handleShippingchange}/>
                    Pick up
                </label><br />
                <label>
                    <input type="radio" value="Delivery" 
                           checked = {shipping=="Delivery"}
                           onChange={handleShippingchange}/>
                    Delivery
                </label>
                <p>Shipping : {shipping}</p>
            </div>);
}

export default MyComp2