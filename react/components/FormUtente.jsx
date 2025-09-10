import React, { useState } from "react";

export default function FormUtente() {
    const [nome, setNome] = useState("");
    const [ruolo, setRuolo] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Nome: ${nome}, Ruolo: ${ruolo}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </label>
            <br />
            <label>
                Ruolo:
                <select value={ruolo} onChange={(e) => setRuolo(e.target.value)}>
                    <option value="user">Utente</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <br />
            <button type="submit">Invia</button>
        </form>
    );
}
