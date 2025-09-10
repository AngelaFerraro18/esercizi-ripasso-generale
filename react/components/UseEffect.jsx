import React, { useState, useEffect } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effetto eseguito");
        setCount(count => count + 1);
    }, []);

    return (
        <div>
            <h2>Effetto infinito?</h2>
            <p>Count: {count}</p>
        </div>
    );
}
