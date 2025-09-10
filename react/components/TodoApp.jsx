import React, { useState } from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState(["Studiare React"]);
    const [input, setInput] = useState("");

    function aggiungiTodo() {
        setTodos([...todos, input]);
        input = "";
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => input = e.target.value}
            />
            <button onClick={aggiungiTodo}>Aggiungi</button>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
