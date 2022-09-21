import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpperClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Text has been changed to upperscase", "success");
    }

    const handleLowerClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Text has been changed to lowercase", "success");
    }

    const handleCapitalClick = () => {
        const normalText = text.toLowerCase().split(/\s+/);
        for (let i = 0; i < normalText.length; i++) {
            normalText[i] = normalText[i].charAt(0).toUpperCase() + normalText[i].slice(1);
            console.log(normalText[i]);
        }
        const CaptalizedText = normalText.join(" ");
        setText(CaptalizedText);
        props.showAlert("Text has been changed to capital case", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard", "success");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text has been cleard", "success");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Ready to Speak the text", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    const handlOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black", marginTop : "3.7rem" }}>
                <h2>{props.heading}</h2>
                <div className="mt-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#29263a" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handlOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleUpperClick} >Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleLowerClick} >Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleCapitalClick} >Capital</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleSpeak} >Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleCopy} >Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mt-3 me-2" onClick={handleClear} >Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h4>Youe text summary is here </h4>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )

}