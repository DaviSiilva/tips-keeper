import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import note from "../note";

function tasks(note) {
    return (
        <Note 
            key={note.id}
            title={note.title}
            description={note.description}

        />
    )
}

function App() {
    return <div>
        <h1>
            <Header />
            {note.map(tasks)}
            <Footer />
        </h1>
    </div>
}

export default App;