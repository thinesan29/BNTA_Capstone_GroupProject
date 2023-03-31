import { useState } from "react";

const CastForm = ({onCastSubmission}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleBioChange = (event) => {
        setBio(event.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newCast = {
            name: name,
            age:age,
            bio:bio,
        }

        onCastSubmission(newCast);
    }

    return (
        <div className="form-container">
            <h3>Add New Actor:</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-element">
                    <label htmlFor="name">Actor's Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="age">Actor's Age:</label>
                    <input type="number" id="age" value={age} onChange={handleAgeChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="bio">Actor's Bio</label>
                    <input type="text" id="bio" value={bio} onChange={handleBioChange}/>
                </div>
                <input type="submit" value="Add Actor"/>
            </form>
        </div>
    )


}

export default CastForm;