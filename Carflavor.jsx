import React,{useState} from "react";
function Carflavor(){
    const [car, setCar] = useState ({year :2024,
                                     make:"Ford", 
                                     model:"Mustang"})
    function handleYearChange(event){
        // setCar({year:2025})//因為我要更動year的部分，正常可以這樣寫，然而這樣寫的情況，其他的property會消失，為避免消失，也得把其他原本property的值寫近來
        // setCar({year:2024,make:"Ford",model:"Mustang",year:2025})
        //這樣的寫法是為了讓前面有些參數不變，而最後放上要更正的參數內容，然而不能在同一個內出現兩個相同符號的參數，所以要改用"...car"
        // setCar({...car,year:2025});//這樣寫只是改成2025，要變動值要寫成event.target.value，並且加上之前學的updater function的方式，確保更正的值都會儲存
        setCar(c => ({...c, year: event.target.value}))
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make : event.target.value}))
    }  
    function handleModelChange(event){
        setCar(c => ({...c, model : event.target.value}))
    }

    return( <div>
                <p>My favorite car is :{car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleYearChange}/><br></br>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br></br>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>)
}

export default Carflavor