import React from 'react'

export default function About(props) {
    const myStyle= {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "rgb(41, 38, 58)" : "white",
        border : props.mode === "dark" ? "1px solid grey" : ""
    }

    return (
        <>
            <div className="container" style={{color : props.mode === "dark" ? "white" : "black"}}>
                <div className="accordion container mt-4" id="accordionExample">
                    <h2 className="my-4">About TextUtils</h2>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>What is TextUtils use for ?</strong> 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils</strong> Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. Like converting it in Upppercase, Lowercase, Removing extra spaces, after manipulating previewing text and copy the manipulated text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Freatures of TextUtils</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Convert your text in Uppercase, Lowercase, Remove extra spaces, Copy your text,
                                preview text after manipulation, listen to your text by a clicking on Speak button.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Technologies used to build this textUtils web application </strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            This whole web application is build using <strong>'React js'.</strong> 
                            </div>
                        </div>
                    </div>
                {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText} Mode</button> */}
                </div>
                
            </div>
        </>
    )
}
