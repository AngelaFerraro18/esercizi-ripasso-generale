import React, { useEffect, useState } from "react";

export default function ListaPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => posts = data);
    }, []);

    return (
        <div>
            <h2>Ultimi Post</h2>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}
