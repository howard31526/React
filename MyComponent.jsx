import React, {useState} from 'react';

function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () =>{
        setName("Howard is handsome")
    };

    const incrementAge = () =>{
        setAge(age+1)
    };
    const decrementAge = () =>{
        setAge(age-1)
    };

    return( <div>
                <p>Name:{name}</p>
                <button onClick={updateName}>Set name</button>

                <p>Age:{age}</p>
                <button onClick={incrementAge}>increment Age</button>
                <button onClick={decrementAge}>decrement Age</button>
                
            </div>);
}
export default MyComponent