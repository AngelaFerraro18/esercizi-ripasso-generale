import React, { useState } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h2>Accetto i termini</h2>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <p>{checked ? "✅ Accettato" : "❌ Non accettato"}</p>
        </div>
    );
}
