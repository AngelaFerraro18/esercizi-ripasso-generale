import React from "react";

export default function Input() {
    let [value, setValue] = React.useState("");

    return (
        <div>
            <h2>Inserisci il tuo nome</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => value = setValue(e.target.value)} //manca l'uso della fn setValue
            />
            <p>Hai scritto: {value}</p>
        </div>
    );
}
