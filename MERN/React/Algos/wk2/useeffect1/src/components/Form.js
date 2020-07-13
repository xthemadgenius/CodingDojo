import React, { useState } from 'react';

const Form = () =>{
    const [name, setName] = useState("");

    let errorMessage = "";

    if (name.length <= 2) {
        errorMessage = "bad";
    } else {
        errorMessage = "good";
    }
    return (
        <form>
            <p>{errorMessage}</p>
            <label style={{ color: name.length <= 2 ? "red" : "green" }}>
            Name:{" "}
            </label>
            <input
            onChange={(event) => {
                setName(event.target.value);
            }}
            type="text"
            />
        </form>
    );
}

export default Form;