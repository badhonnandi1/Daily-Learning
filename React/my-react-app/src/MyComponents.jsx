import React, {useState} from 'react';
function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(19);
    const [employed, setIsEmployed] = useState(false);
        
    const updateName = () => {
        setName("Spongebob");
    }

    const updateAge = () => {
        setAge(age + 2);
    }

    const UpdateEmployed = () => {
        if (employed)
        {
            setIsEmployed(false);
        }
        else
        {
            setIsEmployed(true);
        }
    }
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Employeed: {employed ? "Yes" : "No"}</p>

            <button onClick={updateName}>Set Name</button>
            <button onClick={() => updateAge(24)}>Set Age</button>
            <button onClick={UpdateEmployed}>Update Employement</button>
        </div>
    );
}

export default MyComponent