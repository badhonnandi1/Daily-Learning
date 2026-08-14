
import MyComponent from "./MyComponents";
import Counter from "./Counter.jsx";
function App()
{
    return(
        <>
        {/* <MyComponent/> */}
        <Counter/>
        </>
);
}
export default App


// react hook = spacial function that allows functional components to use React features without writing components. (useState, useEffect,usecContext, useReducer, useCallback...)

// useState() = A React hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.