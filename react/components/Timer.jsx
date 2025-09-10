import React, { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h2>Timer: {seconds}s</h2>
        </div>
    );
}
