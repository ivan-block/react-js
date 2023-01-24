import React from "react";
import Note from "./Note"
import contents from "./contents";

function createContent(content) {
    return (
    <Note
        key = {content.id}
        heading = {content.heading}
        paragraph = {content.paragraph}
    />
    )
    
}

function App() {
    const date = new Date();
    const year = date.getFullYear();

    return (
    <>
    <nav>
        <div>
            <h1>Keeper</h1>
        </div>
    </nav>
    {contents.map(createContent)}
    <footer>
        <p>Copyright &copy; {year}</p>
    </footer>
    </>

    )
}


export default App;