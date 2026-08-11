import Student from "./Student.jsx";
function App()
{
    return(
        <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Badhon" age={24} isStudent={true}/>
        </>
    );
}
export default App