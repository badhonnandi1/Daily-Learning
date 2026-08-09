import profilePic from "./myimage.jpg"
function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Badhon Nandi</h2>
            <p className="card-text">Software Engineer | Teacher</p>
        </div>
    );
}

export default Card 