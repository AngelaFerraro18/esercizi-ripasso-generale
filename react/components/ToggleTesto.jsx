import React, { useState } from "react";

export default function ToggleTesto() {
    const [visibile, setVisibile] = useState(false);

    return (
        <div>
            <button onClick={() => visibile = !visibile}>
                {visibile ? "Nascondi" : "Mostra"}
            </button>
            {visibile && <p>Questo testo dovrebbe apparire e scomparire.</p>}
        </div>
    );
}
