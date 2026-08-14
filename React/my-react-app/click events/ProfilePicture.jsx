function ProfilePicture()
{
    const imageUrl = '.src/assets/hero.png';

    // const handleClick = () => console.log("Ouch!");
    const handleClick = (event) => event.target.style.display = "none";

    return (
        // <img onClick={handleClick} src={imageUrl}></img>
        <img onClick={(event) => handleClick(event)} src={imageUrl}></img>
    );
}

export default ProfilePicture