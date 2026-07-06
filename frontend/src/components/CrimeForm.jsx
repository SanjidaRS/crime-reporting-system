import { useState } from "react";

function CrimeForm({ setReport }) {

    const [crimeType, setCrimeType] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [suspects, setSuspects] = useState("");

    function submitReport() {

        const report = {

            crimeType,
            location,
            description,
            suspects

        };

        setReport(report);

    }

    return (

        <div className="form-card">

            <h2>Report an Incident</h2>

            <label>Crime Type</label>

            <input
                value={crimeType}
                onChange={(e)=>setCrimeType(e.target.value)}
                placeholder="Robbery"
            />

            <label>Location</label>

            <input
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder="Downtown Guelph"
            />

            <label>Description</label>

            <textarea
                rows="5"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Describe the incident..."
            />

            <label>Number of Suspects</label>

            <input
                type="number"
                value={suspects}
                onChange={(e)=>setSuspects(e.target.value)}
            />

            <button onClick={submitReport}>

                Submit Report

            </button>

        </div>

    );

}

export default CrimeForm;