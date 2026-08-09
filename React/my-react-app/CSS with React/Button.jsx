function Button()
{
    // inline
    const styles = {
        backgroundColor: "hsla(135, 2.00%, 60.40%, 0.70)",   
        color: "rgb(255, 255, 255)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: " dnone",
        cursor: "pointer",
    }
    return (<button className={styles}>Click Me</button>);
}

export default Button 