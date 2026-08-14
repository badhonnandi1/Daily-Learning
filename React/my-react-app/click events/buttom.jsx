function Button()
{

    // const handleClick = () => console.log("Ouch!");
    // let count = 0;
    // const handleClick = (name) => {

    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }

    // };
    // const handleClick2 = (name) => console.log(`${name} stop clicking now`);

    // const handleClick = (event) => console.log(event);
    const handleClick = (event) => event.target.textContent = "Ouch";

    return(<>
     {/* <button onClick={() => handleClick}>Click Me</button>  */}
    {/* <button onClick={() => handleClick("Badhon")}>Click Me</button> */}

    <button onClick={(event) => handleClick(event)}>Click Me</button>
    <button onDoubleClick={(event) => handleClick(event)}>Click Me</button>
    </>)
}

export default Button 