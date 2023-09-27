import React from "react";
import "../styles/App.css"

const App = () => {

    const [text, setText] = React.useState("");

    function changeText(e) {
        setText(e.target.value);
    }


    return (
        <div className="app">
            <textarea className="textarea" onChange={changeText}></textarea>
            <section className="preview">
                <p className="loading">{text}</p>
            </section>
        </div>
    )
}

export default App;

