import { useState, useEffect } from "react";
import CastForm from "../Components/CastForm";
import CastList from "../Components/CastList";

const CastContainer = () => {
    const [casts, setCasts] = useState([]);

    const loadCastData = () => {
        fetch("http://localhost:8080/casts")
            .then(response => response.json())
            .then(data => setCasts(data));
    }

    const submitNewCast = (newCast) => {
        fetch("http://localhost:8080/casts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCast)
        })
            .then(loadCastData);
    }

    const removeCast = (id) => {
        fetch(`http://localhost:8080/casts/${id}`, {
            method: "DELETE"
        })
            .then(loadCastData);
    }

    useEffect(loadCastData, []);

    return(
        <div className="grid-container">
            <CastForm onCastSubmission={submitNewCast}/>
            <CastList casts={casts} onDelete={removeCast}/>
        </div>
    )

}

export default CastContainer;