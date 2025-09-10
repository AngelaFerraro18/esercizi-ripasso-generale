import React from "react";

export default function Contatore() {
    const [count, setCount] = React.useState(0);

    function increment() {
        // count = count + 1;

        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>Contatore</h2>
            <p>Valore: {count}</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}
