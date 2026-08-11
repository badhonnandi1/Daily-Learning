// conditional rendering.
import UserGreeting from "./UserGreeting.jsx";
function App()
{
    return(
        <>
            <UserGreeting ifloggedIN = {false} username = "Badhon"/>
        </>
    );
}
export default App