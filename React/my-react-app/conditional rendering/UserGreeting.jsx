function UserGreeting(props)
{

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username} </h2>;

    const loginPrompt = <h2 className="login-prompt"> Please log in to continue</h2>;

    if(props.ifloggedIN)
    {
        return (
            <h2>Welcome {props.username}</h2>
        );
        
    }

    else{
        return (
            <h2>Please login to continue</h2>
        );
    }


    // return (props.ifloggedIN ?  welcomeMessage : loginPrompt ); -> ternary operator

    // condition ? true: false
}

export default UserGreeting