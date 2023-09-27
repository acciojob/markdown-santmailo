import React from "react";
import "../styles/App.css"

const App = () => {
    const [textCollection, setTextCollection] = React.useState([]);


    function changeText(e) {
        const text = e.target.value.split("\n").map(
            (item)=> {
                if(item[0]=="#"){
                    return <h1 className="loading">{item.slice(1)}</h1>
                }
                return <p className="loading">{item}</p>
            }
        )
        setTextCollection(text);
    }

    return (
        <div className="app">
            <textarea className="textarea" onChange={changeText}></textarea>
            <section className="preview">
                {textCollection}
            </section>
        </div>
    )
}

export default App;

