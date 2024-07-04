import React,{useState} from "react";
function Carpractice(){

    const [car,setCar] = useState([]);
    const [year,setYear] = useState( new Date().getFullYear());
    const [make,setMake] = useState("");
    const [model,setModel] = useState("");

    function handleAddCar(){
        const newCar = {carYear:year,
                        carMake:make,
                        carModel:model};
        setCar(c => [...c,newCar]);
        // reset data
        setYear( new Date().getFullYear());
        setMake("");
        setModel("");

    }
    function handleRemoveCar(index){
        setCar(c => c.filter((_,i) => i!==index))
    }
    function handleYearChange(event){
        setYear(event.target.value)
    }
    function handleMakeChange(event){
        setMake(event.target.value)
    }
    function handleModelChange(event){
        setModel(event.target.value)
    }

    return( <div>
                <h2>List of car</h2>
                <ul>
                    {car.map((car,index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.carYear} {car.carMake} {car.carModel}
                        </li>)}
                </ul>
                <input type="number" value={year} onChange={handleYearChange} />
                <input type="text" value={make} onChange={handleMakeChange} placeholder="Enter car make"/>
                <input type="text" value={model} onChange={handleModelChange} placeholder="Enter car model"/>
                <br />
                <br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>)
}

export default Carpractice