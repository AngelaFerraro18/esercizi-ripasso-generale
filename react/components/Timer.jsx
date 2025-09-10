import React, { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            seconds++;
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h2>Timer: {seconds}s</h2>
        </div>
    );
}
