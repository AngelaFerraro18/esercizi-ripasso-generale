import React, { useEffect } from "react";

export default function ListaSpesa() {
    const items = ["Pane", "Latte", "Uova"];

    const [list, setList] = React.useState([]);
    useEffect(() => setList(items), [])

    return (
        <div>
            <h2>Lista della spesa</h2>

            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>

        </div>
    );
}
