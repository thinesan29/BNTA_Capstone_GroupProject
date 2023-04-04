import { useState } from "react";

const CastForm = ({onCastSubmission}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleBioChange = (event) => {
        setBio(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
      };

    const handleValidation = () => {
        if (!name.trim() || !age.trim() || !bio.trim() || !image) {
            setError("All fields are required.");
            return false;
        }

        const imageName = image.name.toLowerCase();
        const actorName = name.toLowerCase();

        if (!imageName.includes(actorName)) {
            setError("Actor name must match image name.");
            return false;
        }

        setError("");
        return true;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (handleValidation()) {
            const newCast = {
                name: name,
                age: age,
                bio: bio,
                image: image,
            }

            onCastSubmission(newCast);
        }
    }
    

    return (
        <div className="form-container">
            <h3>Add New Actor/Actress:</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-element">
                    <label htmlFor="name">Actor/Actress Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="age">Actor/Actress Age:</label>
                    <input type="number" id="age" value={age} onChange={handleAgeChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="bio">Actor/Actress Bio</label>
                    <input type="text" id="bio" value={bio} onChange={handleBioChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="image">Actor/Actress Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} />
                </div>
                <input type="submit" value="Add Actor/Actress"/>
            </form>
            <p>{error}</p>
        </div>
    )


}

export default CastForm;