// onchange = event handler used primarily with form elements example: input, textarea, select, radio, Triggers a function every time the value of the input changes.


import React, {useState} from 'react';
function MyComponent()
{

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("None");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function updateName(event)
    {
        setName(event.target.value);
    }


    function quantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function handleChangeComment(event)
    {
        setComment(event.target.value);

    }
    function handleChangePayment(event)
    {
        setPayment(event.target.value);

    }
    function handleChangeShipping(event)
    {
        setShipping(event.target.value);

    }
    return (
        <div>
            <input value={name} onChange={updateName}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={quantityChange} type='number'/>
            <p>Quanity: {quantity}</p>
            <input value={comment} onChange={handleChangeComment} placeholder='Enter delivery indstructions'/>
            <p>Comment: {comment}</p> 


            <select value={payment} onChange={handleChangePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="Pick Up"
                            checked={shipping === "Pick Up"} 
                            onChange={handleChangeShipping} />
                Pick Up
            </label><br />

            <label >
            <input type="radio" value="Delivery"
                            checked={shipping === "Delivery"} 
                            onChange={handleChangeShipping} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>

        </div>
    );
}

export default MyComponent